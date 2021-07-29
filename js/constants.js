// Arrays
const allIngredients = []
const allAppliances = []
const allUstensils = []
const allNames = []
const displaySelectedRecipes = []
const filteredIngredientsRecipes = []
let allRecipes = []


// Recipes
const $cardsGrid = document.querySelector('.cards-grid')
const $recipeCard = document.getElementsByClassName('recipe-card')

// Listes déroulantes
const $ingredientsList = document.querySelector('.ingredients-list')
const $appliancesList = document.querySelector('.appliances-list')
const $ustensilsList = document.querySelector('.ustensils-list')
const $mainList = document.querySelector('.main-list')

// Inputs Search
const $mainSearch = document.querySelector('#main-search')
const $ingredientsSearch = document.querySelector('#ingredients-search')
const $appliancesSearch = document.querySelector('#appliances-search')
const $ustensilsSearch = document.querySelector('#ustensils-search')

// Chevrons
const $ingredientsChevronDown = document.querySelector('.ingredients-chevron-down')
const $ingredientsChevronUp = document.querySelector('.ingredients-chevron-up')
const $appliancesChevronDown = document.querySelector('.appliances-chevron-down')
const $appliancesChevronUp = document.querySelector('.appliances-chevron-up')
const $ustensilsChevronDown = document.querySelector('.ustensils-chevron-down')
const $ustensilsChevronUp = document.querySelector('.ustensils-chevron-up')

// Placeholders
const $placeholderIngredients = document.querySelector('.search-item-blue')
const $placeholderAppliances = document.querySelector('.search-item-green')
const $placeholderUstensils = document.querySelector('.search-item-red')

// Tags Elements clicked
const $selectedIngredients = document.querySelector('.wrapper-selected-ingredients')
const $selectedAppliances = document.querySelector('.wrapper-selected-appliances')
const $selectedUstensils = document.querySelector('.wrapper-selected-ustensils')