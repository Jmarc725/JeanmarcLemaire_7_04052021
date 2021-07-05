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


function filterRecipes(ingredient) {
    // 1. On connait l'ingrédient qu'on veut filter
        // Done
    // 2. On veut avoir une variable qui contient toutes les recettes ( => allRecipes )
        // Done
    // 3. On veut filtrer le tableau allRecipes par rapport à l'ingrédient sélectionné


    let filteredRecipes = []

    for (let i = 0; i < allRecipes.length; i++){


        for (let y = 0; y < allRecipes[i].ingredients; y++){

            const ingredientName = allRecipes[i].ingredients[y].ingredient
            const elementFound = allRecipes[i].filter(el => el.ingredientName.indexOf(ingredient) !== -1)

            
            if(elementFound){
                filteredRecipes.push(elementFound)
            }
        }
    }
    // Première étape : tu boucles sur ton tableau allRecipes
    // Deuxième étape : tu boucles sur le tableau ingredients contenu dans chaque objet recipe
    // Troisième étape : si ton paramètre ingrédient est présent dans ta deuxième étape
        // Alors : tu veux ajouter cette recette au tableau filteredRecipes
        // Sinon : tu fais rien et tu continues de boucler
    // Quatrième étape : tu fais un console.log(filteredRecipes)
    // Cinquième étape : vider le noeud cards-grid de toutes les recettes
    // Sixième étape : appeler la fonction createRecipeCards en lui passant en paramètre filteredRecipes


    // console.log("===")
    // console.log(ingredient)
    // console.log("===")
    // console.log("===")
    // console.log(allRecipes)
    // console.log("===")

}

