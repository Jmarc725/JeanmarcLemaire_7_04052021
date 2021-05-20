
function createRecipeCards(recipes) {
    let contentHtml = ''

    // Parcourt ton tableau de recettes (50)
    for (let i = 0; i < recipes.length; i++) {
        // ingredientsContentHtml réinitialisé à chaque tour de boucle et prend pour valeur <ul>
        let ingredientsList = '<ul class="ingredient-list">'


        // à chaque tour de boucle, je rajoute le li avec le nom de mon ingrédient
        // Parcourt ton tableau d'ingrédients pour chaque recette
        for (let y = 0; y < recipes[i].ingredients.length; y++) {
            let ingredient = '<li class="ingredient">'

            ingredient += `${recipes[i].ingredients[y].ingredient} ` // tomate

            if (recipes[i].ingredients[y].quantity !== undefined) {
                ingredient += `${recipes[i].ingredients[y].quantity} `
            }

            if (recipes[i].ingredients[y].unit !== undefined) {
                ingredient += recipes[i].ingredients[y].unit
            }
                                    
            ingredient += '</li>' // <ul><li>tomate</li>

            ingredientsList += ingredient
        }

        // là, je ferme la balise ul
        ingredientsList += '</ul>' // <ul><li>fsf</li><li>sfsd</li>

        // là, t'injectes tes éléments de recette (nom, temps, description, ingrédients) dedans
        contentHtml += `
            <div class="recipe-card">
                <h2 class="recipe-name">
                ${recipes[i].name}<span class="recipe-time"><i class="far fa-clock"></i>${recipes[i].time} min</span>
                </h2>
                ${ingredientsList}
                <p class="recipe-description">${recipes[i].description}</p>
            </div>
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
