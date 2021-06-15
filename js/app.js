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

// Placeholders
const $placeholderIngredients = document.querySelector('input.search-item-blue')
const $placeholderAppliances = document.querySelector('.search-item-green')
const $placeholderUstensils = document.querySelector('.search-item-red')

// Input
const $recipeNameSearch = document.querySelector('#search')
const $ingredientsSearch = document.querySelector('#ingredients-search')
const $appliancesSearch = document.querySelector('#appliances-search')
const $ustensilsSearch = document.querySelector('#ustensils-search')



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
    
    if (search.length >= 3 && filteredIngredients.length) {
        $ingredientsList.style.display = "block"
        $ingredientsChevronDown.classList.add('hidden')
        $ingredientsChevronUp.classList.remove('hidden')

        $ingredientsChevronDown.addEventListener('click', () => {
            displayIngredients(allIngredients)
        })
    } else {
        $ingredientsList.style.display = "none"
        $ingredientsChevronDown.classList.remove('hidden')
        $ingredientsChevronUp.classList.add('hidden')
    }

    // else if (search.length < 3 && $ingredientsChevronUp.classList.contains('hidden')) {
    //     // chrevonUpIngredients()
    //     $ingredientsList.style.display = 'none'
    // }

})

$ingredientsList.addEventListener('click', e => {
    console.log("====")
    console.log(e.target.textContent)
    console.log("====")
})

 
$appliancesSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredAppliances = filterRecipeElements(allAppliances, search)

    displayAppliances(filteredAppliances)
    
    
    if (search.length >= 3) {
        $appliancesList.style.display = "block"
        $appliancesChevronDown.classList.add('hidden')
        $appliancesChevronUp.classList.remove('hidden')

        $appliancesChevronDown.addEventListener('click', () => {
            displayAppliances(allAppliances)
        })
    } else {
        $appliancesList.style.display = "none"
        $appliancesChevronDown.classList.remove('hidden')
        $appliancesChevronUp.classList.add('hidden')
    }
})

 
$ustensilsSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredUstensils = filterRecipeElements(allUstensils, search)

    displayUstensils(filteredUstensils)
    
    
    if (search.length >= 3) {
        $ustensilsList.style.display = "block"
        $ustensilsChevronDown.classList.add('hidden')
        $ustensilsChevronUp.classList.remove('hidden')

        $ustensilsChevronDown.addEventListener('click', () => {
            displayUstensils(allUstensils)
        })
    } else {
        $ustensilsList.style.display = "none"
        $ustensilsChevronDown.classList.remove('hidden')
        $ustensilsChevronUp.classList.add('hidden')
    }
})

$recipeNameSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredName = filterRecipeElements(allNames, search)

    displayAllNames(filteredName)
    
    if (search.length >= 3) {
        $namesList.style.display ='block'
    } else {
        $namesList.style.display ='none'
    }
})
