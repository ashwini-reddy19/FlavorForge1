// data/recipes.js - 40 Practical Home-Style Recipes

export const RECIPES = [
  {
    id: 'aloo-egg-bhurji',
    title: 'Aloo Egg Bhurji (Potato Egg Scramble)',
    category: 'Breakfast & Mains',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🍳',
    description: 'A comforting, spiced scramble of diced potatoes and fluffy eggs, perfect with toast or flatbread.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 3, unit: 'whole', optional: false },
      { name: 'Potatoes', canonical: 'potato', amount: 1, unit: 'medium, finely diced', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'medium, chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 290, protein: 16, carbs: 18, fat: 17 },
    instructions: [
      'Heat 1.5 tablespoons of cooking oil in a non-stick skillet over medium heat.',
      'Add finely diced potatoes with a pinch of salt. Sauté for 6-7 minutes until golden and tender.',
      'Add chopped onions and cook for another 3 minutes until translucent.',
      'In a bowl, beat 3 eggs with a pinch of salt and black pepper.',
      'Pour the beaten eggs into the skillet. Gently scramble for 2-3 minutes until soft curds form.',
      'Remove from heat immediately to keep the eggs fluffy and serve hot.'
    ],
    substitutions: {
      'potato': 'Use sweet potato or grated cauliflower',
      'egg': 'Use crumbled paneer or pressed tofu for a vegetarian bhurji'
    }
  },
  {
    id: 'spanish-omelette',
    title: 'Spanish Omelette (Tortilla Española)',
    category: 'Breakfast & Mains',
    cuisine: 'Spanish',
    time: 25,
    difficulty: 'Medium',
    servings: 2,
    image: '🥘',
    description: 'A thick, golden classic omelette layered with tender sliced potatoes, sweet onions, and rich butter.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 4, unit: 'large eggs', optional: false },
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'medium, thinly sliced', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'sliced', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1.5, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 340, protein: 15, carbs: 26, fat: 20 },
    instructions: [
      'Peel and slice potatoes and onions into thin, uniform rounds.',
      'Heat oil and butter in an 8-inch frying pan over medium-low heat.',
      'Gently poach the sliced potatoes and onions in the pan for 12-14 minutes until tender without browning.',
      'Whisk the eggs in a large bowl with half a teaspoon of salt.',
      'Drain the warm potatoes and onions and fold them into the beaten eggs; let rest for 5 minutes.',
      'Pour the egg-potato mixture back into the heated pan. Cook on low heat for 6-8 minutes until edges set.',
      'Invert onto a plate, slide back into the pan, and cook the reverse side for 3 minutes until golden.'
    ],
    substitutions: {
      'butter': 'Use Cooking Oil instead of Butter (1:1 ratio)',
      'potato': 'Use thinly sliced zucchini or parboiled sweet potatoes'
    }
  },
  {
    id: 'egg-toast',
    title: 'Crispy Egg Toast',
    category: 'Breakfast & Snacks',
    cuisine: 'Universal',
    time: 10,
    difficulty: 'Easy',
    servings: 1,
    image: '🍞',
    description: 'Quick street-style egg toast fried to golden perfection with sweet onions and a savory crust.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'whole', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 0.5, unit: 'finely chopped', optional: false },
      { name: 'Bread', canonical: 'bread', amount: 2, unit: 'slices', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 270, protein: 15, carbs: 24, fat: 12 },
    instructions: [
      'Whisk eggs in a shallow wide bowl with chopped onion, a pinch of salt, and pepper.',
      'Heat a flat skillet over medium heat and grease lightly with a teaspoon of oil.',
      'Dip each bread slice into the egg mixture, coating both sides evenly.',
      'Place slices onto the hot pan, spooning any leftover onions directly on top.',
      'Cook for 2-3 minutes per side until crispy and golden brown.',
      'Slice diagonally and serve immediately.'
    ],
    substitutions: {
      'bread': 'Use flatbread, roti, or pita pockets',
      'onion': 'Use green onions or chives'
    }
  },
  {
    id: 'tomato-fried-rice',
    title: 'Savory Tomato Fried Rice',
    category: 'Mains',
    cuisine: 'Asian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🍚',
    description: 'Turn leftover chilled rice into an umami-packed wok meal using fresh juicy tomatoes and eggs.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 2, unit: 'cups (cooked/leftover)', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 2, unit: 'medium, chopped', optional: false },
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'whole', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 350, protein: 12, carbs: 54, fat: 10 },
    instructions: [
      'Whisk eggs with a pinch of salt. Scramble quickly in 1 tsp hot oil, remove and set aside.',
      'In the same wok, add minced garlic and chopped tomatoes with a pinch of salt.',
      'Cook down tomatoes on high heat for 3-4 minutes until saucy and caramelized.',
      'Tumble in chilled cooked rice, breaking up any clumps with a spatula.',
      'Stir-fry vigorously for 2 minutes to coat each grain with tomato sauce.',
      'Toss back scrambled eggs, season with black pepper, and serve piping hot.'
    ],
    substitutions: {
      'egg': 'Use scrambled tofu or green peas for vegan rice',
      'garlic': 'Use 1/4 tsp garlic powder or diced green onion'
    }
  },
  {
    id: 'paneer-bhurji',
    title: 'Spiced Paneer Bhurji',
    category: 'Mains',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🧀',
    description: 'Crumbled cottage cheese sautéed with onions, ripe tomatoes, and fragrant ground spices.',
    coreIngredients: [
      { name: 'Paneer', canonical: 'paneer', amount: 200, unit: 'g, crumbled', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'finely chopped', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 1, unit: 'finely chopped', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric'],
    nutrition: { calories: 310, protein: 18, carbs: 10, fat: 22 },
    instructions: [
      'Heat oil in a skillet over medium heat. Sauté onions and green chillies until soft.',
      'Add chopped tomatoes and a pinch of turmeric and salt; cook until mushy and oil separates.',
      'Gently fold in crumbled fresh paneer.',
      'Toss well on medium-low heat for only 2-3 minutes so the paneer stays tender and juicy.',
      'Garnish with fresh herbs if available and serve with warm bread or rice.'
    ],
    substitutions: {
      'paneer': 'Use firm Tofu pressed and crumbled',
      'green chilli': 'Use red chilli flakes or 1/4 tsp black pepper'
    }
  },
  {
    id: 'classic-french-toast',
    title: 'Golden French Toast',
    category: 'Breakfast',
    cuisine: 'European',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍞',
    description: 'Fluffy custardy bread slices toasted with a warm aromatic aroma.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 4, unit: 'slices', optional: false },
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'whole', optional: false },
      { name: 'Milk', canonical: 'milk', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['sugar', 'cooking oil', 'salt'],
    nutrition: { calories: 280, protein: 11, carbs: 32, fat: 12 },
    instructions: [
      'In a wide shallow dish, beat together eggs, milk, 1 teaspoon of sugar, and a pinch of salt.',
      'Melt butter with a drop of oil in a skillet over medium heat.',
      'Dip bread slices in custard mixture for 10 seconds per side until saturated but not soggy.',
      'Place in pan and cook for 2-3 minutes per side until golden brown and puffed.',
      'Serve warm with honey, maple syrup, or sliced fruit.'
    ],
    substitutions: {
      'milk': 'Use almond milk, soy milk, or oat milk',
      'butter': 'Use cooking oil or coconut oil'
    }
  },
  {
    id: 'jeera-aloo',
    title: 'Jeera Aloo (Cumin Spiced Potatoes)',
    category: 'Sides & Mains',
    cuisine: 'Indian',
    time: 18,
    difficulty: 'Easy',
    servings: 2,
    image: '🥔',
    description: 'Crisp pan-fried potatoes infused with toasted cumin seeds and fragrant spices.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 3, unit: 'medium, boiled & cubed', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'slit', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt'],
    nutrition: { calories: 210, protein: 4, carbs: 36, fat: 7 },
    instructions: [
      'Heat 2 tbsp oil in a heavy bottom pan. Add cumin seeds and let them crackle until fragrant.',
      'Add slit green chillies and turmeric powder.',
      'Toss in boiled cubed potatoes and salt.',
      'Sauté on medium-high flame for 6-8 minutes, tossing frequently until outer crust turns golden crisp.',
      'Serve alongside steamed rice, flatbreads, or as a savory side dish.'
    ],
    substitutions: {
      'cumin': 'Use mustard seeds or fennel seeds for a different aromatic punch',
      'green chilli': 'Use red chilli flakes or black pepper'
    }
  },
  {
    id: 'shakshuka-eggs',
    title: 'Skillet Shakshuka',
    category: 'Breakfast & Mains',
    cuisine: 'Middle Eastern',
    time: 20,
    difficulty: 'Medium',
    servings: 2,
    image: '🍳',
    description: 'Poached eggs nestled in a simmered sauce of sweet tomatoes, bell peppers, onions, and garlic.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 4, unit: 'whole', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 3, unit: 'large, crushed/chopped', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false },
      { name: 'Bell Pepper', canonical: 'bell pepper', amount: 1, unit: 'diced', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 295, protein: 17, carbs: 16, fat: 18 },
    instructions: [
      'Heat oil in a wide skillet. Sauté chopped onions and bell peppers for 5 minutes until soft.',
      'Add minced garlic and cook for 1 minute until fragrant.',
      'Pour in crushed tomatoes, season with salt and pepper, and simmer for 8 minutes until thickened.',
      'Make 4 small wells in the sauce and crack an egg into each well.',
      'Cover skillet with a lid and cook on medium-low for 5-6 minutes until whites are set and yolks runny.',
      'Serve straight from the skillet with crusty bread.'
    ],
    substitutions: {
      'bell pepper': 'Use zucchini or extra onions',
      'garlic': 'Use 1/4 tsp garlic powder'
    }
  },
  {
    id: 'tomato-basil-pasta',
    title: 'Rustic Garlic Tomato Pasta',
    category: 'Mains',
    cuisine: 'Italian',
    time: 18,
    difficulty: 'Easy',
    servings: 2,
    image: '🍝',
    description: 'Tender pasta tossed in a swift, fresh garlic-infused tomato skillet sauce.',
    coreIngredients: [
      { name: 'Pasta', canonical: 'pasta', amount: 200, unit: 'g', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 3, unit: 'ripe, diced', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, sliced', optional: false },
      { name: 'Cheese', canonical: 'cheese', amount: 30, unit: 'g, grated', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper', 'water'],
    nutrition: { calories: 420, protein: 14, carbs: 68, fat: 11 },
    instructions: [
      'Boil pasta in well-salted water until al dente. Reserve 1/2 cup pasta water, then drain.',
      'In a large pan, warm 2 tablespoons of oil over medium-low heat. Add sliced garlic and cook gently for 90 seconds.',
      'Add diced tomatoes and a pinch of salt. Simmer for 8 minutes, crushing tomatoes with a wooden spoon.',
      'Add cooked pasta and 2 tablespoons of pasta water to the sauce; toss vigorously for 1 minute.',
      'Remove from heat, fold in grated cheese and freshly cracked black pepper, then serve.'
    ],
    substitutions: {
      'cheese': 'Use nutritional yeast or paneer crumble',
      'pasta': 'Use broken vermicelli or rice noodles'
    }
  },
  {
    id: 'dal-tadka',
    title: 'Comforting Dal Tadka',
    category: 'Mains & Soups',
    cuisine: 'Indian',
    time: 25,
    difficulty: 'Easy',
    servings: 3,
    image: '🍲',
    description: 'Creamy simmered yellow lentils tempered with sizzled cumin, garlic, onions, and ripe tomatoes.',
    coreIngredients: [
      { name: 'Lentils (Dal)', canonical: 'lentils', amount: 1, unit: 'cup', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 1, unit: 'chopped', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, minced', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric', 'water'],
    nutrition: { calories: 260, protein: 15, carbs: 42, fat: 4 },
    instructions: [
      'Rinse lentils and boil with 3 cups water, half tsp turmeric, and salt until tender and soft (approx 15-20 mins).',
      'In a separate small pan, heat 1.5 tbsp oil. Splutter cumin seeds and add minced garlic.',
      'Stir in onions and cook until light golden brown.',
      'Add tomatoes and cook down for 3 minutes until soft.',
      'Pour this aromatic tempering (tadka) straight into the simmering dal and stir well.',
      'Simmer for 2 minutes and serve warm with fluffy rice.'
    ],
    substitutions: {
      'lentils': 'Use split peas, yellow moong, or canned chickpeas',
      'cumin': 'Use mustard seeds or fennel'
    }
  },
  {
    id: 'garlic-butter-rice',
    title: 'Garlic Butter Fried Rice',
    category: 'Mains & Sides',
    cuisine: 'Universal',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍚',
    description: 'Crispy pan-fried leftover rice infused with sweet caramelized garlic and silky butter.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 2, unit: 'cups (cooked)', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 5, unit: 'cloves, minced', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 2, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 330, protein: 5, carbs: 48, fat: 14 },
    instructions: [
      'Heat 1 tsp oil and 1 tbsp butter in a wok over medium-low heat.',
      'Add minced garlic and sauté gently for 2 minutes until light golden and fragrant (do not burn).',
      'Add chilled cooked rice and spread across the pan to toast slightly.',
      'Stir-fry on high heat for 3 minutes, then drop in the remaining butter.',
      'Season with salt and freshly cracked black pepper and toss until glistening.'
    ],
    substitutions: {
      'butter': 'Use Cooking Oil or Ghee instead of Butter (1:1 ratio)',
      'garlic': 'Use 1/2 tsp garlic powder or shallots'
    }
  },
  {
    id: 'masala-egg-curry',
    title: 'Homestyle Masala Egg Curry',
    category: 'Mains',
    cuisine: 'Indian',
    time: 25,
    difficulty: 'Medium',
    servings: 2,
    image: '🍛',
    description: 'Boiled golden-seared eggs steeped in an onion-tomato gravy with warm spices.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 4, unit: 'hard-boiled', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 2, unit: 'finely chopped', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 2, unit: 'pureed or finely chopped', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 1, unit: 'inch, grated', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric', 'red chilli powder', 'water'],
    nutrition: { calories: 320, protein: 16, carbs: 14, fat: 21 },
    instructions: [
      'Pierce boiled eggs with a fork and fry in 1 tbsp hot oil with a pinch of turmeric until blistered; set aside.',
      'In the same pan, sauté chopped onions until deep golden brown.',
      'Add ginger and garlic paste and cook for 1 minute.',
      'Add tomato puree, turmeric, red chilli powder, and salt. Cook until oil separates from gravy.',
      'Pour in 3/4 cup water, bring to a simmer, and drop in the fried eggs.',
      'Simmer on low for 6-8 minutes until gravy thickens. Serve with rice or roti.'
    ],
    substitutions: {
      'ginger': 'Use 1/4 tsp ground dry ginger powder',
      'tomato': 'Use 2 tbsp tomato paste diluted in 1/2 cup warm water'
    }
  },
  {
    id: 'potato-hash-browns',
    title: 'Crispy Skillet Potato Hash',
    category: 'Breakfast',
    cuisine: 'American',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🥔',
    description: 'Shredded pan-crisped potatoes with onions, seasoned simply and cooked to golden perfection.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'large, grated', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 0.5, unit: 'grated or finely diced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 190, protein: 4, carbs: 32, fat: 6 },
    instructions: [
      'Grate potatoes coarsely. Squeeze firmly in a clean kitchen towel to press out excess moisture.',
      'Mix grated potatoes with grated onion, 1/2 tsp salt, and freshly ground black pepper.',
      'Heat 2 tbsp oil in a flat skillet over medium heat.',
      'Spread the potato mixture in an even layer across the skillet, pressing down lightly with a spatula.',
      'Cook undisturbed for 6-7 minutes until the underside is deep golden and crunchy.',
      'Carefully flip and cook the other side for another 5 minutes until crisp.'
    ],
    substitutions: {
      'onion': 'Use green onion or onion powder'
    }
  },
  {
    id: 'egg-fried-rice',
    title: 'Quick 10-Minute Egg Fried Rice',
    category: 'Mains',
    cuisine: 'Asian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍚',
    description: 'Fluffy wok-tossed rice with savory scrambled eggs, garlic, and a splash of soy sauce.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 2, unit: 'cups (cooked)', optional: false },
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'beaten', optional: false },
      { name: 'Soy Sauce', canonical: 'soy sauce', amount: 1.5, unit: 'tbsp', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 340, protein: 12, carbs: 50, fat: 10 },
    instructions: [
      'Heat 1 tbsp oil in a hot wok. Pour in beaten eggs and scramble softly for 60 seconds; slide onto a plate.',
      'Add another teaspoon of oil and fry minced garlic for 30 seconds.',
      'Add cooked rice to the wok and break up any grains over high heat.',
      'Drizzle soy sauce around the perimeter of the wok so it sizzles into the rice.',
      'Fold back the scrambled eggs, toss thoroughly for 1 minute, and serve immediately.'
    ],
    substitutions: {
      'soy sauce': 'Use Worcestershire sauce + pinch of salt, or Tamari',
      'garlic': 'Use scallion whites or shallots'
    }
  },
  {
    id: 'paneer-tikka-skillet',
    title: 'Stovetop Paneer & Pepper Skillet',
    category: 'Sides & Starters',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🧀',
    description: 'Charred cubes of paneer tossed with crunchy bell peppers, onions, and yogurt marinade.',
    coreIngredients: [
      { name: 'Paneer', canonical: 'paneer', amount: 200, unit: 'g, cubed', optional: false },
      { name: 'Bell Pepper', canonical: 'bell pepper', amount: 1, unit: 'cut into squares', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'cut into petals', optional: false },
      { name: 'Yogurt', canonical: 'yogurt', amount: 2, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric', 'red chilli powder'],
    nutrition: { calories: 320, protein: 19, carbs: 12, fat: 22 },
    instructions: [
      'In a bowl, mix yogurt with turmeric, red chilli powder, salt, and 1 tsp oil.',
      'Toss paneer cubes, onion petals, and bell pepper squares into the marinade for 5 minutes.',
      'Heat a cast iron skillet over high heat with 1 tablespoon of oil.',
      'Sear the paneer and vegetables in a single layer for 3-4 minutes per side until charred on edges.',
      'Serve hot with lemon wedges or mint yogurt.'
    ],
    substitutions: {
      'yogurt': 'Use lemon juice + 1 tsp oil',
      'paneer': 'Use firm Tofu cubes'
    }
  },
  {
    id: 'creamy-tomato-soup',
    title: 'Comforting Roasted Tomato Soup',
    category: 'Soups',
    cuisine: 'Universal',
    time: 20,
    difficulty: 'Easy',
    servings: 2,
    image: '🥣',
    description: 'Silky, soothing tomato soup made from simmered tomatoes, garlic, and a splash of milk or butter.',
    coreIngredients: [
      { name: 'Tomatoes', canonical: 'tomato', amount: 4, unit: 'ripe, quartered', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves', optional: false },
      { name: 'Milk', canonical: 'milk', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper', 'water', 'sugar'],
    nutrition: { calories: 170, protein: 4, carbs: 15, fat: 11 },
    instructions: [
      'In a pot, melt butter with 1 tsp oil. Sauté garlic cloves and onions if available for 2 minutes.',
      'Add quartered tomatoes, 1/2 tsp salt, 1/2 tsp sugar, and 1/2 cup water.',
      'Cover and simmer for 12 minutes until tomatoes are completely soft and breakdown.',
      'Blend using an immersion blender or standard mixer until smooth; pass through a sieve if desired.',
      'Return to low heat, stir in milk, season with cracked black pepper, and warm through.'
    ],
    substitutions: {
      'butter': 'Use olive oil or cooking oil',
      'milk': 'Use coconut milk, oat milk, or cashew cream'
    }
  },
  {
    id: 'potato-cheese-toast',
    title: 'Aloo Cheese Toast Melt',
    category: 'Breakfast & Snacks',
    cuisine: 'Universal',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🥪',
    description: 'Spiced mashed potato layer topped with gooey melted cheese between crispy golden toast.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 4, unit: 'slices', optional: false },
      { name: 'Potatoes', canonical: 'potato', amount: 1, unit: 'large, boiled & mashed', optional: false },
      { name: 'Cheese', canonical: 'cheese', amount: 50, unit: 'g, grated/sliced', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'finely chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 340, protein: 12, carbs: 42, fat: 14 },
    instructions: [
      'In a bowl, mix boiled mashed potato with chopped green chilli, salt, and pepper.',
      'Spread the potato mash evenly over bread slices and top generously with grated cheese.',
      'Cover with top bread slice.',
      'Toast in a buttered or oiled skillet over low heat for 3-4 minutes per side until cheese melts and bread is golden.',
      'Cut in halves and enjoy while crunchy.'
    ],
    substitutions: {
      'cheese': 'Use paneer slices or mayo spread',
      'green chilli': 'Use black pepper or red paprika'
    }
  },
  {
    id: 'masala-chai',
    title: 'Warm Spiced Kadak Chai',
    category: 'Beverages',
    cuisine: 'Indian',
    time: 8,
    difficulty: 'Easy',
    servings: 2,
    image: '☕',
    description: 'Traditional home-brewed comforting milk tea infused with crushed fresh ginger.',
    coreIngredients: [
      { name: 'Milk', canonical: 'milk', amount: 1, unit: 'cup', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 1, unit: 'inch, crushed', optional: false }
    ],
    assumedStaples: ['water', 'sugar'],
    nutrition: { calories: 95, protein: 4, carbs: 12, fat: 4 },
    instructions: [
      'Bring 1 cup of water to a rolling boil in a saucepan with crushed ginger and tea leaves.',
      'Simmer for 2 minutes until dark and aromatic.',
      'Add 1 cup of milk and 2 teaspoons of sugar.',
      'Bring to a boil on medium heat, lower flame when it rises, and repeat boil twice for depth.',
      'Strain through a fine mesh sieve into cups and sip warm.'
    ],
    substitutions: {
      'ginger': 'Use 1/4 tsp cardamom or cinnamon stick',
      'milk': 'Use soy milk or oat milk'
    }
  },
  {
    id: 'lemon-rice',
    title: 'South Indian Lemon Rice',
    category: 'Mains',
    cuisine: 'Indian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍋',
    description: 'Fragrant golden rice tossed with freshly squeezed lemon juice, mustard seeds, and crunchy tempering.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 2, unit: 'cups (cooked)', optional: false },
      { name: 'Lemon', canonical: 'lemon', amount: 1, unit: 'juiced', optional: false },
      { name: 'Mustard Seeds', canonical: 'mustard seeds', amount: 1, unit: 'tsp', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'slit', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt'],
    nutrition: { calories: 290, protein: 5, carbs: 54, fat: 6 },
    instructions: [
      'Heat 1.5 tbsp oil in a pan. Add mustard seeds and allow them to pop.',
      'Add slit green chillies and turmeric powder; stir quickly on low heat.',
      'Toss in cooked rice and salt, gently mixing until every grain is a vibrant sunshine yellow.',
      'Turn off heat completely before pouring in freshly squeezed lemon juice (prevents bitterness).',
      'Mix well, taste for tang and salt balance, and serve.'
    ],
    substitutions: {
      'lemon': 'Use 1.5 tsp white vinegar or dry mango powder (amchur)',
      'mustard seeds': 'Use cumin seeds'
    }
  },
  {
    id: 'kheer-rice-pudding',
    title: 'Rich Rice Kheer (Sweet Pudding)',
    category: 'Desserts',
    cuisine: 'Indian',
    time: 25,
    difficulty: 'Easy',
    servings: 3,
    image: '🍚',
    description: 'Slow-simmered aromatic rice pudding cooked gently in milk until velvety and sweet.',
    coreIngredients: [
      { name: 'Milk', canonical: 'milk', amount: 3, unit: 'cups', optional: false },
      { name: 'Rice', canonical: 'rice', amount: 0.33, unit: 'cup, rinsed', optional: false }
    ],
    assumedStaples: ['sugar', 'water'],
    nutrition: { calories: 240, protein: 8, carbs: 38, fat: 7 },
    instructions: [
      'In a thick-bottomed pot, bring milk to a boil on medium heat.',
      'Add rinsed rice and lower the heat to a gentle simmer.',
      'Stir frequently to prevent scorching at the bottom as milk reduces (about 18-20 minutes).',
      'When rice is soft and milk thickens to a creamy consistency, stir in 3-4 tbsp sugar.',
      'Simmer 2 more minutes until sugar dissolves completely. Serve warm or chilled.'
    ],
    substitutions: {
      'rice': 'Use vermicelli (seviyan) or quick oats',
      'milk': 'Use coconut milk for rich vegan kheer'
    }
  },
  {
    id: 'scrambled-masala-paneer',
    title: 'Paneer & Onion Stir-Fry',
    category: 'Mains',
    cuisine: 'Indian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🧀',
    description: 'Pan-seared cubes of paneer tossed with caramelized onions and mild spices.',
    coreIngredients: [
      { name: 'Paneer', canonical: 'paneer', amount: 200, unit: 'g, cubed', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 2, unit: 'sliced into strips', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 290, protein: 17, carbs: 8, fat: 22 },
    instructions: [
      'Heat 1 tbsp oil in a skillet. Sauté sliced onions over medium heat for 6 minutes until sweet and browned.',
      'Add turmeric, salt, and black pepper.',
      'Add paneer cubes and toss gently for 3-4 minutes until warmed and lightly golden on corners.',
      'Serve alongside flatbread or rice.'
    ],
    substitutions: {
      'paneer': 'Use firm tofu or boiled eggs diced'
    }
  },
  {
    id: 'matar-paneer-quick',
    title: 'Quick Stovetop Matar Paneer',
    category: 'Mains',
    cuisine: 'Indian',
    time: 20,
    difficulty: 'Medium',
    servings: 3,
    image: '🍛',
    description: 'Soft paneer cubes and sweet green peas simmered in a spiced tomato-onion curry sauce.',
    coreIngredients: [
      { name: 'Paneer', canonical: 'paneer', amount: 200, unit: 'g, cubed', optional: false },
      { name: 'Green Peas', canonical: 'peas', amount: 1, unit: 'cup', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 2, unit: 'pureed', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'finely chopped', optional: false },
      { name: 'Garam Masala', canonical: 'garam masala', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric', 'water'],
    nutrition: { calories: 295, protein: 16, carbs: 16, fat: 19 },
    instructions: [
      'Heat oil in a pan and sauté chopped onions until light brown.',
      'Add pureed tomatoes, turmeric, garam masala, and salt. Cook until the gravy releases oil.',
      'Add green peas and 1/2 cup water. Cover and simmer for 5 minutes until peas are tender.',
      'Drop in paneer cubes and simmer gently for another 3 minutes.',
      'Serve hot with rice or naan.'
    ],
    substitutions: {
      'peas': 'Use diced potatoes or sweet corn',
      'paneer': 'Use firm tofu cubes'
    }
  },
  {
    id: 'onion-pakora',
    title: 'Crispy Onion Pakoras (Fritters)',
    category: 'Snacks',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🧅',
    description: 'Crunchy, golden-brown sliced onion fritters lightly coated in spiced batter and fried crisp.',
    coreIngredients: [
      { name: 'Onions', canonical: 'onion', amount: 2, unit: 'large, thinly sliced', optional: false },
      { name: 'Flour', canonical: 'all-purpose flour', amount: 0.75, unit: 'cup', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water', 'turmeric'],
    nutrition: { calories: 260, protein: 6, carbs: 38, fat: 10 },
    instructions: [
      'In a mixing bowl, toss sliced onions with green chillies, turmeric, and 1/2 tsp salt; let rest 5 minutes to release liquid.',
      'Sprinkle flour over the onions and add 2-3 tablespoons of water just to form a thick, clingy coating.',
      'Heat oil in a deep frying pan over medium-high heat.',
      'Drop small loose clusters of onion batter into hot oil and fry for 4-5 minutes until crisp and golden.',
      'Drain on paper towels and serve with hot chai.'
    ],
    substitutions: {
      'all-purpose flour': 'Use chickpea flour (besan) or cornstarch',
      'green chilli': 'Use red chilli powder'
    }
  },
  {
    id: 'creamy-spinach-paneer',
    title: 'Homestyle Palak Paneer',
    category: 'Mains',
    cuisine: 'Indian',
    time: 20,
    difficulty: 'Medium',
    servings: 2,
    image: '🍃',
    description: 'Fresh vibrant spinach puree simmered with garlic, onion, and soft paneer cubes.',
    coreIngredients: [
      { name: 'Spinach', canonical: 'spinach', amount: 250, unit: 'g, blanched & pureed', optional: false },
      { name: 'Paneer', canonical: 'paneer', amount: 150, unit: 'g, cubed', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 4, unit: 'cloves, minced', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 270, protein: 16, carbs: 10, fat: 19 },
    instructions: [
      'Blanch spinach in boiling water for 2 minutes, plunge into cold water, and blend into a smooth green puree.',
      'Heat oil in a pan; sauté minced garlic and chopped onion until soft and fragrant.',
      'Pour in the vibrant spinach puree and season with salt.',
      'Simmer on low heat for 5 minutes.',
      'Add paneer cubes and let them bathe in the hot spinach sauce for 3 minutes before serving.'
    ],
    substitutions: {
      'paneer': 'Use firm tofu or boiled egg halves',
      'spinach': 'Use kale, mustard greens, or Swiss chard'
    }
  },
  {
    id: 'potato-pea-samosa-filling',
    title: 'Spiced Aloo Matar Sauté',
    category: 'Sides & Snacks',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🥔',
    description: 'The irresistible spiced potato and pea mixture, cooked as a quick dry skillet fry.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'boiled & cubed', optional: false },
      { name: 'Green Peas', canonical: 'peas', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 1, unit: 'tsp, minced', optional: false },
      { name: 'Garam Masala', canonical: 'garam masala', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric'],
    nutrition: { calories: 210, protein: 5, carbs: 38, fat: 5 },
    instructions: [
      'Heat 1 tbsp oil in a pan. Add minced ginger and sauté for 30 seconds.',
      'Add green peas, turmeric, and salt; cook for 3 minutes until tender.',
      'Add boiled cubed potatoes and sprinkle garam masala.',
      'Toss on high heat for 3-4 minutes, lightly crushing a few potato pieces with the spoon.',
      'Serve as a sandwich filling, taco stuffer, or side dish.'
    ],
    substitutions: {
      'peas': 'Use corn kernels or diced carrots',
      'ginger': 'Use 1/4 tsp ginger powder'
    }
  },
  {
    id: 'garlic-chilli-noodles',
    title: 'Fiery Garlic Chilli Noodles',
    category: 'Mains',
    cuisine: 'Asian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍜',
    description: 'Slurpy noodles tossed in sizzling infused garlic oil, chilli flakes, and soy sauce.',
    coreIngredients: [
      { name: 'Pasta', canonical: 'pasta', amount: 200, unit: 'g (spaghetti or noodles)', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 4, unit: 'cloves, minced', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'finely sliced', optional: false },
      { name: 'Soy Sauce', canonical: 'soy sauce', amount: 1.5, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 370, protein: 9, carbs: 64, fat: 9 },
    instructions: [
      'Cook noodles or spaghetti in salted boiling water until tender. Drain.',
      'Heat 2 tablespoons of oil in a skillet over low flame. Add garlic and green chillies.',
      'Sauté gently for 2 minutes until garlic turns pale gold and aromatic.',
      'Stir in soy sauce, then toss in the cooked noodles.',
      'Turn heat to high and stir vigorously for 1 minute to coat every strand. Serve hot.'
    ],
    substitutions: {
      'soy sauce': 'Use tamari or pinch of salt with broth',
      'green chilli': 'Use red chilli flakes'
    }
  },
  {
    id: 'carrot-ginger-soup',
    title: 'Glow Carrot Ginger Soup',
    category: 'Soups',
    cuisine: 'Universal',
    time: 20,
    difficulty: 'Easy',
    servings: 2,
    image: '🥕',
    description: 'Vibrant, soothing carrot soup accented by zesty fresh ginger and warm onion.',
    coreIngredients: [
      { name: 'Carrot', canonical: 'carrot', amount: 3, unit: 'large, sliced', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 1, unit: 'inch, sliced', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper', 'water'],
    nutrition: { calories: 120, protein: 2, carbs: 22, fat: 4 },
    instructions: [
      'Heat oil in a saucepan; sauté onions and ginger for 3 minutes until translucent.',
      'Add sliced carrots, 2 cups of water, and 1/2 tsp salt.',
      'Bring to a boil, then cover and simmer for 15 minutes until carrots are fork-tender.',
      'Puree soup using an immersion blender until velvety smooth.',
      'Season with black pepper and ladle into warm bowls.'
    ],
    substitutions: {
      'ginger': 'Use 1/4 tsp ginger powder or lemon zest',
      'carrot': 'Use pumpkin or sweet potato'
    }
  },
  {
    id: 'creamy-oats-porridge',
    title: 'Warm Sweet Milk Oats',
    category: 'Breakfast',
    cuisine: 'Universal',
    time: 8,
    difficulty: 'Easy',
    servings: 1,
    image: '🥣',
    description: 'Quick comforting bowl of rolled oats cooked in milk with a dash of sugar and butter.',
    coreIngredients: [
      { name: 'Oats', canonical: 'oats', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Milk', canonical: 'milk', amount: 1, unit: 'cup', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 0.5, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['sugar', 'salt'],
    nutrition: { calories: 270, protein: 11, carbs: 36, fat: 9 },
    instructions: [
      'Add oats and milk to a small saucepan over medium heat.',
      'Bring to a gentle bubble, then turn flame to low.',
      'Cook for 4-5 minutes, stirring continuously until thick and creamy.',
      'Stir in butter, 1 tsp sugar, and a tiny pinch of salt.',
      'Pour into a bowl and top with nuts or fruit if available.'
    ],
    substitutions: {
      'milk': 'Use almond milk, oat milk, or water',
      'butter': 'Use coconut oil or omit'
    }
  },
  {
    id: 'potato-spinach-curry',
    title: 'Aloo Palak (Potato Spinach Skillet)',
    category: 'Mains',
    cuisine: 'Indian',
    time: 18,
    difficulty: 'Easy',
    servings: 2,
    image: '🍃',
    description: 'Tender pan-roasted potatoes folded into chopped wilted spinach with cumin and garlic.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'boiled & cubed', optional: false },
      { name: 'Spinach', canonical: 'spinach', amount: 200, unit: 'g, chopped', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, sliced', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric'],
    nutrition: { calories: 180, protein: 5, carbs: 28, fat: 6 },
    instructions: [
      'Heat oil in a pan; splutter cumin seeds and add sliced garlic.',
      'Add boiled cubed potatoes, turmeric, and salt; sauté on medium heat for 5 minutes until crispy on edges.',
      'Toss in chopped fresh spinach in batches.',
      'Cook for 3-4 minutes until spinach is wilted and tender.',
      'Serve warm with flatbread or rice.'
    ],
    substitutions: {
      'spinach': 'Use kale or cabbage leaves',
      'cumin': 'Use mustard seeds'
    }
  },
  {
    id: 'crispy-potato-wedges',
    title: 'Garlic Pepper Potato Wedges',
    category: 'Snacks & Sides',
    cuisine: 'Universal',
    time: 25,
    difficulty: 'Easy',
    servings: 2,
    image: '🍟',
    description: 'Hand-cut potato wedges tossed in garlic oil and pan-roasted to a crackling golden crunch.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 3, unit: 'medium, cut into wedges', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 220, protein: 4, carbs: 36, fat: 8 },
    instructions: [
      'Cut potatoes into even wedges. Parboil in boiling water for 4 minutes, then drain thoroughly.',
      'Toss wedges in 2 tbsp oil, minced garlic, salt, and generous black pepper.',
      'Place in a heavy skillet over medium-high heat in a single flat layer.',
      'Cook for 12-15 minutes, flipping every 4 minutes until all sides are deep golden and crisp.',
      'Sprinkle extra salt while hot and serve immediately.'
    ],
    substitutions: {
      'garlic': 'Use 1/2 tsp garlic powder or smoked paprika'
    }
  },
  {
    id: 'cheese-omelette',
    title: 'Fluffy Cheese & Herb Omelette',
    category: 'Breakfast',
    cuisine: 'French',
    time: 8,
    difficulty: 'Easy',
    servings: 1,
    image: '🍳',
    description: 'Silky folded eggs filled with gooey melted cheese and black pepper.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'large', optional: false },
      { name: 'Cheese', canonical: 'cheese', amount: 30, unit: 'g, grated', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['salt', 'black pepper', 'cooking oil'],
    nutrition: { calories: 280, protein: 17, carbs: 2, fat: 23 },
    instructions: [
      'Beat eggs vigorously with a pinch of salt and pepper until light and frothy.',
      'Melt butter in an 8-inch non-stick skillet over medium-low heat.',
      'Pour in eggs and shake pan gently, using a spatula to bring cooked edges towards center.',
      'When top is slightly custardy, sprinkle grated cheese down the center line.',
      'Fold one third over and roll out onto a warm plate. Serve immediately.'
    ],
    substitutions: {
      'cheese': 'Use paneer crumble or nutritional yeast',
      'butter': 'Use cooking oil or olive oil'
    }
  },
  {
    id: 'egg-drop-soup',
    title: 'Comfort Egg Drop Soup',
    category: 'Soups',
    cuisine: 'Asian',
    time: 10,
    difficulty: 'Easy',
    servings: 2,
    image: '🥣',
    description: 'Delicate ribbons of egg floating in a warm, fragrant broth with garlic and ginger.',
    coreIngredients: [
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'beaten', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, crushed', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 0.5, unit: 'inch, sliced', optional: false },
      { name: 'Soy Sauce', canonical: 'soy sauce', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['water', 'salt', 'black pepper', 'cooking oil'],
    nutrition: { calories: 110, protein: 8, carbs: 3, fat: 7 },
    instructions: [
      'Bring 3 cups of water to a simmer in a pot with crushed garlic, ginger, soy sauce, and 1/2 tsp salt.',
      'Simmer for 5 minutes, then remove ginger slices with a slotted spoon.',
      'Stir the simmering broth in a circular whirlpool motion.',
      'Slowly drizzle the beaten eggs in a thin stream into the swirl to create delicate silken ribbons.',
      'Turn off heat immediately, season with black pepper, and serve warm.'
    ],
    substitutions: {
      'soy sauce': 'Use salt and a dash of vinegar',
      'ginger': 'Use 1/4 tsp ground ginger'
    }
  },
  {
    id: 'onion-tomato-uttapam',
    title: 'Quick Onion Tomato Flatbread',
    category: 'Breakfast',
    cuisine: 'Indian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🥞',
    description: 'Thick savory pancake topped with caramelized onions, juicy tomatoes, and green chillies.',
    coreIngredients: [
      { name: 'Flour', canonical: 'all-purpose flour', amount: 1, unit: 'cup', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'finely chopped', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 1, unit: 'finely chopped', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 230, protein: 6, carbs: 44, fat: 3 },
    instructions: [
      'In a bowl, whisk flour, 3/4 cup water, and 1/2 tsp salt into a thick pourable batter.',
      'Heat a flat griddle or skillet with 1 tsp oil.',
      'Pour a thick ladle of batter onto the pan (do not spread too thin).',
      'Immediately press chopped onions, tomatoes, and green chillies into the wet top surface.',
      'Drizzle a few drops of oil around the edges and cook for 3 minutes on medium heat.',
      'Flip over and cook for 2 minutes until toppings are nicely caramelized and bottom is cooked through.'
    ],
    substitutions: {
      'all-purpose flour': 'Use whole wheat flour (atta) or semolina (sooji)',
      'green chilli': 'Use black pepper'
    }
  },
  {
    id: 'garlic-spinach-dal',
    title: 'Garlic Dal Palak',
    category: 'Mains & Soups',
    cuisine: 'Indian',
    time: 22,
    difficulty: 'Easy',
    servings: 3,
    image: '🍲',
    description: 'Hearty lentils boiled with fresh spinach and topped with an aromatic garlic-cumin sizzle.',
    coreIngredients: [
      { name: 'Lentils (Dal)', canonical: 'lentils', amount: 1, unit: 'cup', optional: false },
      { name: 'Spinach', canonical: 'spinach', amount: 150, unit: 'g, chopped', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 4, unit: 'cloves, sliced', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'turmeric', 'water'],
    nutrition: { calories: 220, protein: 14, carbs: 36, fat: 3 },
    instructions: [
      'Boil lentils with 3 cups water, turmeric, and chopped spinach for 15 minutes until tender.',
      'Mash lightly with a whisk to combine spinach and lentils.',
      'In a small pan, heat 1 tbsp oil. Sauté cumin seeds and sliced garlic until golden and fragrant.',
      'Pour tempering over the dal, season with salt, and simmer for 2 minutes before serving.'
    ],
    substitutions: {
      'spinach': 'Use fenugreek leaves (methi) or cabbage',
      'lentils': 'Use split yellow peas or chickpeas'
    }
  },
  {
    id: 'creamy-mac-and-cheese',
    title: 'One-Pot Stovetop Mac & Cheese',
    category: 'Mains',
    cuisine: 'American',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🧀',
    description: 'Tender pasta enveloped in a rich, bubbling sauce made with milk, melted cheese, and butter.',
    coreIngredients: [
      { name: 'Pasta', canonical: 'pasta', amount: 200, unit: 'g', optional: false },
      { name: 'Milk', canonical: 'milk', amount: 1.5, unit: 'cups', optional: false },
      { name: 'Cheese', canonical: 'cheese', amount: 100, unit: 'g, shredded', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1.5, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['salt', 'black pepper', 'water'],
    nutrition: { calories: 480, protein: 18, carbs: 54, fat: 22 },
    instructions: [
      'Boil pasta in water until al dente; drain and return to low heat.',
      'Pour in milk and butter; stir continuously until milk is hot and butter melts.',
      'Gradually fold in shredded cheese in three batches on low heat until silky and thick.',
      'Season with salt and plenty of freshly cracked black pepper. Serve piping hot.'
    ],
    substitutions: {
      'butter': 'Use 1.5 tbsp cooking oil or cream',
      'cheese': 'Use paneer cubes with 1/2 tsp extra salt'
    }
  },
  {
    id: 'carrot-peas-pulao',
    title: 'Fragrant Carrot & Pea Rice',
    category: 'Mains',
    cuisine: 'Indian',
    time: 18,
    difficulty: 'Easy',
    servings: 2,
    image: '🍚',
    description: 'Fluffy spiced rice steamed with sweet green peas, tender diced carrots, and cumin.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 1.5, unit: 'cups (cooked or raw)', optional: false },
      { name: 'Carrot', canonical: 'carrot', amount: 1, unit: 'finely diced', optional: false },
      { name: 'Green Peas', canonical: 'peas', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 280, protein: 6, carbs: 52, fat: 5 },
    instructions: [
      'Heat oil in a pot. Splutter cumin seeds until fragrant.',
      'Add diced carrots and green peas; sauté for 3 minutes on medium heat.',
      'Fold in rice and salt. If using cooked rice, stir-fry for 3 minutes. If using raw rice, add 3 cups water and simmer covered for 15 minutes.',
      'Fluff with a fork and serve hot.'
    ],
    substitutions: {
      'peas': 'Use sweet corn or chopped green beans',
      'carrot': 'Use bell pepper or sweet potato'
    }
  },
  {
    id: 'potato-pancake',
    title: 'Savory Potato Latke Pancake',
    category: 'Breakfast & Snacks',
    cuisine: 'European',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🥔',
    description: 'Crisp golden patties made of grated potato, egg binder, and onion, shallow fried.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'peeled & grated', optional: false },
      { name: 'Eggs', canonical: 'egg', amount: 1, unit: 'beaten', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 0.5, unit: 'grated', optional: false },
      { name: 'Flour', canonical: 'all-purpose flour', amount: 2, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 230, protein: 7, carbs: 32, fat: 9 },
    instructions: [
      'Grate potatoes and onions. Squeeze out all excess moisture using a clean tea towel.',
      'Mix in a bowl with beaten egg, flour, salt, and black pepper to form a thick batter.',
      'Heat 2 tbsp oil in a skillet over medium flame.',
      'Drop dollops of batter into the hot pan, flattening into round cakes with the back of a spoon.',
      'Fry for 4-5 minutes per side until deep golden and crunchy. Drain and serve hot.'
    ],
    substitutions: {
      'all-purpose flour': 'Use cornstarch or breadcrumbs',
      'egg': 'Use 2 tbsp yogurt or milk'
    }
  },
  {
    id: 'tomato-egg-drop-noodles',
    title: 'Silky Tomato Egg Drop Noodles',
    category: 'Mains & Soups',
    cuisine: 'Asian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🍜',
    description: 'Juicy stewed tomatoes in a savory noodle broth with delicate wispy egg ribbons.',
    coreIngredients: [
      { name: 'Pasta', canonical: 'pasta', amount: 150, unit: 'g (noodles or pasta)', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 2, unit: 'chopped', optional: false },
      { name: 'Eggs', canonical: 'egg', amount: 2, unit: 'beaten', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, minced', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper', 'water'],
    nutrition: { calories: 340, protein: 14, carbs: 52, fat: 9 },
    instructions: [
      'Heat oil in a pot; cook garlic for 30 seconds, then add chopped tomatoes with salt.',
      'Sauté on high for 4 minutes until tomatoes soften into a fragrant pulp.',
      'Pour in 3 cups of water and bring to a rapid boil. Add noodles and cook until tender.',
      'Swirl broth and pour in beaten egg in a slow stream to form ribbons.',
      'Season with black pepper and serve hot in deep soup bowls.'
    ],
    substitutions: {
      'pasta': 'Use rice vermicelli or ramen',
      'garlic': 'Use scallions or onion'
    }
  },
  {
    id: 'spiced-buttermilk-curd',
    title: 'Cooling Spiced Buttermilk (Chaas)',
    category: 'Beverages',
    cuisine: 'Indian',
    time: 5,
    difficulty: 'Easy',
    servings: 2,
    image: '🥛',
    description: 'Refreshing, gut-healthy churned yogurt drink spiced with ginger, green chilli, and cumin.',
    coreIngredients: [
      { name: 'Yogurt', canonical: 'yogurt', amount: 1, unit: 'cup', optional: false },
      { name: 'Ginger', canonical: 'ginger', amount: 0.5, unit: 'inch, crushed', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 0.5, unit: 'finely minced', optional: false }
    ],
    assumedStaples: ['water', 'salt'],
    nutrition: { calories: 75, protein: 5, carbs: 6, fat: 4 },
    instructions: [
      'In a blender or pitcher, whisk yogurt with 1.5 cups of cold chilled water.',
      'Add crushed ginger, minced green chilli, and 1/2 tsp salt.',
      'Froth with an immersion blender or traditional hand churner for 30 seconds.',
      'Pour into tall glasses and serve chilled.'
    ],
    substitutions: {
      'yogurt': 'Use 1 cup Milk + 1 tbsp Lemon Juice whisked together',
      'green chilli': 'Use black pepper'
    }
  },
  {
    id: 'potato-onion-roti-roll',
    title: 'Aloo Onion Street Roll (Frankie)',
    category: 'Breakfast & Snacks',
    cuisine: 'Indian',
    time: 15,
    difficulty: 'Easy',
    servings: 2,
    image: '🌯',
    description: 'Spiced pan-roasted potatoes and crunchy pickled onions wrapped in warm flatbread.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 2, unit: 'flatbreads / roti / wraps', optional: false },
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'boiled & mashed', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'thinly sliced', optional: false },
      { name: 'Garam Masala', canonical: 'garam masala', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt'],
    nutrition: { calories: 310, protein: 7, carbs: 54, fat: 8 },
    instructions: [
      'Mix mashed potatoes with garam masala, salt, and 1 tsp oil; shape into long potato cutlets.',
      'Pan-sear the cutlets in 1 tbsp oil until golden-brown on both sides.',
      'Toss sliced onions with a pinch of salt (and a dash of lemon if available).',
      'Warm the flatbreads on a skillet, place the crispy potato cutlet in center, and top with onion slices.',
      'Roll tightly and wrap the bottom in foil or parchment to serve.'
    ],
    substitutions: {
      'bread': 'Use standard sliced bread, tortillas, or pita',
      'garam masala': 'Use chaat masala or curry powder'
    }
  },
  {
    id: 'stir-fried-garlic-spinach',
    title: 'Quick Sautéed Garlic Spinach',
    category: 'Sides',
    cuisine: 'Universal',
    time: 8,
    difficulty: 'Easy',
    servings: 2,
    image: '🍃',
    description: 'Fresh emerald spinach leaves flash-sautéed with golden toasted garlic and sea salt.',
    coreIngredients: [
      { name: 'Spinach', canonical: 'spinach', amount: 300, unit: 'g, washed', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 4, unit: 'cloves, thinly sliced', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 95, protein: 4, carbs: 5, fat: 7 },
    instructions: [
      'Melt butter with 1 tsp oil in a large skillet over medium-low heat.',
      'Add sliced garlic and fry gently for 90 seconds until fragrant and barely golden.',
      'Turn heat to medium-high and add spinach leaves in handfuls.',
      'Toss with tongs for 2-3 minutes until wilted and vibrant green.',
      'Season with salt and freshly cracked black pepper; serve immediately.'
    ],
    substitutions: {
      'butter': 'Use olive oil or cooking oil',
      'spinach': 'Use kale or Swiss chard'
    }
  },
  {
    id: 'egg-bread-poha',
    title: 'Spiced Bread Upma / Poha',
    category: 'Breakfast & Snacks',
    cuisine: 'Indian',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🍞',
    description: 'Cubed bread sautéed with onions, green chillies, mustard seeds, and turmeric.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 4, unit: 'slices, cut into 1-inch cubes', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false },
      { name: 'Mustard Seeds', canonical: 'mustard seeds', amount: 1, unit: 'tsp', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 240, protein: 6, carbs: 38, fat: 7 },
    instructions: [
      'Sprinkle 2 tablespoons of water over bread cubes to moisten lightly.',
      'Heat oil in a wok; pop mustard seeds, then add green chillies and chopped onions.',
      'Sauté for 3 minutes until onions turn soft and translucent.',
      'Add turmeric and salt, then toss in the bread cubes.',
      'Stir-fry on medium heat for 3-4 minutes until bread edges get slightly crisp and absorb the spices.',
      'Serve hot with a cup of tea.'
    ],
    substitutions: {
      'mustard seeds': 'Use cumin seeds',
      'green chilli': 'Use red chilli flakes'
    }
  },
  {
    id: 'potato-onion-curry',
    title: 'Everyday Aloo Pyaz Rassa',
    category: 'Mains',
    cuisine: 'Indian',
    time: 20,
    difficulty: 'Easy',
    servings: 3,
    image: '🥔',
    description: 'A comforting everyday stew of tender potatoes and sweet onions in a light spiced broth.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 3, unit: 'medium, peeled & diced', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 2, unit: 'sliced', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water', 'black pepper'],
    nutrition: { calories: 190, protein: 4, carbs: 34, fat: 5 },
    instructions: [
      'Heat oil in a pot. Splutter cumin seeds and add sliced onions.',
      'Cook onions for 5 minutes until soft and caramelized.',
      'Add diced potatoes, turmeric, and 1 tsp salt; sauté for 3 minutes.',
      'Pour in 1.5 cups of water, cover, and simmer for 12-14 minutes until potatoes are completely fork-tender.',
      'Crush a few potato cubes with the back of a ladle to naturally thicken the sauce, then serve.'
    ],
    substitutions: {
      'cumin': 'Use mustard seeds',
      'potato': 'Use sweet potatoes or turnips'
    }
  },
  {
    id: 'creamy-garlic-dip',
    title: 'Whipped Garlic Yogurt Dip',
    category: 'Sides & Condiments',
    cuisine: 'Mediterranean',
    time: 5,
    difficulty: 'Easy',
    servings: 2,
    image: '🥣',
    description: 'Cool thick yogurt whipped with freshly grated garlic, a drizzle of oil, and salt.',
    coreIngredients: [
      { name: 'Yogurt', canonical: 'yogurt', amount: 1, unit: 'cup', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 2, unit: 'cloves, grated into paste', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 120, protein: 7, carbs: 8, fat: 7 },
    instructions: [
      'Place yogurt in a bowl and whisk vigorously until velvety smooth.',
      'Fold in finely grated garlic, 1/2 tsp salt, and a pinch of black pepper.',
      'Drizzle with 1 teaspoon of cooking oil or olive oil on top.',
      'Serve as a refreshing dip for chips, bread, roasted potatoes, or fritters.'
    ],
    substitutions: {
      'yogurt': 'Use sour cream or mayonnaise',
      'garlic': 'Use 1/4 tsp garlic powder'
    }
  },
  {
    id: 'spiced-scrambled-tofu-paneer',
    title: 'Golden Turmeric Scramble',
    category: 'Breakfast',
    cuisine: 'Universal',
    time: 10,
    difficulty: 'Easy',
    servings: 2,
    image: '🍳',
    description: 'Warm crumble of paneer or tofu with turmeric, black pepper, and tender onions.',
    coreIngredients: [
      { name: 'Paneer', canonical: 'paneer', amount: 150, unit: 'g, crumbled', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 1, unit: 'chopped', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper'],
    nutrition: { calories: 240, protein: 15, carbs: 7, fat: 18 },
    instructions: [
      'Heat oil in a pan and cook onions for 3-4 minutes until translucent.',
      'Add turmeric, salt, and freshly cracked black pepper.',
      'Add crumbled paneer and toss for 2 minutes until hot throughout.',
      'Serve alongside toast or flatbread.'
    ],
    substitutions: {
      'paneer': 'Use firm tofu or scrambled eggs'
    }
  },
  {
    id: 'savory-rice-pancake',
    title: 'Crispy Leftover Rice Pancakes',
    category: 'Breakfast & Snacks',
    cuisine: 'Universal',
    time: 12,
    difficulty: 'Easy',
    servings: 2,
    image: '🥞',
    description: 'Turn cold leftover rice into savory, crispy griddled cakes bound with flour and onions.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 1.5, unit: 'cups (cooked)', optional: false },
      { name: 'Flour', canonical: 'all-purpose flour', amount: 3, unit: 'tbsp', optional: false },
      { name: 'Onions', canonical: 'onion', amount: 0.5, unit: 'finely chopped', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'black pepper', 'water'],
    nutrition: { calories: 230, protein: 5, carbs: 44, fat: 4 },
    instructions: [
      'In a bowl, roughly mash cooked rice with the back of a fork.',
      'Add chopped onions, green chilli, flour, salt, pepper, and 2 tbsp water to bind.',
      'Shape into flat 3-inch round patties.',
      'Shallow fry in 2 tbsp hot oil over medium heat for 4 minutes per side until crunchy and golden.',
      'Serve warm with chutney or dip.'
    ],
    substitutions: {
      'all-purpose flour': 'Use cornstarch or mashed boiled potato to bind',
      'green chilli': 'Use red chilli flakes'
    }
  },
  {
    id: 'sweet-milk-toast',
    title: 'Caramelized Sweet Milk Toast',
    category: 'Breakfast & Snacks',
    cuisine: 'Universal',
    time: 8,
    difficulty: 'Easy',
    servings: 1,
    image: '🍞',
    description: 'Golden buttery toasted bread soaked in sweetened warm milk, nostalgic and comforting.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 2, unit: 'slices', optional: false },
      { name: 'Milk', canonical: 'milk', amount: 0.5, unit: 'cup', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 1, unit: 'tbsp', optional: false }
    ],
    assumedStaples: ['sugar', 'cooking oil'],
    nutrition: { calories: 260, protein: 7, carbs: 32, fat: 12 },
    instructions: [
      'Melt butter in a skillet and toast bread slices until golden brown on both sides.',
      'Warm milk with 2 teaspoons of sugar until dissolved.',
      'Pour warm sweet milk slowly directly over the toasted bread in the pan.',
      'Simmer on low for 60 seconds as the bread absorbs the sweet milk into a custardy center while keeping a toasted crust.',
      'Slide onto a plate and enjoy warm.'
    ],
    substitutions: {
      'milk': 'Use almond milk or oat milk',
      'butter': 'Use cooking oil or ghee'
    }
  },
  {
    id: 'potato-tomato-curry',
    title: 'Aloo Tamatar (Potato & Tomato Curry)',
    category: 'Mains',
    cuisine: 'Indian',
    time: 18,
    difficulty: 'Easy',
    servings: 2,
    image: '🍛',
    description: 'Tangy, hearty potato curry cooked in a fragrant tomato-cumin sauce, perfect with rice.',
    coreIngredients: [
      { name: 'Potatoes', canonical: 'potato', amount: 2, unit: 'boiled & roughly crushed', optional: false },
      { name: 'Tomatoes', canonical: 'tomato', amount: 2, unit: 'finely chopped', optional: false },
      { name: 'Cumin Seeds', canonical: 'cumin', amount: 1, unit: 'tsp', optional: false },
      { name: 'Turmeric', canonical: 'turmeric', amount: 0.5, unit: 'tsp', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt', 'water'],
    nutrition: { calories: 175, protein: 4, carbs: 30, fat: 5 },
    instructions: [
      'Heat oil in a pan; add cumin seeds and let them splutter.',
      'Add chopped tomatoes, turmeric, and 1 tsp salt. Cook for 5 minutes until soft and pulpy.',
      'Tumble in roughly hand-crushed boiled potatoes.',
      'Add 1 cup of water, bring to a boil, and simmer for 6 minutes until gravy thickens naturally.',
      'Serve warm with bread, rice, or flatbread.'
    ],
    substitutions: {
      'tomatoes': 'Use 2 tbsp tomato paste + 1 cup water',
      'cumin': 'Use mustard seeds'
    }
  },
  {
    id: 'curd-rice',
    title: 'Soothing Curd Rice (Thayir Sadam)',
    category: 'Mains & Comfort',
    cuisine: 'Indian',
    time: 8,
    difficulty: 'Easy',
    servings: 2,
    image: '🥣',
    description: 'Soft mashed rice mixed with creamy yogurt and tempered with mustard seeds and green chillies.',
    coreIngredients: [
      { name: 'Rice', canonical: 'rice', amount: 1.5, unit: 'cups (cooked & slightly mashed)', optional: false },
      { name: 'Yogurt', canonical: 'yogurt', amount: 1, unit: 'cup', optional: false },
      { name: 'Mustard Seeds', canonical: 'mustard seeds', amount: 1, unit: 'tsp', optional: false },
      { name: 'Green Chilli', canonical: 'green chilli', amount: 1, unit: 'chopped', optional: false }
    ],
    assumedStaples: ['cooking oil', 'salt'],
    nutrition: { calories: 280, protein: 8, carbs: 48, fat: 6 },
    instructions: [
      'In a bowl, mix cooked mashed rice with yogurt and 1/2 tsp salt.',
      'Heat 1 tsp oil in a tiny pan; add mustard seeds and let them pop.',
      'Add chopped green chilli and sauté for 20 seconds.',
      'Pour tempering over the curd rice and stir gently.',
      'Enjoy chilled or at room temperature.'
    ],
    substitutions: {
      'yogurt': 'Use 3/4 cup milk whisked with 1 tbsp lemon juice',
      'mustard seeds': 'Use cumin seeds'
    }
  },
  {
    id: 'garlic-butter-toast',
    title: 'Crusty Garlic Butter Toast',
    category: 'Snacks & Sides',
    cuisine: 'Universal',
    time: 8,
    difficulty: 'Easy',
    servings: 2,
    image: '🍞',
    description: 'Crisp golden toasted bread slathered with rich minced garlic butter and black pepper.',
    coreIngredients: [
      { name: 'Bread', canonical: 'bread', amount: 4, unit: 'slices', optional: false },
      { name: 'Garlic', canonical: 'garlic', amount: 3, unit: 'cloves, minced', optional: false },
      { name: 'Butter', canonical: 'butter', amount: 2, unit: 'tbsp, softened', optional: false }
    ],
    assumedStaples: ['salt', 'black pepper', 'cooking oil'],
    nutrition: { calories: 260, protein: 6, carbs: 28, fat: 14 },
    instructions: [
      'In a small ramekin, mix softened butter with minced garlic, a pinch of salt, and black pepper.',
      'Spread the garlic butter generously on one side of each bread slice.',
      'Place buttered side down in a skillet over medium heat and toast for 3 minutes until crunchy and golden.',
      'Flip for 1 minute to warm the reverse side, slice diagonally, and serve.'
    ],
    substitutions: {
      'butter': 'Use cooking oil or olive oil mixed with garlic',
      'garlic': 'Use 1/2 tsp garlic powder'
    }
  }
];
