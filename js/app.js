$ingredientsList.style.display = 'none'
$appliancesList.style.display = 'none'
$ustensilsList.style.display = 'none'
$namesList.style.display = 'none'



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


function filterRecipes() {
//     // 1. On connait l'ingrédient qu'on veut filter 1.a ou le tableau d'ingrédients
//     // 2. On veut avoir une variable qui contient toutes les recettes ( => allRecipes )
//     // 3. On veut filtrer le tableau allRecipes par rapport à l'ingrédient sélectionné ou le tableau


    for (let i = 0; i < allRecipes.length; i++){
        const recipe = allRecipes[i]

        for (let j = 0; j < recipe.ingredients.length; j++) {
             const recipeIngredient = recipe.ingredients[j].ingredient

            if (filteredIngredientsRecipes.indexOf(recipeIngredient) !== -1) {
                displaySelectedRecipes.push(recipe) 
            }
        }
    }

console.log(displaySelectedRecipes)

        $cardsGrid.innerHTML = createRecipeCards(displaySelectedRecipes)

}



        // for (let i = 0; i < $recipeCard.length; i++){
        //     const eachRecipe = $recipeCard[i]
        //     eachRecipe.remove()
        //     }  
        




// console.log("++++")
//     console.log(filteredRecipes)
//     console.log("++++")
    // Première étape : tu boucles sur ton tableau allRecipes
    // Deuxième étape : tu boucles sur le tableau ingredients contenu dans chaque objet recipe
    // Troisième étape : si ton paramètre ingrédient est présent dans ta deuxième étape
        // Alors : tu veux ajouter cette recette au tableau filteredRecipes
        // Sinon : tu fais rien et tu continues de boucler
    // Quatrième étape : tu fais un console.log(filteredRecipes)
    // Cinquième étape : vider le noeud cards-grid de toutes les recettes
    // Sixième étape : appeler la fonction createRecipeCards en lui passant en paramètre filteredRecipes



