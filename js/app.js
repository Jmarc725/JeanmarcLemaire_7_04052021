// ------------------------------------------ VARIABLES ----------------------

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



// -------------------------------------------- FUNCTIONS ---------------------

// Création des recettes pour le HTML
function createRecipeCards(recipes) {
    let contentHtml = ''

    // Parcourt ton tableau de recettes (50)
    for (let i = 0; i < recipes.length; i++) {
        // ingredientsContentHtml réinitialisé à chaque tour de boucle et prend pour valeur <ul>
        let ingredientsList = '<ul class="ingredient-list col">'


        // à chaque tour de boucle, je rajoute le li avec le nom de mon ingrédient
        // Parcourt ton tableau d'ingrédients pour chaque recette
        for (let y = 0; y < recipes[i].ingredients.length; y++) {
            let ingredient = '<li class="ingredient">'

            ingredient += `${recipes[i].ingredients[y].ingredient} ` // tomate

            if (recipes[i].ingredients[y].quantity !== undefined) {
                ingredient += `${recipes[i].ingredients[y].quantity} `
            }

            if (recipes[i].ingredients[y].unit !== undefined) {
                ingredient += recipes[i].ingredients[y].unit.replace("grammes", "g")
            } 
                                    
            ingredient += '</li>' // <ul><li>tomate</li>
            ingredientsList += ingredient
        }

        // là, je ferme la balise ul
        ingredientsList += '</ul>' // <ul><li>fsf</li><li>sfsd</li>

        // là, t'injectes tes éléments de recette (nom, temps, description, ingrédients) dedans
        contentHtml += `
            <div class="recipe-card">
                <div class="recipe-img">
                    <img src="" alt"">
                </div>
                <div class="recipe-wrapper">
                    <div class="recipe-heading">
                        <h2 class="recipe-name">${recipes[i].name}</h2>
                        <p class="recipe-time"><i class="far fa-clock"></i>${recipes[i].time} min</p>
                    </div>
                    <div class="recipe-content">
                        ${ingredientsList}
                        <p class="recipe-description col">${recipes[i].description}</p>
                    </div>
                </div>
            </div>
        `
    }
    return contentHtml
}


// ----------------- Récupération et affichage des données de recettes

// Ingredients
function retrieveAllIngredientsFromRecipes(recipes) {    
    for (let i = 0; i < recipes.length; i++) {
        for (let y = 0; y < recipes[i].ingredients.length; y++) {

            const ingredientName = recipes[i].ingredients[y].ingredient
        
            // Ici je cherche les ingrédients qui ne sont pas présents dans mon tableau
            if (allIngredients.indexOf(ingredientName) === -1) {
                // Si l'ingrédient n'est pas présent, alors je le rajoute dans mon tableau
                allIngredients.push(ingredientName)
            }
        }
    }
}

function displayIngredients(ingredients) {
    let ingredient = ""
    let firstThirtyIngredients = ingredients.slice(0, 30)
    for(let i = 0; i < firstThirtyIngredients.length; i++){
        ingredient += `<li class="ingredients-list-item">${firstThirtyIngredients[i]}</li>`
    }
    document.querySelector('.ingredients-list').innerHTML = ingredient
    return ingredient
}


// Appliances
function retrieveAllAppliancesFromRecipes(recipes){
    for (let i = 0; i < recipes.length; i++){
        const applianceName = recipes[i].appliance.replace("casserolle", "casserole")

        if (allAppliances.indexOf(applianceName) === -1){
            allAppliances.push(applianceName)
        }
    }
}

function displayAppliances(appliances) {
    let appliance = ""
    
    for(let i = 0; i < appliances.length; i++){
        appliance += `<li class="appliances-list-item">${appliances[i]}</li>`
    }
    
    document.querySelector('.appliances-list').innerHTML = appliance
    
    return appliance
}


// Ustensils
function retrieveAllUstensilsFromRecipes(recipes) {    
    for (let i = 0; i < recipes.length; i++) {
        for (let y = 0; y < recipes[i].ustensils.length; y++) {

            const ustensilName = recipes[i].ustensils[y][0].toUpperCase() + recipes[i].ustensils[y].substr(1)

            // Ici je cherche les ingrédients qui ne sont pas présents dans mon tableau
            if (allUstensils.indexOf(ustensilName) === -1) {

                // Si l'ingrédient n'est pas présent, alors je le rajoute dans mon tableau
                allUstensils.push(ustensilName)
            }
        }
    }
}

function displayUstensils(ustensils) {
    let ustensil = ""
    let firstThirtyUstensils = ustensils.slice(0, 30)
    
    for(let i = 0; i < firstThirtyUstensils.length; i++){
        ustensil += `<li class="ustensils-list-item">${firstThirtyUstensils[i]}</li>`
    }
   
    document.querySelector('.ustensils-list').innerHTML = ustensil
    
    return ustensil
}

// Names
function retrieveAllNamesRecipes(recipes){
    for (let i = 0; i < recipes.length; i++){
        const nameRecipe = recipes[i].name
        // nameList += `<li class="name-list">${recipes[i].name}</li>`
        allNames.push(nameRecipe)
    }
}

// function displayNames(names){
//     let name = ""
    
//     for ( let i = 0; names.length; i++){
//         name += `<li class="main-list-item">${names[i]}</li>`
//         }
//         $mainSearchInputRequest.innerHTML = name
//         return name
//     } 
        

// --------------------------------  Filter

function filterRecipeElements(array, request){
    if(request.length < 3 || request === null) {
        return request
    } else {
        return array.filter(elt => elt.toLowerCase().indexOf(request) !== -1).join('<br> ')
        }  
    }       


// ------------------------------ Chevrons

function chevronDown(down, up, list, placeholder, variable){
    down.addEventListener('click', () => {
        down.classList.toggle('hidden')
        up.classList.toggle('hidden')
        list.style.display = 'block'
        placeholder.value = ""
        placeholder.focus()
        variable
    })
}

function chevronUp(down, up, list, placeholder){
    up.addEventListener('click', () => {
        down.classList.toggle('hidden')
        up.classList.toggle('hidden')
        list.style.display = 'none'
        placeholder.value = placeholder.getAttribute('value')
    })
}


// -------------------------------------------- API -------------------------

fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        
        const recipes = data.recipes
        retrieveAllIngredientsFromRecipes(recipes)   
        retrieveAllAppliancesFromRecipes(recipes)   
        retrieveAllUstensilsFromRecipes(recipes)  
        retrieveAllNamesRecipes(recipes)
     
        const recipeCardsHtml = createRecipeCards(recipes)
        document.querySelector('.cards-grid').innerHTML = recipeCardsHtml

        displayIngredients(allIngredients)
        displayAppliances(allAppliances)
        displayUstensils(allUstensils)
        displayNames(allNames)


    })
    
    .catch((err) => console.log("===", err))


// --------------------------------------------- AddEventListeners ---------------

// Session avec Thomas 25/05/2021


chevronDown($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients, displayIngredients(allIngredients))
chevronUp($ingredientsChevronDown, $ingredientsChevronUp, $ingredientsList, $placeholderIngredients)

chevronDown($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances, displayAppliances(allAppliances))
chevronUp($appliancesChevronDown, $appliancesChevronUp, $appliancesList, $placeholderAppliances)

chevronDown($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils, displayUstensils(allUstensils))
chevronUp($ustensilsChevronDown, $ustensilsChevronUp, $ustensilsList, $placeholderUstensils)

        
    
$ingredientsSearch.addEventListener('input', (e) => {
    // console.log(filterRecipeElements(allIngredients, e.target.value))
    $ingredientsListRequest.innerHTML = filterRecipeElements(allIngredients, e.target.value)
    $ingredientsListRequest.style.display = "block"
    })


$appliancesSearch.addEventListener('input', (e) => {
    $appliancesListRequest.innerHTML = filterRecipeElements(allAppliances, e.target.value)
    $appliancesListRequest.style.display = "block"
    // console.log(filterRecipeElements(allAppliances, e.target.value))
    })    


$ustensilsSearch.addEventListener('input', (e) => {
    $ustensilsListRequest.innerHTML = filterRecipeElements(allUstensils, e.target.value)
    $ustensilsListRequest.style.display = "block"
    // console.log(filterRecipeElements(allUstensils, e.target.value))
})

$mainSearchInput.addEventListener('input', (e) => {
    $mainSearchInputRequest.innerHTML = filterRecipeElements(allNames, e.target.value)
    $mainSearchInputRequest.style.display = "block"
})







// Ingredients
// $ingredientsChevronDown.addEventListener('click', () => {
//     $ingredientsChevronDown.classList.toggle('hidden')
//     $ingredientsChevronUp.classList.toggle('hidden')
//     $ingredientsList.style.display = 'block'
//     $placeholderIngredients.value =""
//     $placeholderIngredients.focus()

//     displayIngredients(allIngredients)
// })

// $ingredientsChevronUp.addEventListener('click', () => {
//     $ingredientsChevronDown.classList.toggle('hidden')
//     $ingredientsChevronUp.classList.toggle('hidden')
//     $ingredientsList.style.display ='none'
//     $placeholderIngredients.value ="Ingrédients"

// })

// // Appliances
// $appliancesChevronDown.addEventListener('click', () => {
//     $appliancesChevronDown.classList.toggle('hidden')
//     $appliancesChevronUp.classList.toggle('hidden')
//     $appliancesList.style.display = 'block'
//     $placeholderAppliances.value =""
//     $placeholderAppliances.focus()

    // displayAppliances(allAppliances)
// })

// $appliancesChevronUp.addEventListener('click', () => {
//     $appliancesChevronDown.classList.toggle('hidden')
//     $appliancesChevronUp.classList.toggle('hidden')
//     $appliancesList.style.display ='none'
//     $placeholderAppliances.value ="Appareils"

// })

// Utencils
// $ustensilsChevronDown.addEventListener('click', () => {
//     $ustensilsChevronDown.classList.toggle('hidden')
//     $ustensilsChevronUp.classList.toggle('hidden')
//     $ustensilsList.style.display = 'block'
//     $placeholderUstensils.value =""
//     $placeholderUstensils.focus()

//     displayUtencils(allUstensils)
// })

// $ustensilsChevronUp.addEventListener('click', () => {
//     $ustensilsChevronDown.classList.toggle('hidden')
//     $ustensilsChevronUp.classList.toggle('hidden')
//     $ustensilsList.style.display ='none'
//     $placeholderUstensils.value ="Ustenciles"

// })

// console.log($placeholderIngredients.getAttribute('value'))


// function filterRecipeElements(array, request){
//     return array.filter(function(element){
//         return element.toLowerCase().indexOf(request.toLowerCase()) !== -1
//     })
// }
