// Arrays
const allIngredients = []
const allAppliances = []
const allUstensils = []
const allNames = []

// Lists
const $ingredientsList = document.querySelector('.ingredients-list')
const $ingredientsListRequest = document.querySelector('.ingredients-list-request')
const $appliancesList = document.querySelector('.appliances-list')
const $appliancesListRequest = document.querySelector('.appliances-list-request')
const $ustensilsList = document.querySelector('.ustensils-list')
const $ustensilsListRequest = document.querySelector('.ustensils-list-request')

$ingredientsList.style.display = 'none'
$appliancesList.style.display = 'none'
$ustensilsList.style.display = 'none'
// $mainSearchInputRequest.style.display = 'none'

// Chevrons
const $ingredientsChevronDown = document.querySelector('.ingredients-chevron-down')
const $ingredientsChevronUp = document.querySelector('.ingredients-chevron-up')
const $appliancesChevronDown = document.querySelector('.appliances-chevron-down')
const $appliancesChevronUp = document.querySelector('.appliances-chevron-up')
const $ustensilsChevronDown = document.querySelector('.ustensils-chevron-down')
const $ustensilsChevronUp = document.querySelector('.ustensils-chevron-up')

// Placeholders
const $placeholderIngredients = document.querySelector('input.search-item-blue')
const $placeholderAppliances = document.querySelector('.search-item-green')
const $placeholderUstensils = document.querySelector('.search-item-red')

// Input
const $mainSearchInput = document.querySelector('#search')
const $mainSearchInputRequest = document.querySelector('.main-list')

const $ingredientsSearch = document.querySelector('#ingredients-search')
const $appliancesSearch = document.querySelector('#appliances-search')
const $ustensilsSearch = document.querySelector('#ustensils-search')


// Names
function retrieveAllNamesRecipes(recipes){
    for (let i = 0; i < recipes.length; i++){
        const nameRecipe = recipes[i].name
        // nameList += `<li class="name-list">${recipes[i].name}</li>`
        allNames.push(nameRecipe)
    }
}        

// --------------------------------  Filter

function filterRecipeElements(array, request) {
    return array
        .filter(elt => elt
            .toLowerCase()
            .indexOf(request.toLowerCase()) !== -1)
}    


window.addEventListener('load', () => {
    chevronDown($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients, displayIngredients(allIngredients))
    chevronUp($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients)

    chevronDown($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances, displayAppliances(allAppliances))
    chevronUp($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances)

    chevronDown($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils, displayUstensils(allUstensils))
    chevronUp($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils)
})
        
    
$ingredientsSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredIngredients = filterRecipeElements(allIngredients, search)

    displayIngredients(filteredIngredients)
    
    if (search.length >= 3) {
        chrevonDownIngredients()
    } else if (search.length < 3 && $ingredientsChevronUp.classList.contains('hidden')) {
        chrevonUpIngredients()
    }
})

