const allIngredients = []
let ingredient;
let firstTenIngredients;

function displayIngredients(ingredients) {
    // console.log("===")
    // console.log()
    // console.log("===")
    ingredient = ""
    firstTenIngredients = ingredients.slice(0, 30)
    for(let i = 0; i < firstTenIngredients.length; i++){
        ingredient += `<li class="ingredients-list-item">${firstTenIngredients[i]}</li>`
    }
    document.querySelector('.ingredients-list').innerHTML = ingredient
    return firstTenIngredients
}

function maskIngredients(ingredients){
   ingredients =  document.querySelector('.ingredients-list').innerHTML = ""
    return ingredients
}

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


fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        
        const recipes = data.recipes

        retrieveAllIngredientsFromRecipes(recipes)        

        const recipeCardsHtml = createRecipeCards(recipes)

        document.querySelector('.cards-grid').innerHTML = recipeCardsHtml
    })
    
    .catch((err) => console.log("===", err))


// Session avec Thomas 25/05/2021
const $ingredientsChevronDown = document.querySelector('.ingredients-chevron-down')
const $ingredientsChevronUp = document.querySelector('.ingredients-chevron-up')

$ingredientsChevronDown.addEventListener('click', () => {
    $ingredientsChevronDown.classList.toggle('hidden')
    $ingredientsChevronUp.classList.toggle('hidden')

    displayIngredients(allIngredients)
})

$ingredientsChevronUp.addEventListener('click', () => {
    $ingredientsChevronDown.classList.toggle('hidden')
    $ingredientsChevronUp.classList.toggle('hidden')

    maskIngredients(allIngredients)

})
