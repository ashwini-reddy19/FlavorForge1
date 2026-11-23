// js/app.js - Main Application Coordinator

import { COMMON_STAPLES, CATEGORIES } from '../data/ingredients.js';
import { RECIPES } from '../data/recipes.js';
import { normalizeIngredient, evaluateRecipe, scaleIngredients } from './engine.js';
import { voiceAssistant } from './speech.js';
import { improviseRecipe } from './ai-improviser.js';

// Application State
const state = {
  pantryItems: [], // Array of { name, canonical, category, icon, expiry: 'fresh' | '5days' | '2days' | 'today' }
  activeCategory: 'All',
  activeFilter: 'all',
  activeSort: 'match-desc',
  savedRecipeIds: new Set(JSON.parse(localStorage.getItem('flavorforge_favorites') || '[]')),
  currentModalRecipe: null,
  currentServings: 2,
  completedStepIndexes: new Set()
};

// DOM References
const dom = {
  customIngredientInput: document.getElementById('customIngredientInput'),
  categoryTabs: document.getElementById('categoryTabs'),
  staplesGrid: document.getElementById('staplesGrid'),
  activePantryChips: document.getElementById('activePantryChips'),
  selectedCount: document.getElementById('selectedCount'),
  clearAllPantryBtn: document.getElementById('clearAllPantryBtn'),
  filterPillsGroup: document.getElementById('filterPillsGroup'),
  recipeSortSelect: document.getElementById('recipeSortSelect'),
  resultsCount: document.getElementById('resultsCount'),
  recipesGrid: document.getElementById('recipesGrid'),
  savedRecipesFilterBtn: document.getElementById('savedRecipesFilterBtn'),
  savedCountHeader: document.getElementById('savedCountHeader'),
  demo1Btn: document.getElementById('demo1Btn'),
  demo2Btn: document.getElementById('demo2Btn'),
  demo3Btn: document.getElementById('demo3Btn'),
  demoClearBtn: document.getElementById('demoClearBtn'),
  recipeModalOverlay: document.getElementById('recipeModalOverlay'),
  modalRecipeContent: document.getElementById('modalRecipeContent'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  aiChefBtn: document.getElementById('aiChefBtn'),
  aiChefModalOverlay: document.getElementById('aiChefModalOverlay'),
  aiModalCloseBtn: document.getElementById('aiModalCloseBtn'),
  aiPantryPreview: document.getElementById('aiPantryPreview'),
  aiChefCustomNote: document.getElementById('aiChefCustomNote'),
  geminiApiKeyInput: document.getElementById('geminiApiKeyInput'),
  generateAiRecipeBtn: document.getElementById('generateAiRecipeBtn'),
  aiResultCard: document.getElementById('aiResultCard'),
  toastContainer: document.getElementById('toastContainer')
};

// Initialize Application
function init() {
  renderCategories();
  renderStaples();
  renderActivePantry();
  updateSavedCountDisplay();
  renderRecipes();
  bindEvents();
}

// Render Category Tabs
function renderCategories() {
  dom.categoryTabs.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab ${cat === state.activeCategory ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');
}

// Render Staples Grid
function renderStaples() {
  const filtered = state.activeCategory === 'All' 
    ? COMMON_STAPLES 
    : COMMON_STAPLES.filter(s => s.category === state.activeCategory);

  const selectedCanonicals = new Set(state.pantryItems.map(p => p.canonical));

  dom.staplesGrid.innerHTML = filtered.map(staple => {
    const isSelected = selectedCanonicals.has(staple.canonical);
    return `
      <button class="staple-chip ${isSelected ? 'selected' : ''}" data-canonical="${staple.canonical}" data-name="${staple.name}">
        <span>${staple.icon}</span>
        <span>${staple.name}</span>
        <span class="chip-check">✓</span>
      </button>
    `;
  }).join('');
}

// Render Selected Pantry Bar
function renderActivePantry() {
  dom.selectedCount.textContent = state.pantryItems.length;

  if (state.pantryItems.length === 0) {
    dom.activePantryChips.innerHTML = `
      <p style="font-size: 13px; color: var(--slate-400); font-style: italic;">No items selected yet. Tap staples above or search to start matching!</p>
    `;
    return;
  }

  dom.activePantryChips.innerHTML = state.pantryItems.map(item => {
    let expiryClass = '';
    if (item.expiry === 'today') expiryClass = 'expiring-today';
    else if (item.expiry === '2days') expiryClass = 'expiring-2days';

    return `
      <div class="pantry-item-pill ${expiryClass}">
        <span>${item.icon || '🥬'}</span>
        <span>${item.name}</span>
        <select class="expiry-dropdown" data-canonical="${item.canonical}" title="Set item expiration time">
          <option value="fresh" ${item.expiry === 'fresh' ? 'selected' : ''}>Fresh</option>
          <option value="5days" ${item.expiry === '5days' ? 'selected' : ''}>⏳ 5 Days</option>
          <option value="2days" ${item.expiry === '2days' ? 'selected' : ''}>⚠️ 2 Days</option>
          <option value="today" ${item.expiry === 'today' ? 'selected' : ''}>🚨 Today!</option>
        </select>
        <button class="remove-pantry-btn" data-canonical="${item.canonical}" title="Remove item">✕</button>
      </div>
    `;
  }).join('');
}

// Add or Toggle Pantry Item
function togglePantryItem(name, canonical = null, icon = '🥬') {
  const canon = canonical || normalizeIngredient(name);
  const existingIndex = state.pantryItems.findIndex(p => p.canonical === canon);

  if (existingIndex >= 0) {
    state.pantryItems.splice(existingIndex, 1);
    showToast(`Removed ${name} from pantry`);
  } else {
    // Look up icon from common staples if available
    const stapleMatch = COMMON_STAPLES.find(s => s.canonical === canon);
    const itemIcon = stapleMatch ? stapleMatch.icon : icon;
    state.pantryItems.push({
      name,
      canonical: canon,
      icon: itemIcon,
      expiry: 'fresh'
    });
    showToast(`Added ${name} to fridge pantry`);
  }

  renderStaples();
  renderActivePantry();
  renderRecipes();
}

// Render Recipe Feed
function renderRecipes() {
  const pantryCanonicals = new Set(state.pantryItems.map(p => p.canonical));
  const pantryExpiryMap = {};
  state.pantryItems.forEach(p => {
    pantryExpiryMap[p.canonical] = p.expiry;
  });

  // Evaluate each recipe
  let evaluated = RECIPES.map(recipe => {
    const evalData = evaluateRecipe(recipe, pantryCanonicals, pantryExpiryMap);
    const isFavorite = state.savedRecipeIds.has(recipe.id);
    return {
      ...recipe,
      ...evalData,
      isFavorite
    };
  });

  // Apply Filter Pills
  if (state.activeFilter === '100match') {
    evaluated = evaluated.filter(r => r.matchPercentage === 100);
  } else if (state.activeFilter === 'quick') {
    evaluated = evaluated.filter(r => r.time <= 20);
  } else if (state.activeFilter === 'veg') {
    evaluated = evaluated.filter(r => !r.coreIngredients.some(i => i.canonical === 'egg'));
  } else if (state.activeFilter === 'expiring') {
    evaluated = evaluated.filter(r => r.rescuesExpiringCount > 0);
  } else if (state.activeFilter === 'saved') {
    evaluated = evaluated.filter(r => r.isFavorite);
  }

  // Apply Sorting
  evaluated.sort((a, b) => {
    if (state.activeSort === 'match-desc') {
      // Prioritize match percentage, then expiring rescues
      if (b.matchPercentage !== a.matchPercentage) {
        return b.matchPercentage - a.matchPercentage;
      }
      return (b.expiryRescueScore || 0) - (a.expiryRescueScore || 0);
    } else if (state.activeSort === 'expiring-desc') {
      if ((b.expiryRescueScore || 0) !== (a.expiryRescueScore || 0)) {
        return (b.expiryRescueScore || 0) - (a.expiryRescueScore || 0);
      }
      return b.matchPercentage - a.matchPercentage;
    } else if (state.activeSort === 'time-asc') {
      return a.time - b.time;
    } else if (state.activeSort === 'calories-asc') {
      return (a.nutrition?.calories || 999) - (b.nutrition?.calories || 999);
    } else if (state.activeSort === 'name-asc') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  dom.resultsCount.innerHTML = `Showing <span>${evaluated.length}</span> rescue recipe${evaluated.length === 1 ? '' : 's'}`;

  if (evaluated.length === 0) {
    dom.recipesGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🍳</div>
        <h3>No matching recipes found</h3>
        <p>Try selecting more items, switching your filter pill, or click the AI Chef Improviser to create a custom recipe!</p>
        <button id="resetFiltersEmptyBtn" class="btn btn-outline">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersEmptyBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeFilter = 'all';
        updateFilterPillsUI();
        renderRecipes();
      });
    }
    return;
  }

  dom.recipesGrid.innerHTML = evaluated.map(recipe => {
    let matchClass = 'match-partial';
    if (recipe.matchPercentage === 100) matchClass = 'match-100';
    else if (recipe.matchPercentage >= 75) matchClass = 'match-high';

    const missingText = recipe.missing.length > 0 
      ? `Missing ${recipe.missing.length} ingredient${recipe.missing.length > 1 ? 's' : ''}`
      : 'Ready to cook!';

    const rescuePillHtml = recipe.rescuesExpiringCount > 0
      ? `<span class="rescue-alert-badge" title="Rescues expiring pantry items!">🚨 Rescues ${recipe.rescuedItems.map(i => i.name).join(', ')}</span>`
      : '';

    // Missing ingredient pills & substitution tip
    let missingBlockHtml = '';
    if (recipe.missing.length > 0) {
      const missingListStr = recipe.missing.map(m => `<b>${m.name}</b>`).join(', ');
      const subWithTip = recipe.missing.find(m => m.substitution);
      const subTipHtml = subWithTip 
        ? `<div class="missing-sub-tip">💡 Tip: ${subWithTip.substitution}</div>`
        : '';

      missingBlockHtml = `
        <div class="missing-box">
          <div class="missing-box-header">
            <span>⚠️</span>
            <span>Missing: ${missingListStr}</span>
          </div>
          ${subTipHtml}
        </div>
      `;
    }

    return `
      <article class="recipe-card" data-id="${recipe.id}">
        <div class="recipe-card-header">
          <div class="recipe-icon">${recipe.image || '🍳'}</div>
          <div class="recipe-badges">
            <span class="match-badge ${matchClass}">
              ${recipe.matchPercentage}% Match
            </span>
            ${rescuePillHtml}
          </div>
        </div>

        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-desc">${recipe.description}</p>

        <div class="recipe-meta-tags">
          <span class="meta-pill">⏱️ ${recipe.time} mins</span>
          <span class="meta-pill">📊 ${recipe.difficulty}</span>
          <span class="meta-pill">👥 ${recipe.servings} Servings</span>
          <span class="meta-pill" style="color: var(--primary-hover); background: var(--primary-light);">
            ${recipe.matched.length}/${recipe.matched.length + recipe.missing.length} Ingredients
          </span>
        </div>

        <div class="recipe-nutrition-bar">
          <div class="nutrition-item">
            <div class="n-val">${recipe.nutrition?.calories || 0}</div>
            <div class="n-lbl">Calories</div>
          </div>
          <div class="nutrition-item">
            <div class="n-val">${recipe.nutrition?.protein || 0}g</div>
            <div class="n-lbl">Protein</div>
          </div>
          <div class="nutrition-item">
            <div class="n-val">${recipe.nutrition?.carbs || 0}g</div>
            <div class="n-lbl">Carbs</div>
          </div>
          <div class="nutrition-item">
            <div class="n-val">${recipe.nutrition?.fat || 0}g</div>
            <div class="n-lbl">Fat</div>
          </div>
        </div>

        ${missingBlockHtml}

        <div class="card-actions">
          <button class="btn btn-primary open-walkthrough-btn" data-id="${recipe.id}" style="flex: 1;">
            <span>👨‍🍳</span>
            <span>Cook Walkthrough</span>
          </button>
          <button class="fav-btn ${recipe.isFavorite ? 'is-favorite' : ''}" data-id="${recipe.id}" title="${recipe.isFavorite ? 'Remove from favorites' : 'Save to favorites'}">
            ${recipe.isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// Open Walkthrough Modal
function openRecipeModal(recipeId) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  state.currentModalRecipe = recipe;
  state.currentServings = recipe.servings || 2;
  state.completedStepIndexes = new Set();

  renderModalContent();
  dom.recipeModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Initialize Voice Assistant with recipe steps
  voiceAssistant.setSteps(
    recipe.instructions,
    (stepIdx, stepNum, total) => {
      highlightActiveStep(stepIdx);
    },
    (voiceState) => {
      updateVoiceControlsUI(voiceState);
    }
  );
}

// Close Walkthrough Modal
function closeRecipeModal() {
  voiceAssistant.stop();
  dom.recipeModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  state.currentModalRecipe = null;
}

// Render Modal Content with Serving Scaler and Voice Controller
function renderModalContent() {
  const recipe = state.currentModalRecipe;
  if (!recipe) return;

  const pantryCanonicals = new Set(state.pantryItems.map(p => p.canonical));
  const scaledIngredients = scaleIngredients(recipe.coreIngredients, recipe.servings, state.currentServings);

  // Scaled Nutrition Per Total Servings
  const baseCal = recipe.nutrition?.calories || 0;
  const basePro = recipe.nutrition?.protein || 0;
  const baseCarb = recipe.nutrition?.carbs || 0;
  const baseFat = recipe.nutrition?.fat || 0;

  const isFav = state.savedRecipeIds.has(recipe.id);

  dom.modalRecipeContent.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 12px; padding-right: 30px;">
      <div>
        <h2 style="font-size: 22px; font-weight: 800; color: var(--dark); line-height: 1.3;">${recipe.title}</h2>
        <p style="font-size: 13px; color: var(--slate-500); margin-top: 4px;">${recipe.cuisine} Cuisine • ${recipe.category}</p>
      </div>
      <button class="fav-btn modal-fav-btn ${isFav ? 'is-favorite' : ''}" data-id="${recipe.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
    </div>

    <!-- Scaler Bar -->
    <div class="serving-scaler-box">
      <div class="scaler-info">
        <span>👥</span>
        <span>Ingredient Serving Scaler</span>
      </div>
      <div class="scaler-controls">
        <button class="scale-btn" id="scaleDownBtn" title="Decrease servings">-</button>
        <span class="scale-value" id="currentServingsText">${state.currentServings} Servings</span>
        <button class="scale-btn" id="scaleUpBtn" title="Increase servings">+</button>
      </div>
    </div>

    <!-- Nutrition Facts Bar -->
    <div class="recipe-nutrition-bar" style="margin-bottom: 20px;">
      <div class="nutrition-item">
        <div class="n-val">${baseCal}</div>
        <div class="n-lbl">Calories / Srv</div>
      </div>
      <div class="nutrition-item">
        <div class="n-val">${basePro}g</div>
        <div class="n-lbl">Protein / Srv</div>
      </div>
      <div class="nutrition-item">
        <div class="n-val">${baseCarb}g</div>
        <div class="n-lbl">Carbs / Srv</div>
      </div>
      <div class="nutrition-item">
        <div class="n-val">${baseFat}g</div>
        <div class="n-lbl">Fat / Srv</div>
      </div>
    </div>

    <!-- Scaled Ingredients List -->
    <h3 class="modal-section-title">
      <span>🥗</span>
      <span>Required Ingredients (Scaled for ${state.currentServings})</span>
    </h3>

    <div class="ingredients-list">
      ${scaledIngredients.map(ing => {
        const canon = normalizeIngredient(ing.canonical || ing.name);
        const inPantry = pantryCanonicals.has(canon);
        const subTip = recipe.substitutions?.[canon];

        return `
          <div class="ingredient-item ${inPantry ? 'in-pantry' : 'is-missing'}">
            <div>
              <span style="font-weight: 600;">${inPantry ? '✓' : '⚠️'} ${ing.name}</span>
              ${!inPantry && subTip ? `<div class="ing-sub-tip-inline">💡 ${subTip}</div>` : ''}
            </div>
            <span class="ing-qty">${ing.formattedAmount} ${ing.unit}</span>
          </div>
        `;
      }).join('')}
    </div>

    ${recipe.assumedStaples?.length > 0 ? `
      <div style="font-size: 12px; color: var(--slate-500); margin-bottom: 20px; background: var(--slate-100); padding: 8px 12px; border-radius: var(--radius-md);">
        <b>Assumed Kitchen Staples:</b> ${recipe.assumedStaples.join(', ')} (available in pantry).
      </div>
    ` : ''}

    <!-- Voice Cooking Assistant Bar -->
    <div class="voice-assistant-bar">
      <div class="voice-bar-header">
        <div class="voice-title">
          <span>🎙️</span>
          <span>Hands-Free Voice Assistant</span>
        </div>
        <span class="voice-indicator" id="voiceStatusIndicator">
          ${voiceAssistant.isSupported ? 'Ready to read steps aloud' : 'Speech synthesis not supported'}
        </span>
      </div>

      <div class="voice-controls">
        <button class="voice-btn active" id="voicePlayBtn">
          <span>▶️</span>
          <span id="voicePlayText">Start Reading</span>
        </button>
        <button class="voice-btn" id="voicePauseBtn">
          <span>⏸️</span>
          <span>Pause</span>
        </button>
        <button class="voice-btn" id="voiceRepeatBtn">
          <span>🔁</span>
          <span>Repeat Step</span>
        </button>
        <button class="voice-btn" id="voicePrevBtn">
          <span>⏮️</span>
          <span>Prev</span>
        </button>
        <button class="voice-btn" id="voiceNextBtn">
          <span>⏭️</span>
          <span>Next</span>
        </button>
        <button class="voice-btn" id="voiceStopBtn">
          <span>⏹️</span>
          <span>Stop</span>
        </button>
      </div>
    </div>

    <!-- Step-by-Step Cooking Checklist -->
    <h3 class="modal-section-title">
      <span>👩‍🍳</span>
      <span>Step-by-Step Walkthrough (${recipe.instructions.length} Steps)</span>
    </h3>

    <div class="steps-timeline" id="stepsTimeline">
      ${recipe.instructions.map((step, idx) => {
        const isDone = state.completedStepIndexes.has(idx);
        return `
          <div class="step-card ${isDone ? 'completed' : ''}" data-step-index="${idx}">
            <div class="step-num-badge">${isDone ? '✓' : idx + 1}</div>
            <div class="step-text">${step}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  bindModalEvents();
}

// Bind Modal Specific Events
function bindModalEvents() {
  const scaleDownBtn = document.getElementById('scaleDownBtn');
  const scaleUpBtn = document.getElementById('scaleUpBtn');
  const modalFavBtn = dom.modalRecipeContent.querySelector('.modal-fav-btn');

  if (scaleDownBtn) {
    scaleDownBtn.addEventListener('click', () => {
      if (state.currentServings > 1) {
        state.currentServings--;
        renderModalContent();
      }
    });
  }

  if (scaleUpBtn) {
    scaleUpBtn.addEventListener('click', () => {
      if (state.currentServings < 10) {
        state.currentServings++;
        renderModalContent();
      }
    });
  }

  if (modalFavBtn) {
    modalFavBtn.addEventListener('click', () => {
      toggleFavorite(state.currentModalRecipe.id);
      renderModalContent();
    });
  }

  // Voice Assistant Buttons
  const voicePlayBtn = document.getElementById('voicePlayBtn');
  const voicePauseBtn = document.getElementById('voicePauseBtn');
  const voiceRepeatBtn = document.getElementById('voiceRepeatBtn');
  const voicePrevBtn = document.getElementById('voicePrevBtn');
  const voiceNextBtn = document.getElementById('voiceNextBtn');
  const voiceStopBtn = document.getElementById('voiceStopBtn');

  if (voicePlayBtn) {
    voicePlayBtn.addEventListener('click', () => {
      if (voiceAssistant.isPausedState) {
        voiceAssistant.resume();
      } else {
        voiceAssistant.start();
      }
    });
  }

  if (voicePauseBtn) {
    voicePauseBtn.addEventListener('click', () => {
      voiceAssistant.pause();
    });
  }

  if (voiceRepeatBtn) {
    voiceRepeatBtn.addEventListener('click', () => {
      voiceAssistant.repeat();
    });
  }

  if (voicePrevBtn) {
    voicePrevBtn.addEventListener('click', () => {
      voiceAssistant.previous();
    });
  }

  if (voiceNextBtn) {
    voiceNextBtn.addEventListener('click', () => {
      voiceAssistant.next();
    });
  }

  if (voiceStopBtn) {
    voiceStopBtn.addEventListener('click', () => {
      voiceAssistant.stop();
    });
  }

  // Click on Step Cards to Toggle Completion
  const stepCards = dom.modalRecipeContent.querySelectorAll('.step-card');
  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.stepIndex, 10);
      if (state.completedStepIndexes.has(idx)) {
        state.completedStepIndexes.delete(idx);
      } else {
        state.completedStepIndexes.add(idx);
      }
      renderModalContent();
      voiceAssistant.goToStep(idx);
    });
  });
}

function highlightActiveStep(index) {
  const cards = dom.modalRecipeContent.querySelectorAll('.step-card');
  cards.forEach((card, idx) => {
    if (idx === index) {
      card.classList.add('active-step');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      card.classList.remove('active-step');
    }
  });
}

function updateVoiceControlsUI(voiceState) {
  const indicator = document.getElementById('voiceStatusIndicator');
  const playText = document.getElementById('voicePlayText');

  if (!indicator) return;

  if (voiceState.isPlaying) {
    if (voiceState.isPaused) {
      indicator.textContent = `⏸️ Paused at Step ${voiceState.stepIndex + 1}`;
      if (playText) playText.textContent = 'Resume';
    } else {
      indicator.textContent = `🔊 Reading Step ${voiceState.stepIndex + 1} of ${voiceState.totalSteps}`;
      if (playText) playText.textContent = 'Reading...';
    }
  } else {
    indicator.textContent = 'Voice guide idle';
    if (playText) playText.textContent = 'Start Reading';
  }
}

// Toggle Favorite Bookmarking
function toggleFavorite(recipeId) {
  if (state.savedRecipeIds.has(recipeId)) {
    state.savedRecipeIds.delete(recipeId);
    showToast('Removed from saved recipes');
  } else {
    state.savedRecipeIds.add(recipeId);
    showToast('❤️ Saved to favorite recipes!');
  }

  localStorage.setItem('flavorforge_favorites', JSON.stringify([...state.savedRecipeIds]));
  updateSavedCountDisplay();
  renderRecipes();
}

function updateSavedCountDisplay() {
  dom.savedCountHeader.textContent = state.savedRecipeIds.size;
}

// Update Filter Pills UI
function updateFilterPillsUI() {
  const pills = dom.filterPillsGroup.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    if (pill.dataset.filter === state.activeFilter) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  if (state.activeFilter === 'saved') {
    dom.savedRecipesFilterBtn.classList.add('active');
  } else {
    dom.savedRecipesFilterBtn.classList.remove('active');
  }
}

// AI Chef Improviser Modal Handlers
function openAiChefModal() {
  const itemsText = state.pantryItems.length > 0
    ? state.pantryItems.map(p => `${p.icon || '🥬'} ${p.name}${p.expiry !== 'fresh' ? ' (Expiring!)' : ''}`).join(', ')
    : 'No ingredients selected in pantry yet. We recommend selecting at least 2 items!';

  dom.aiPantryPreview.textContent = itemsText;
  dom.aiResultCard.style.display = 'none';
  dom.aiChefModalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAiChefModal() {
  dom.aiChefModalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Global Event Listeners
function bindEvents() {
  // Category tab clicks
  dom.categoryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tab');
    if (tab) {
      state.activeCategory = tab.dataset.category;
      renderCategories();
      renderStaples();
    }
  });

  // Staple quick-tap clicks
  dom.staplesGrid.addEventListener('click', (e) => {
    const chip = e.target.closest('.staple-chip');
    if (chip) {
      const canonical = chip.dataset.canonical;
      const name = chip.dataset.name;
      togglePantryItem(name, canonical);
    }
  });

  // Custom ingredient input on Enter
  dom.customIngredientInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = dom.customIngredientInput.value.trim();
      if (val) {
        togglePantryItem(val);
        dom.customIngredientInput.value = '';
      }
    }
  });

  // Active pantry chip actions (remove or expiry change)
  dom.activePantryChips.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.remove-pantry-btn');
    if (removeBtn) {
      const canonical = removeBtn.dataset.canonical;
      const index = state.pantryItems.findIndex(p => p.canonical === canonical);
      if (index >= 0) {
        state.pantryItems.splice(index, 1);
        renderStaples();
        renderActivePantry();
        renderRecipes();
      }
    }
  });

  dom.activePantryChips.addEventListener('change', (e) => {
    const dropdown = e.target.closest('.expiry-dropdown');
    if (dropdown) {
      const canonical = dropdown.dataset.canonical;
      const val = dropdown.value;
      const item = state.pantryItems.find(p => p.canonical === canonical);
      if (item) {
        item.expiry = val;
        renderActivePantry();
        renderRecipes();
        showToast(`Updated expiry for ${item.name}`);
      }
    }
  });

  // Clear all pantry
  dom.clearAllPantryBtn.addEventListener('click', () => {
    state.pantryItems = [];
    renderStaples();
    renderActivePantry();
    renderRecipes();
    showToast('Cleared all pantry items');
  });

  // Filter pills
  dom.filterPillsGroup.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (pill) {
      state.activeFilter = pill.dataset.filter;
      updateFilterPillsUI();
      renderRecipes();
    }
  });

  // Sort dropdown
  dom.recipeSortSelect.addEventListener('change', () => {
    state.activeSort = dom.recipeSortSelect.value;
    renderRecipes();
  });

  // Saved recipes header button
  dom.savedRecipesFilterBtn.addEventListener('click', () => {
    if (state.activeFilter === 'saved') {
      state.activeFilter = 'all';
    } else {
      state.activeFilter = 'saved';
    }
    updateFilterPillsUI();
    renderRecipes();
  });

  // Recipe card buttons (Walkthrough & Favorite)
  dom.recipesGrid.addEventListener('click', (e) => {
    const walkthroughBtn = e.target.closest('.open-walkthrough-btn');
    if (walkthroughBtn) {
      openRecipeModal(walkthroughBtn.dataset.id);
      return;
    }

    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) {
      toggleFavorite(favBtn.dataset.id);
      return;
    }
  });

  // Modal close
  dom.modalCloseBtn.addEventListener('click', closeRecipeModal);
  dom.recipeModalOverlay.addEventListener('click', (e) => {
    if (e.target === dom.recipeModalOverlay) {
      closeRecipeModal();
    }
  });

  // AI Chef modal
  dom.aiChefBtn.addEventListener('click', openAiChefModal);
  dom.aiModalCloseBtn.addEventListener('click', closeAiChefModal);
  dom.aiChefModalOverlay.addEventListener('click', (e) => {
    if (e.target === dom.aiChefModalOverlay) {
      closeAiChefModal();
    }
  });

  // Generate AI Recipe
  dom.generateAiRecipeBtn.addEventListener('click', async () => {
    dom.generateAiRecipeBtn.disabled = true;
    dom.generateAiRecipeBtn.innerHTML = '<span>⏳</span> Inventing recipe...';

    const expiring = state.pantryItems.filter(p => p.expiry !== 'fresh');
    const note = dom.aiChefCustomNote.value;
    const apiKey = dom.geminiApiKeyInput.value;

    try {
      const generated = await improviseRecipe(state.pantryItems, expiring, note, apiKey);
      dom.aiResultCard.style.display = 'block';
      dom.aiResultCard.innerHTML = `
        <h3 style="font-size: 18px; font-weight: 800; color: var(--dark); margin-bottom: 6px;">
          ${generated.title}
        </h3>
        <p style="font-size: 13px; color: var(--slate-600); margin-bottom: 12px;">
          ${generated.description}
        </p>

        <div class="recipe-meta-tags" style="margin-bottom: 12px;">
          <span class="meta-pill">⏱️ ${generated.time} mins</span>
          <span class="meta-pill">📊 ${generated.difficulty}</span>
          <span class="meta-pill">👥 ${generated.servings} Servings</span>
          <span class="meta-pill" style="color: var(--primary-hover); background: var(--primary-light);">
            ⚡ ${generated.nutrition?.calories || 320} kcal
          </span>
        </div>

        <h4 style="font-size: 14px; font-weight: 700; color: var(--dark); margin-bottom: 6px;">Ingredients:</h4>
        <ul style="font-size: 13px; margin-left: 20px; margin-bottom: 14px; color: var(--slate-700);">
          ${generated.ingredients.map(i => `<li><b>${i.name}:</b> ${i.amount}</li>`).join('')}
        </ul>

        <h4 style="font-size: 14px; font-weight: 700; color: var(--dark); margin-bottom: 6px;">Instructions:</h4>
        <ol style="font-size: 13px; margin-left: 20px; margin-bottom: 14px; color: var(--slate-700);">
          ${generated.instructions.map(s => `<li style="margin-bottom: 6px;">${s}</li>`).join('')}
        </ol>

        <div style="background: var(--accent-light); border: 1px solid var(--accent-border); padding: 10px 12px; border-radius: var(--radius-md); font-size: 12px; margin-bottom: 10px;">
          <b>👨‍🍳 Chef's Tip:</b> ${generated.chefTip}
        </div>

        <div style="font-size: 11px; color: var(--slate-500); font-style: italic;">
          🛡️ ${generated.safetyNotice}
        </div>
      `;
    } catch (err) {
      dom.aiResultCard.style.display = 'block';
      dom.aiResultCard.innerHTML = `<p style="color: var(--danger); font-size: 13px;">Error creating recipe: ${err.message}</p>`;
    } finally {
      dom.generateAiRecipeBtn.disabled = false;
      dom.generateAiRecipeBtn.innerHTML = '<span>🪄</span> Generate Rescue Recipe Now';
    }
  });

  // Hackathon Demo Presets
  // Demo 1: Eggs + Potatoes + Onions -> Aloo Egg Bhurji 100%, Spanish Omelette 85% (Missing: Butter)
  dom.demo1Btn.addEventListener('click', () => {
    state.pantryItems = [
      { name: 'Eggs', canonical: 'egg', icon: '🥚', expiry: 'fresh' },
      { name: 'Potatoes', canonical: 'potato', icon: '🥔', expiry: 'fresh' },
      { name: 'Onions', canonical: 'onion', icon: '🧅', expiry: '2days' }
    ];
    state.activeFilter = 'all';
    state.activeSort = 'match-desc';
    dom.recipeSortSelect.value = 'match-desc';
    updateFilterPillsUI();
    renderStaples();
    renderActivePantry();
    renderRecipes();
    showToast('Loaded Demo 1: Eggs + Potatoes + Onions! Check Aloo Egg Bhurji & Spanish Omelette');
  });

  // Demo 2: Egg + Onion + Bread -> Egg Toast 100%
  dom.demo2Btn.addEventListener('click', () => {
    state.pantryItems = [
      { name: 'Eggs', canonical: 'egg', icon: '🥚', expiry: 'fresh' },
      { name: 'Onions', canonical: 'onion', icon: '🧅', expiry: 'fresh' },
      { name: 'Bread', canonical: 'bread', icon: '🍞', expiry: 'today' }
    ];
    state.activeFilter = 'all';
    state.activeSort = 'match-desc';
    dom.recipeSortSelect.value = 'match-desc';
    updateFilterPillsUI();
    renderStaples();
    renderActivePantry();
    renderRecipes();
    showToast('Loaded Demo 2: Egg + Onion + Bread! Check Egg Toast at 100%');
  });

  // Demo 3: Rice + Garlic + Butter -> Garlic Butter Rice 100%
  dom.demo3Btn.addEventListener('click', () => {
    state.pantryItems = [
      { name: 'Rice', canonical: 'rice', icon: '🍚', expiry: 'fresh' },
      { name: 'Garlic', canonical: 'garlic', icon: '🧄', expiry: 'fresh' },
      { name: 'Butter', canonical: 'butter', icon: '🧈', expiry: 'fresh' }
    ];
    state.activeFilter = 'all';
    state.activeSort = 'match-desc';
    dom.recipeSortSelect.value = 'match-desc';
    updateFilterPillsUI();
    renderStaples();
    renderActivePantry();
    renderRecipes();
    showToast('Loaded Demo 3: Rice + Garlic + Butter!');
  });

  dom.demoClearBtn.addEventListener('click', () => {
    state.pantryItems = [];
    renderStaples();
    renderActivePantry();
    renderRecipes();
    showToast('Pantry reset');
  });
}

// Toast Feedback Helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✨</span><span>${message}</span>`;
  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// Start Application on Load
window.addEventListener('DOMContentLoaded', init);
