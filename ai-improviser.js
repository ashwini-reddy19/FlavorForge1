// js/ai-improviser.js - AI Chef Recipe Improviser for unusual leftover combos

export async function improviseRecipe(pantryIngredients, expiringItems = [], customPrompt = '', apiKey = '') {
  // If user provides a Gemini API key, attempt live Gemini call
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const liveResult = await callGeminiAPI(apiKey.trim(), pantryIngredients, expiringItems, customPrompt);
      if (liveResult) return liveResult;
    } catch (err) {
      console.warn('Live API call failed, falling back to built-in culinary AI generator:', err);
    }
  }

  // Built-in intelligent culinary synthesis engine
  return generateIntelligentRecipe(pantryIngredients, expiringItems, customPrompt);
}

function generateIntelligentRecipe(ingredients, expiringItems, customNote) {
  const ingNames = ingredients.map(i => i.name || i);
  const expiringNames = expiringItems.map(i => i.name || i);

  if (ingNames.length === 0) {
    return {
      title: "Chef's Pantry Essential Stir-Fry",
      time: 15,
      difficulty: "Easy",
      servings: 2,
      nutrition: { calories: 250, protein: 8, carbs: 25, fat: 12 },
      description: "A quick skillet dish created with everyday home kitchen staples.",
      ingredients: [
        { name: "Cooking Oil or Butter", amount: "1.5 tbsp" },
        { name: "Salt & Black Pepper", amount: "to taste" },
        { name: "Water", amount: "as needed" }
      ],
      instructions: [
        "Select at least 2-3 ingredients from your pantry selector to unlock a customized rescue recipe.",
        "Heat oil in a pan over medium heat.",
        "Toss in your ingredients from firmest to softest.",
        "Season with salt and pepper, cover, and cook until tender."
      ],
      chefTip: "Add items from the pantry selector above to generate tailored rescue recipes!",
      safetyNotice: "Always ensure leftover food is heated until steaming hot (75°C / 165°F)."
    };
  }

  // Determine dish style based on primary ingredients
  const hasEgg = ingNames.some(n => /egg/i.test(n));
  const hasPotato = ingNames.some(n => /potato/i.test(n));
  const hasRice = ingNames.some(n => /rice/i.test(n));
  const hasBread = ingNames.some(n => /bread/i.test(n));
  const hasPasta = ingNames.some(n => /pasta/i.test(n));
  const hasPaneer = ingNames.some(n => /paneer|tofu/i.test(n));
  const hasMilk = ingNames.some(n => /milk|curd|yogurt/i.test(n));
  const hasTomato = ingNames.some(n => /tomato/i.test(n));
  const hasOnion = ingNames.some(n => /onion/i.test(n));
  const hasGarlic = ingNames.some(n => /garlic/i.test(n));
  const hasSpinach = ingNames.some(n => /spinach|greens/i.test(n));

  let style = 'Skillet Medley';
  let title = '';
  let prepMinutes = 15;
  let diff = 'Easy';

  if (hasEgg && (hasPotato || hasOnion)) {
    title = `Rustic Farmhouse ${hasPotato ? 'Potato' : 'Onion'} & Egg Frittata`;
    style = 'Frittata';
    prepMinutes = 18;
  } else if (hasRice) {
    title = `Crispy Golden Rescue Fried Rice with ${ingNames.slice(0, 2).join(' & ')}`;
    style = 'Fried Rice';
    prepMinutes = 12;
  } else if (hasBread) {
    title = `Sizzling Griddled Melts with Spiced ${ingNames.filter(n => !/bread/i.test(n)).slice(0, 2).join(' & ') || 'Pantry Filling'}`;
    style = 'Toast Melt';
    prepMinutes = 10;
  } else if (hasPasta) {
    title = `One-Pan Al Dente Skillet Pasta with ${ingNames.filter(n => !/pasta/i.test(n)).slice(0, 2).join(' & ') || 'Garlic & Herbs'}`;
    style = 'Pasta';
    prepMinutes = 16;
  } else if (hasPaneer) {
    title = `Fire-Charred Paneer & ${ingNames.filter(n => !/paneer/i.test(n)).slice(0, 2).join(' & ') || 'Onion'} Sauté`;
    style = 'Stir-Fry';
    prepMinutes = 14;
  } else if (hasPotato) {
    title = `Crushed Crispy Skillet Potatoes with ${ingNames.filter(n => !/potato/i.test(n)).slice(0, 2).join(' & ') || 'Spices'}`;
    style = 'Hash';
    prepMinutes = 20;
  } else {
    title = `Chef's Emergency Rescue Sauté: ${ingNames.slice(0, 3).join(', ')}`;
    style = 'Sauté';
    prepMinutes = 15;
  }

  // Construct recipe ingredients
  const recipeIngredients = [];
  ingNames.forEach((item, index) => {
    let amt = '1 unit / medium';
    if (/egg/i.test(item)) amt = '2-3 large';
    else if (/potato/i.test(item)) amt = '1-2 medium, diced';
    else if (/onion/i.test(item)) amt = '1 medium, sliced';
    else if (/tomato/i.test(item)) amt = '2 ripe, chopped';
    else if (/rice/i.test(item)) amt = '2 cups cooked';
    else if (/bread/i.test(item)) amt = '3-4 slices';
    else if (/paneer/i.test(item)) amt = '150g cubed';
    else if (/garlic/i.test(item)) amt = '3 cloves, minced';
    else if (/spinach/i.test(item)) amt = '1 cup packed';
    else if (/milk/i.test(item)) amt = '1/2 cup';
    else if (/pasta/i.test(item)) amt = '150g';
    recipeIngredients.push({ name: item, amount: amt });
  });
  recipeIngredients.push({ name: 'Cooking Oil or Butter', amount: '1.5 tbsp' });
  recipeIngredients.push({ name: 'Salt & Black Pepper', amount: 'to taste' });

  // Construct step-by-step instructions
  const instructions = [
    `Mise en place: Wash and prep your ingredients. Cut ${ingNames.slice(0, 2).join(' and ')} into uniform bite-sized pieces so they cook evenly.`
  ];

  if (expiringNames.length > 0) {
    instructions.push(`Priority Rescue Step: Inspect and dice your expiring items (${expiringNames.join(', ')}). Trim any soft blemishes—these will be sautéed first to maximize flavor extraction.`);
  }

  instructions.push(`Heat 1.5 tablespoons of cooking oil or butter in a wide heavy-bottomed skillet over medium heat.`);

  if (hasGarlic || hasOnion) {
    instructions.push(`Sauté the ${hasGarlic && hasOnion ? 'aromatic garlic and onion' : hasGarlic ? 'minced garlic' : 'sliced onion'} for 2-3 minutes until golden and deeply fragrant.`);
  }

  if (hasPotato) {
    instructions.push(`Add the diced potatoes first with a generous pinch of salt. Cover and let steam-fry for 6-8 minutes, stirring occasionally until tender inside and crisp outside.`);
  }

  if (hasTomato) {
    instructions.push(`Stir in chopped tomatoes. Crush them lightly against the pan base to release their natural pectin and juices, forming a glossy pan sauce.`);
  }

  if (hasRice || hasPasta) {
    instructions.push(`Tumble in the ${hasRice ? 'rice' : 'pasta'}, tossing vigorously on high heat for 2-3 minutes so every morsel absorbs the browned aromatics.`);
  }

  if (hasEgg) {
    instructions.push(`Push the pan ingredients to one side. Pour beaten eggs into the cleared half; scramble gently until creamy curds form, then fold everything together.`);
  } else if (hasPaneer) {
    instructions.push(`Gently fold in the paneer cubes. Sauté for just 2-3 minutes so the cheese warms through while staying tender and succulent.`);
  }

  instructions.push(`Finish with a final crack of black pepper, a pinch of salt to balance, and serve hot directly from the pan.`);

  const chefTips = [
    `The Golden Rule of Fridge Rescue: Sauté hearty root vegetables first, aromatics second, and delicate greens or soft dairy last to prevent overcooking.`,
    `Deglaze with a spoonful of warm water or broth if the pan gets sticky—that brown fond on the bottom is concentrated savory umami!`,
    `A squeeze of lemon or a dash of vinegar right at the end brightens heavy leftover groceries into restaurant-quality dishes.`
  ];

  return {
    title,
    time: prepMinutes,
    difficulty: diff,
    servings: 2,
    nutrition: {
      calories: 320,
      protein: hasEgg || hasPaneer ? 17 : 9,
      carbs: hasRice || hasPotato || hasPasta ? 45 : 18,
      fat: 14
    },
    description: `A custom zero-waste rescue creation designed to utilize ${ingNames.join(', ')} before they spoil.`,
    ingredients: recipeIngredients,
    instructions,
    chefTip: chefTips[Math.floor(Math.random() * chefTips.length)],
    safetyNotice: `Zero-waste safety tip: Always reheat leftover items until steaming hot (75°C / 165°F). Consume immediately.`
  };
}

async function callGeminiAPI(apiKey, ingredients, expiringItems, customNote) {
  const ingList = ingredients.map(i => i.name || i).join(', ');
  const expList = expiringItems.map(i => i.name || i).join(', ');

  const prompt = `You are an expert Zero-Waste Executive Chef.
A user has these ingredients sitting in their refrigerator: [${ingList}].
Items expiring soonest: [${expList || 'None specified'}].
User note: "${customNote || 'Make a delicious quick meal'}".

Invent a creative, safe, appetizing home-style recipe that rescues these items.
Respond ONLY with a valid JSON object matching this schema:
{
  "title": "Creative Dish Name",
  "time": 20,
  "difficulty": "Easy",
  "servings": 2,
  "description": "Short appetizing description",
  "nutrition": { "calories": 350, "protein": 15, "carbs": 40, "fat": 12 },
  "ingredients": [
    { "name": "Ingredient name", "amount": "Quantity and unit" }
  ],
  "instructions": [
    "Step 1...",
    "Step 2..."
  ],
  "chefTip": "Professional culinary tip",
  "safetyNotice": "Food safety note"
}`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from AI");

  return JSON.parse(text);
}
