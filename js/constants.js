// Arrays
const allIngredients = []
const allAppliances = []
const allUstensils = []
const allNames = []

let allRecipes = []


// Recettes intégrales
const $cardsGrid = document.querySelector('.cards-grid')
const $recipeCard = document.getElementsByClassName('recipe-card')

// Lists
const $ingredientsList = document.querySelector('.ingredients-list')
const $appliancesList = document.querySelector('.appliances-list')
const $ustensilsList = document.querySelector('.ustensils-list')
const $namesList = document.querySelector('.recipes-names-list')

// Chevrons
const $ingredientsChevronDown = document.querySelector('.ingredients-chevron-down')
const $ingredientsChevronUp = document.querySelector('.ingredients-chevron-up')
const $appliancesChevronDown = document.querySelector('.appliances-chevron-down')
const $appliancesChevronUp = document.querySelector('.appliances-chevron-up')
const $ustensilsChevronDown = document.querySelector('.ustensils-chevron-down')
const $ustensilsChevronUp = document.querySelector('.ustensils-chevron-up')

// Icone fermeture
const $closeSuggestion = document.querySelector('.fa-times-circle')

// Placeholders
const $placeholderIngredients = document.querySelector('.search-item-blue')
const $placeholderAppliances = document.querySelector('.search-item-green')
const $placeholderUstensils = document.querySelector('.search-item-red')

// Input Search
const $recipeNameSearch = document.querySelector('#search')
const $ingredientsSearch = document.querySelector('#ingredients-search')
const $appliancesSearch = document.querySelector('#appliances-search')
const $ustensilsSearch = document.querySelector('#ustensils-search')

// Navigation ingredients
const $ingredientsNavigation = document.querySelector('.nav-ingredients')
const $wrapperIngredients = document.querySelector('.wrapper-selected-ingredients')
const $selectedIngredient = document.querySelector('.selected-ingredient')

// Navigation appliances
const $wrapperAppliances = document.querySelector('.wrapper-selected-appliances')

// Navigation ustensils
const $wrapperUstensils = document.querySelector('.wrapper-selected-ustensils')