
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
    displayAllNames(allNames)
})
.catch((err) => console.log("===", err))