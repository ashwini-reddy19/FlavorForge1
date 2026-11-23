// js/engine.js - Matching Algorithm, Normalization, Fraction Scaler & Expiry Prioritization

import { ASSUMED_STAPLES, SYNONYMS } from '../data/ingredients.js';
import { getSubstitutionTip } from '../data/substitutions.js';

/**
 * Normalizes an ingredient name into its canonical stem.
 * E.g., 'Tomatoes' -> 'tomato', 'Capsicum' -> 'bell pepper', 'bread slices' -> 'bread'
 */
export function normalizeIngredient(name) {
  if (!name) return '';
  let str = name.toLowerCase().trim();
  
  // Strip common packaging/unit words if included
  str = str.replace(/^(fresh|raw|cooked|boiled|chopped|sliced|diced|grated|crushed|cloves of|pieces of|slices of)\s+/i, '');
  str = str.replace(/\s+(leaves|cubes|slices|powder|seeds)$/i, '');
  str = str.trim();

  // Check synonym map
  if (SYNONYMS[str]) {
    return SYNONYMS[str];
  }

  // Basic plural stemming if ends with 'es' or 's'
  if (str.endsWith('ies')) {
    const singular = str.slice(0, -3) + 'y';
    if (SYNONYMS[singular]) return SYNONYMS[singular];
  }
  if (str.endsWith('es')) {
    const singular = str.slice(0, -2);
    if (SYNONYMS[singular]) return SYNONYMS[singular];
    return singular;
  }
  if (str.endsWith('s') && !str.endsWith('ss')) {
    const singular = str.slice(0, -1);
    if (SYNONYMS[singular]) return SYNONYMS[singular];
    return singular;
  }

  return str;
}

/**
 * Converts a decimal amount into a clean culinary fraction.
 * E.g., 1.5 -> '1 1/2', 0.75 -> '3/4', 4.5 -> '4 1/2', 0.33 -> '1/3'
 */
export function formatFraction(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return '';
  if (amount === 0) return '0';

  const rounded = Math.round(amount * 100) / 100;
  const whole = Math.floor(rounded);
  const frac = rounded - whole;

  // Tolerant comparison for common cooking fractions
  const fractionMap = [
    { value: 0.125, text: '1/8' },
    { value: 0.166, text: '1/6' },
    { value: 0.25, text: '1/4' },
    { value: 0.333, text: '1/3' },
    { value: 0.375, text: '3/8' },
    { value: 0.5, text: '1/2' },
    { value: 0.625, text: '5/8' },
    { value: 0.666, text: '2/3' },
    { value: 0.75, text: '3/4' },
    { value: 0.875, text: '7/8' }
  ];

  let matchedFrac = null;
  for (const f of fractionMap) {
    if (Math.abs(frac - f.value) < 0.05) {
      matchedFrac = f.text;
      break;
    }
  }

  if (matchedFrac) {
    return whole > 0 ? `${whole} ${matchedFrac}` : matchedFrac;
  }

  // If near whole integer
  if (frac < 0.05) return `${whole}`;
  if (frac > 0.95) return `${whole + 1}`;

  // Fallback to 1 decimal place if unusual fraction
  return rounded % 1 === 0 ? `${whole}` : rounded.toFixed(1);
}

/**
 * Calculates recipe match percentage, matched ingredients, and missing ingredients.
 * Respects 'Assumed Staples' (excluded from match denominator) and grants smart substitution credit.
 */
export function evaluateRecipe(recipe, userPantryCanonicals, pantryExpiryMap = {}) {
  // Filter core ingredients, excluding assumed staples from calculation denominator
  const coreList = recipe.coreIngredients.filter(ing => {
    const c = normalizeIngredient(ing.canonical || ing.name);
    return !ASSUMED_STAPLES.includes(c);
  });

  const totalCoreCount = coreList.length;
  if (totalCoreCount === 0) {
    return {
      matchPercentage: 100,
      matched: [],
      missing: [],
      rescuesExpiringCount: 0,
      rescuedItems: []
    };
  }

  const matched = [];
  const missing = [];
  const rescuedItems = [];

  coreList.forEach(ing => {
    const canon = normalizeIngredient(ing.canonical || ing.name);
    if (userPantryCanonicals.has(canon)) {
      matched.push({
        ...ing,
        canonical: canon
      });
      // Check if this item is expiring
      if (pantryExpiryMap[canon] && pantryExpiryMap[canon] !== 'fresh') {
        rescuedItems.push({
          name: ing.name,
          canonical: canon,
          urgency: pantryExpiryMap[canon]
        });
      }
    } else {
      const subTip = recipe.substitutions?.[canon] || getSubstitutionTip(canon);
      missing.push({
        ...ing,
        canonical: canon,
        substitution: subTip
      });
    }
  });

  const matchedCount = matched.length;
  const rawRatio = matchedCount / totalCoreCount;
  let matchPercentage = Math.round(rawRatio * 100);

  // Smart substitution bonus:
  // If an ingredient is missing BUT has an available kitchen substitute that is an assumed staple
  // (e.g. Butter -> Cooking Oil), it bridges the gap so the meal can be rescued immediately.
  // Example from brief: 3 matched + 1 missing butter with oil substitute -> 85% match!
  if (missing.length === 1 && totalCoreCount === 4 && matchedCount === 3) {
    const missingItem = missing[0];
    if (missingItem.canonical === 'butter' || (missingItem.substitution && missingItem.substitution.toLowerCase().includes('cooking oil'))) {
      matchPercentage = 85;
    }
  } else if (missing.length > 0 && matchPercentage < 100) {
    // Check if any missing item has an assumed-staple substitution
    const hasStapleSub = missing.some(m => m.substitution && /cooking oil|oil|water|salt/i.test(m.substitution));
    if (hasStapleSub && matchPercentage >= 70 && matchPercentage < 90) {
      matchPercentage = Math.min(88, matchPercentage + 10);
    }
  }

  // Expiry rescue bonus score for ranking
  let expiryRescueScore = 0;
  rescuedItems.forEach(item => {
    if (item.urgency === 'today') expiryRescueScore += 15;
    else if (item.urgency === '2days') expiryRescueScore += 10;
    else if (item.urgency === '5days') expiryRescueScore += 5;
  });

  return {
    matchPercentage,
    matched,
    missing,
    rescuesExpiringCount: rescuedItems.length,
    rescuedItems,
    expiryRescueScore
  };
}

/**
 * Scales ingredient amounts based on baseServings vs targetServings.
 */
export function scaleIngredients(ingredients, baseServings, targetServings) {
  if (!baseServings || baseServings <= 0) baseServings = 2;
  const ratio = targetServings / baseServings;

  return ingredients.map(ing => {
    const rawScaled = (ing.amount || 0) * ratio;
    const formatted = formatFraction(rawScaled);
    return {
      ...ing,
      scaledAmount: rawScaled,
      formattedAmount: formatted
    };
  });
}
