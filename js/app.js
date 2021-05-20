
function createRecipeCards(recipes) {
    let contentHtml = ''

    // Parcourt ton tableau de recettes (50)
    for (let i = 0; i < recipes.length; i++) {
        // ingredientsContentHtml réinitialisé à chaque tour de boucle et prend pour valeur <ul>
        let ingredientsContentHtml = '<ul>'

        // console.log(recipes[i].time)

        // à chaque tour de boucle, je rajoute le li avec le nom de mon ingrédient
        // Parcourt ton tableau d'ingrédients pour chaque recette
        for (let y = 0; y < recipes[i].ingredients.length; y++) {
            ingredientsContentHtml += `<li>
            ${recipes[i].ingredients[y].ingredient} 
            ${recipes[i].ingredients[y].quantity} 
            ${recipes[i].ingredients[y].unit}
            </li>`
        }

        // là, je ferme la balise ul
        ingredientsContentHtml += '</ul>'

        // là, t'injectes tes éléments de recette (nom, temps, description, ingrédients) dedans
        contentHtml += `
            <div class="recipe-card">
                <h2 class="recipe-name">
                ${recipes[i].name}
                <span class="recipe-time">
                <i class="far fa-clock"></i>
                ${recipes[i].time} min</span>
                </h2>
                ${ingredientsContentHtml}
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
      
    
// for(let i = 0; i < recipes.length; i++){
//     for(j = 0; j < recipes[i].ingredients.length; j++){
//         let checkProperty = recipes[i].ingredients[j].hasOwnProperty('unit')
//         let addMissingProperty = Object.assign(recipes[i].ingredients[j], {unit : ""})
//             console.log(checkProperty)

        // if(!checkProperty){
            // console.log(checkProperty)
//             console.log(addMissingProperty)
        // }
    // }
// }
    
        console.log(recipes[0].ingredients[4].hasOwnProperty('unit'))
        console.log(recipes[0].ingredients[4].unit= "40")
        
        // let addMissingProperty = Object.assign(recipes[0].ingredients[4], {unit : ""})

        // if(!checkProperty){
            // console.log(checkProperty)
            // console.log(addMissingProperty)
        // }
         
    

        document.querySelector('main').innerHTML = recipeCardsHtml
    })
    
    .catch((err) => console.log("===", err))
