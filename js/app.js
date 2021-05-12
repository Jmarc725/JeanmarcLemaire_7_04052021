// const $recipesName = document.querySelector('.recipes-name')
// const $recipesTime = document.querySelector('.recipes-time')
// const $recipesIngredients = document.querySelector('.recipes-ingredients')
// const $recipesDescription = document.querySelector('.recipes-description')

// let $eachRecipe = document.createElement('div')
// let $allRecipes = document.querySelector('.cards-grid')
// $allRecipes.appendChild.$eachRecipe

// let recipe = document.querySelector('.wrapper-recipe')


function createRecipeCards(recipes) {
    let contentHtml = ''

    // Parcourt ton tableau de recettes (50)
    for (let i = 0; i < recipes.length; i++) {
        // ingredientsContentHtml réinitialisé à chaque tour de boucle et prend pour valeur <ul>
        let ingredientsContentHtml = '<ul>'

        console.log(recipes[i].time)

        // à chaque tour de boucle, je rajoute le li avec le nom de mon ingrédient
        // Parcourt ton tableau d'ingrédients pour chaque recette
        for (let y = 0; y < recipes[i].ingredients.length; y++) {
            ingredientsContentHtml += `<li>${recipes[i].ingredients[y].ingredient}</li>`
        }

        // là, je ferme la balise ul
        ingredientsContentHtml += '</ul>'

        // là, t'injectes tes éléments de recette (nom, temps, description, ingrédients) dedans
        contentHtml += `
            <h2 class="recipe-name">
                ${recipes[i].name}
                <span class="recipe-time">${recipes[i].time}</span>
            </h2>
            ${ingredientsContentHtml}
        `
    }
    
    return contentHtml
}

fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes
        
        const recipeCardsHtml = createRecipeCards(recipes)

        document.querySelector('main').innerHTML = recipeCardsHtml
    })
    
    .catch((err) => console.log("===", err))
