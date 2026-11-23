# FlavorForge: FridgeRescue Hack 🍳🔥

A zero-waste refrigerator recipe rescue web application that matches recipes based on ingredients you have on hand, suggests smart kitchen substitutions, calculates match scores, and guides hands-free cooking.

---

## 🌟 Core Features (Must-Have)
- **Pantry & Fridge Inventory Selector**:
  - Quick-tap chips for common staples: *Eggs, Potatoes, Onions, Tomatoes, Rice, Milk, Paneer, Bread, Garlic, Ginger, Butter, Cheese, Spices*.
  - Categorized tabs (*Vegetables, Dairy & Eggs, Grains & Staples, Spices & Seasoning, Pantry*).
  - Custom ingredient search & add with autocompletion.
- **Ingredient Match Scoring Algorithm**:
  - Normalized string stemming (handles plurals and culinary synonyms like *capsicum* vs *bell pepper*, *curd* vs *yogurt*).
  - Assumed kitchen staples (*Salt, Cooking Oil, Water*) are excluded from match denominators so recipes are evaluated fairly.
  - Formula:
    $$\text{Match Percentage} = \left(\frac{|\text{UserPantry} \cap \text{CoreRecipeIngredients}|}{|\text{CoreRecipeIngredients}|}\right) \times 100$$
- **Missing Ingredient Highlighting & Substitutes**:
  - Clear alerts for missing ingredients and 1-click kitchen alternatives (e.g. *No Buttermilk? Use Milk + Lemon Juice*, *No Butter? Use Cooking Oil (1:1 ratio)*).
- **Step-by-Step Cooking Walkthrough**:
  - Interactive modal with preparation instructions, estimated cooking time, and difficulty rating.
  - Clickable step checklist with progress indicator.
- **Ingredient Serving Scaler**:
  - Scaler (`-` / `+`) dynamically adjusts ingredient quantities from 1 to 10 servings.
  - Clean culinary decimal-to-fraction formatting (`4 1/2 tsp` instead of `4.5 tsp`, `3/4 cup`, `1/2 tbsp`).
- **Favorite Recipes Bookmarking**:
  - 1-click bookmarking saved to `localStorage`.
  - Filter toggle for "Saved Favorites".

---

## 🚀 Stretch Features (All Implemented)
- **AI Chef Recipe Improviser**:
  - Generates custom zero-waste rescue recipes for quirky or unusual leftover combinations.
  - Supports instant built-in culinary AI synthesis and optional Gemini API integration.
- **Food Expiry Alert Tracker**:
  - Set expiration status on pantry items (*Fresh, 5 Days, 2 Days, Expires Today 🚨*).
  - Prioritizes recipes that rescue expiring items first and displays rescue alert badges.
- **Nutrition Facts Estimator**:
  - Shows estimated calories, protein, carbohydrates, and fat per serving on every recipe.
- **Voice-Guided Hands-Free Mode**:
  - Uses Web Speech API (`window.speechSynthesis`).
  - Read steps aloud with Play, Pause, Next Step, Previous Step, and Repeat controls.

---

## ⚡ Quick Demo Verifications
The app includes a top preset bar for hackathon evaluators:
1. **Demo 1**: Tap `Eggs + Potatoes + Onions`  
   - Returns **Aloo Egg Bhurji** at 100% Match.
   - Returns **Spanish Omelette** at 85% Match (Missing: *Butter*, with substitution tip: *'Use Cooking Oil instead of Butter'*).
   - Click Spanish Omelette $\to$ scale to 4 servings $\to$ save to favorites.
2. **Demo 2**: Tap `Egg + Onion + Bread`  
   - Returns **Egg Toast** at 100% Match.

---

## 📁 File Structure
```
├── index.html              # Clean semantic SPA layout
├── styles.css              # Minimal, modern, responsive CSS3
├── README.md               # Documentation and demo guide
├── data/
│   ├── ingredients.js      # Canonical items, synonyms, and categories
│   ├── substitutions.js    # 30+ kitchen substitution rules
│   └── recipes.js          # 40 home-style recipes with nutrition and steps
└── js/
    ├── engine.js           # Math match algorithm, stemmer, and fraction scaler
    ├── speech.js           # Web Speech API hands-free assistant
    ├── ai-improviser.js    # Client-side AI Chef recipe generator
    └── app.js              # State manager and UI coordinator
```

---

## 💻 How to Run
Simply open [index.html](file:///c:/Users/ashwi/OneDrive/Flavourforge%201/index.html) in any modern web browser or serve via any static file server:
```bash
# Optional static server
npx serve .
# or
python -m http.server 8000
```
