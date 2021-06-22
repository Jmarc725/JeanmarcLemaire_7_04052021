// ------------------------------------- Variables

// Arrays
const allIngredients = []
const allAppliances = []
const allUstensils = []
const allNames = []

// Lists
const $ingredientsList = document.querySelector('.ingredients-list')
const $appliancesList = document.querySelector('.appliances-list')
const $ustensilsList = document.querySelector('.ustensils-list')
const $namesList = document.querySelector('.recipes-names-list')

$ingredientsList.style.display = 'none'
$appliancesList.style.display = 'none'
$ustensilsList.style.display = 'none'
$namesList.style.display = 'none'

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

// Navigation
const $ingredientsNavigation = document.querySelector('.nav-ingredients')
const $wrapperIngredients = document.querySelector('.wrapper-selected-ingredients')
const $selectedIngredient = document.querySelector('.selected-ingredient')

// --------------------------------  Filter

function filterRecipeElements(array, request) {
    return array
        .filter(elt => elt
            .toLowerCase()
            .indexOf(request.toLowerCase()) !== -1)
}    


// ----------------------------------- addEventListener

window.addEventListener('load', () => {
    chevronDown($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients, displayIngredients(allIngredients))
    chevronUp($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients)

    chevronDown($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances, displayAppliances(allAppliances))
    chevronUp($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances)

    chevronDown($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils, displayUstensils(allUstensils))
    chevronUp($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils)
})
        


function displayIngredients(ingredients) {
    let ingredient = ""
    let firstThirtyIngredients = ingredients.slice(0, 30)
    for(let i = 0; i < firstThirtyIngredients.length; i++){
       ingredient += `<li class="ingredients-list-item">${firstThirtyIngredients[i]}</li>`
    }
    document.querySelector('.ingredients-list').innerHTML = ingredient
    return ingredient
}

   
$ingredientsSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredIngredients = filterRecipeElements(allIngredients, search)

    displayIngredients(filteredIngredients)
    
    if (search.length >= 3 && filteredIngredients.length) {
        $ingredientsList.style.display = "block"
        $ingredientsList.classList.add('ingredients-list-request')
        $ingredientsChevronDown.classList.add('hidden')
        $ingredientsChevronUp.classList.remove('hidden')

        $ingredientsChevronDown.addEventListener('click', () => {
            displayIngredients(allIngredients)
            $ingredientsList.classList.remove('ingredients-list-request')
        })

    } else {
        $ingredientsList.style.display = "none"
        $ingredientsChevronDown.classList.remove('hidden')
        $ingredientsChevronUp.classList.add('hidden')
    }
})

$ingredientsList.addEventListener('click', e => {

$wrapperIngredients.innerHTML += 
    `<div class="selected-ingredient">
        ${e.target.textContent}
        <i class="far fa-times-circle"></i>
    </div>`


    let clickedElement = e.target

    let parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)

})
