// data/ingredients.js - Canonical ingredients, categories, and assumed staples

export const ASSUMED_STAPLES = [
  'salt',
  'cooking oil',
  'oil',
  'water',
  'black pepper',
  'sugar'
];

export const SYNONYMS = {
  'tomatoes': 'tomato',
  'potatoes': 'potato',
  'onions': 'onion',
  'eggs': 'egg',
  'chillies': 'chilli',
  'chilies': 'chilli',
  'chili': 'chilli',
  'green chillies': 'green chilli',
  'green chili': 'green chilli',
  'green chillies': 'green chilli',
  'capsicum': 'bell pepper',
  'bell peppers': 'bell pepper',
  'coriander': 'cilantro',
  'coriander leaves': 'cilantro',
  'fresh coriander': 'cilantro',
  'curd': 'yogurt',
  'dahi': 'yogurt',
  'scallions': 'green onion',
  'spring onion': 'green onion',
  'spring onions': 'green onion',
  'aubergine': 'eggplant',
  'brinjal': 'eggplant',
  'flour': 'all-purpose flour',
  'maida': 'all-purpose flour',
  'bread slice': 'bread',
  'bread slices': 'bread',
  'loaves': 'bread',
  'cheddar': 'cheese',
  'mozzarella': 'cheese',
  'processed cheese': 'cheese',
  'paneer cubes': 'paneer',
  'cottage cheese': 'paneer',
  'garlic cloves': 'garlic',
  'ginger root': 'ginger'
};

export const COMMON_STAPLES = [
  { name: 'Eggs', canonical: 'egg', category: 'Dairy & Eggs', icon: '🥚' },
  { name: 'Potatoes', canonical: 'potato', category: 'Vegetables', icon: '🥔' },
  { name: 'Onions', canonical: 'onion', category: 'Vegetables', icon: '🧅' },
  { name: 'Tomatoes', canonical: 'tomato', category: 'Vegetables', icon: '🍅' },
  { name: 'Rice', canonical: 'rice', category: 'Grains & Staples', icon: '🍚' },
  { name: 'Milk', canonical: 'milk', category: 'Dairy & Eggs', icon: '🥛' },
  { name: 'Paneer', canonical: 'paneer', category: 'Dairy & Eggs', icon: '🧀' },
  { name: 'Bread', canonical: 'bread', category: 'Grains & Staples', icon: '🍞' },
  { name: 'Butter', canonical: 'butter', category: 'Dairy & Eggs', icon: '🧈' },
  { name: 'Garlic', canonical: 'garlic', category: 'Vegetables', icon: '🧄' },
  { name: 'Ginger', canonical: 'ginger', category: 'Vegetables', icon: '🫚' },
  { name: 'Green Chilli', canonical: 'green chilli', category: 'Vegetables', icon: '🌶️' },
  { name: 'Cheese', canonical: 'cheese', category: 'Dairy & Eggs', icon: '🧀' },
  { name: 'Bell Pepper', canonical: 'bell pepper', category: 'Vegetables', icon: '🫑' },
  { name: 'Coriander', canonical: 'cilantro', category: 'Vegetables', icon: '🌿' },
  { name: 'Yogurt', canonical: 'yogurt', category: 'Dairy & Eggs', icon: '🥣' },
  { name: 'Flour', canonical: 'all-purpose flour', category: 'Grains & Staples', icon: '🌾' },
  { name: 'Oats', canonical: 'oats', category: 'Grains & Staples', icon: '🥣' },
  { name: 'Pasta', canonical: 'pasta', category: 'Grains & Staples', icon: '🍝' },
  { name: 'Lentils (Dal)', canonical: 'lentils', category: 'Grains & Staples', icon: '🍲' },
  { name: 'Cumin Seeds', canonical: 'cumin', category: 'Spices & Seasoning', icon: '✨' },
  { name: 'Turmeric', canonical: 'turmeric', category: 'Spices & Seasoning', icon: '🟡' },
  { name: 'Red Chilli Powder', canonical: 'red chilli powder', category: 'Spices & Seasoning', icon: '🌶️' },
  { name: 'Garam Masala', canonical: 'garam masala', category: 'Spices & Seasoning', icon: '🧂' },
  { name: 'Mustard Seeds', canonical: 'mustard seeds', category: 'Spices & Seasoning', icon: '⚪' },
  { name: 'Soy Sauce', canonical: 'soy sauce', category: 'Pantry & Sauces', icon: '🍶' },
  { name: 'Lemon', canonical: 'lemon', category: 'Vegetables', icon: '🍋' },
  { name: 'Carrot', canonical: 'carrot', category: 'Vegetables', icon: '🥕' },
  { name: 'Green Peas', canonical: 'peas', category: 'Vegetables', icon: '🟢' },
  { name: 'Spinach', canonical: 'spinach', category: 'Vegetables', icon: '🍃' }
];

export const CATEGORIES = [
  'All',
  'Vegetables',
  'Dairy & Eggs',
  'Grains & Staples',
  'Spices & Seasoning',
  'Pantry & Sauces'
];
