// ------------------------------------------ Variables ----------------------

// Arrays
const allIngredients = []
const allAppliances = []
const allUstensils = []

// Lists
const $ingredientsList = document.querySelector('.ingredients-list')
const $appliancesList = document.querySelector('.appliances-list')
const $ustensilsList = document.querySelector('.ustensils-list')

$ingredientsList.style.display = 'none'
$appliancesList.style.display = 'none'
$ustensilsList.style.display = 'none'

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


// -------------------------------------------- Functions ---------------------

// Génération de recettes
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

// -------------------------------

// Ingredients

// function retrieveAllIngredientsFromRecipes(recipes) {    
//     for (let i = 0; i < recipes.length; i++) {
//         for (let y = 0; y < recipes[i].ingredients.length; y++) {

//             const ingredientName = recipes[i].ingredients[y].ingredient

//             // Ici je cherche les ingrédients qui ne sont pas présents dans mon tableau
//             if (allIngredients.indexOf(ingredientName) === -1) {
//                 // Si l'ingrédient n'est pas présent, alors je le rajoute dans mon tableau
//                 allIngredients.push(ingredientName)
//             }
//         }
//     }
// }


function retrieveAllIngredientsFromRecipes(recipes){
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            const eachIngredient = ingredient.ingredient

                if(allIngredients.indexOf(eachIngredient) === -1){
                    allIngredients.push(eachIngredient)
                }
        })
    })
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

// ------------------------------------------

// Appliances

// function retrieveAllAppliancesFromRecipes(recipes){
//     for (let i = 0; i < recipes.length; i++){
//         const applianceName = recipes[i].appliance

//         if (allAppliances.indexOf(applianceName) === -1){
//             allAppliances.push(applianceName)
//         }
//     }
// }

function retrieveAllAppliancesFromRecipes(recipes){
    recipes.forEach(recipe => {
        const eachAppliance = recipe.appliance

        if (allAppliances.indexOf(eachAppliance) === -1){
            allAppliances.push(eachAppliance)
        }
    })
}

function displayAppliances(appliances) {
    let appliance = ""
    
    for (let i = 0; i < appliances.length; i++){
        appliance += `<li class="appliances-list-item">${appliances[i]}</li>`
    }
    
    document.querySelector('.appliances-list').innerHTML = appliance
    
    return appliance
}

//----------------------------

// Utencils

// function retrieveAllUstensilsFromRecipes(recipes) {    
//     for (let i = 0; i < recipes.length; i++) {
//         for (let y = 0; y < recipes[i].ustensils.length; y++) {

//             const ustensilName = recipes[i].ustensils[y]

//             // Ici je cherche les ingrédients qui ne sont pas présents dans mon tableau
//             if (allUstensils.indexOf(ustensilName) === -1) {
//                 // Si l'ingrédient n'est pas présent, alors je le rajoute dans mon tableau
//                 allUstensils.push(ustensilName)
//             }
//         }
//     }
// }


function retrieveAllUstensilsFromRecipes(recipes){
    recipes.forEach(recipe => {
        const ustensils = recipe.ustensils
        ustensils.forEach(ustensil => {
            if (allUstensils.indexOf(ustensil) === -1){
                allUstensils.push(ustensil)
            }
        })
    })
}
  
function displayUstensils(ustensils) {
    let ustensil = ""
    let firstThirtyUstensils = ustensils.slice(0, 30)
    
    for (let i = 0; i < firstThirtyUstensils.length; i++){
        ustensil += `<li class="ustensils-list-item">${firstThirtyUstensils[i]}</li>`
    }
   
    document.querySelector('.ustensils-list').innerHTML = ustensil
    
    return ustensil
}



// -------------------------------------------- API -------------------------

const retrieveRecipesData = () => fetch("assets/recipes.json")
    .then((res) => res.json())
    .catch((err) => console.log("===", err))


// --------------------------------------------- AddEventListeners ---------------

// Session avec Thomas 25/05/2021


// function chevronDown(down, up, list, placeholder, variable){
//     down.addEventListener('click', () => {
//         down.classList.toggle('hidden')
//         up.classList.toggle('hidden')
//         list.style.display = 'block'
//         placeholder.value = ""
//         placeholder.focus()
//         variable
//     })
// }


const chevronsUp = [
    {
        type: "ingredients",
        downNode: $ingredientsChevronDown,
        upNode: $ingredientsChevronUp,
        listNode: $ingredientsList
    },
    {
        type: "ustensils",
        downNode: $ustensilsChevronDown,
        upNode: $ustensilsChevronUp,
        listNode: $ustensilsList
    },
    {
        type: "appliances",
        downNode: $appliancesChevronDown,
        upNode: $appliancesChevronUp,
        listNode: $appliancesList
    },
]


function handleChevronDown(type) {
    const matchedChevron = chevronsUp.filter(chevron => chevron.type === type)[0]

    matchedChevron['downNode'].classList.toggle('hidden')
    matchedChevron['upNode'].classList.toggle('hidden')
    matchedChevron['listNode'].style.display = 'block'

    const unmatchedChevronUp = chevronsUp.filter(chevron => chevron.type !== type)
    unmatchedChevronUp.forEach(chevron => {
        chevron['listNode'].style.display = 'none'
        if(chevron['downNode'].classList.contains('hidden')){
            chevron['upNode'].classList.toggle('hidden')
            chevron['downNode'].classList.toggle('hidden')
        }

    })
}

function handleChevronUp(type) {
    const matchedChevron = chevronsUp.filter(chevron => chevron.type === type)[0]

    matchedChevron['downNode'].classList.toggle('hidden')
    matchedChevron['upNode'].classList.toggle('hidden')
    matchedChevron['listNode'].style.display = 'none'
}


$ingredientsChevronDown.addEventListener('click', () => {
    handleChevronDown("ingredients")
})

$ingredientsChevronUp.addEventListener('click', () => {
    handleChevronUp("ingredients")
})


$ustensilsChevronDown.addEventListener('click', () => {
    handleChevronDown('ustensils')
})

$ustensilsChevronUp.addEventListener('click', () => {
    handleChevronUp('ustensils')
})


$appliancesChevronDown.addEventListener('click', () => {
    handleChevronDown('appliances')
})

$appliancesChevronUp.addEventListener('click', () => {
    handleChevronUp('appliances')
})

// ----------------------------------------- Recherche

function filterRecipeElements(array, search){
    return array.filter(function(element){
        return element.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
}


const main = async () => {
    const data = await retrieveRecipesData()

    const recipes = data.recipes
     
    const recipeCardsHtml = createRecipeCards(recipes)
    document.querySelector('.cards-grid').innerHTML = recipeCardsHtml

    retrieveAllIngredientsFromRecipes(recipes)   
    displayIngredients(allIngredients)

    retrieveAllAppliancesFromRecipes(recipes)   
    displayAppliances(allAppliances)

    retrieveAllUstensilsFromRecipes(recipes)
    displayUstensils(allUstensils)

    console.log(filterRecipeElements(allIngredients, 'ai' ))

}
main()

