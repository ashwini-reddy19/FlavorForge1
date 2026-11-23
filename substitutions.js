// data/substitutions.js - Kitchen substitution rules

export const SUBSTITUTIONS = {
  'butter': [
    'Use Cooking Oil or Ghee in equal measure (1:1 ratio)',
    'Use Margarine or Olive Oil'
  ],
  'buttermilk': [
    'No Buttermilk? Mix 1 cup Milk + 1 tbsp Lemon Juice or Vinegar (let sit 5 mins)',
    'Use 3/4 cup Plain Yogurt whisked with 1/4 cup Water'
  ],
  'paneer': [
    'Substitute with firm Tofu pressed and cubed',
    'Use Halloumi or Ricotta Salata'
  ],
  'milk': [
    'Use Soy milk, Oat milk, or Almond milk',
    'Mix 1/2 cup Evaporated Milk with 1/2 cup Water'
  ],
  'heavy cream': [
    'Melt 1/4 cup Butter and whisk with 3/4 cup Whole Milk',
    'Use Coconut Cream for dairy-free rich texture'
  ],
  'sour cream': [
    'Use equal parts Plain Greek Yogurt',
    'Mix Mayonnaise with a splash of Lemon Juice'
  ],
  'egg': [
    'For baking: 1/4 cup Applesauce or 1/2 mashed Banana per egg',
    'For binding: 1 tbsp ground Flaxseed mixed with 3 tbsp Water',
    'For savoury scrambles: Crumbled Tofu with turmeric'
  ],
  'bread': [
    'Use Tortillas, Pita bread, or Roti/Chapati',
    'Use English muffins or Bagels'
  ],
  'breadcrumbs': [
    'Use finely crushed Crackers, Oats, or Cornflakes',
    'Toast and crumble leftover stale roti or tortillas'
  ],
  'lemon': [
    'Use 1/2 tsp White Vinegar or Apple Cider Vinegar per tsp lemon juice',
    'Use Lime juice or dry mango powder (Amchur)'
  ],
  'soy sauce': [
    'Mix 1 tbsp Worcestershire sauce with 1 pinch of salt',
    'Use Tamari or Coconut Aminos'
  ],
  'yogurt': [
    'Use equal parts Sour Cream',
    'Whisk Milk with a squeeze of Lemon Juice until slightly thick'
  ],
  'all-purpose flour': [
    'Use Whole Wheat Flour (Atta) - may need 10% more liquid',
    'Use Cornstarch (for thickening, use half the amount)'
  ],
  'cheese': [
    'Use Nutritional Yeast for cheesy flavor',
    'Use Paneer or Tofu with a pinch of extra salt'
  ],
  'cilantro': [
    'Use flat-leaf Parsley with a squeeze of fresh lemon juice',
    'Use finely chopped Mint or Spring Onion greens'
  ],
  'green chilli': [
    'Use 1/2 tsp Red Chilli Flakes or Cayenne pepper',
    'Use diced Jalapeño or Serrano pepper'
  ],
  'garlic': [
    'Use 1/8 tsp Garlic Powder per fresh clove',
    'Use Asafoetida (Hing) pinch in warm oil'
  ],
  'ginger': [
    'Use 1/4 tsp Ground Ginger powder per inch of fresh root',
    'Use a dash of allspice or white pepper'
  ],
  'tomato': [
    'Use Canned crushed tomatoes or 2 tbsp Tomato Paste diluted in water',
    'Use Tamarind pulp or Red Bell Pepper puree for tang and color'
  ],
  'onion': [
    'Use 1 tsp Onion Powder per small onion',
    'Use Shallots, Leeks, or Green Onion whites'
  ],
  'peas': [
    'Use diced Green Beans or Edamame',
    'Use Sweet Corn kernels'
  ],
  'pasta': [
    'Use Rice noodles, Soba, or broken Vermicelli',
    'Use spiralized Zucchini or Carrots'
  ]
};

export function getSubstitutionTip(canonicalIngredient) {
  if (!canonicalIngredient) return null;
  const key = canonicalIngredient.toLowerCase().trim();
  if (SUBSTITUTIONS[key]) {
    return SUBSTITUTIONS[key][0];
  }
  return null;
}
