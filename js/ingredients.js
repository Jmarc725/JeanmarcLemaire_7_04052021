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

   
$ingredientsSearch.addEventListener('input', (e) => {
    const search = e.target.value
    

    const filteredIngredients = filterRecipeElements(allIngredients, search)

    displayIngredients(filteredIngredients)
    
    if (search.length >= 3 && filteredIngredients.length) {
        $ingredientsList.style.display = "block"
        $ingredientsList.classList.add('ingredients-list-request')
        $ingredientsChevronDown.classList.add('hidden')
        $ingredientsChevronUp.classList.remove('hidden')

        $ingredientsChevronDown.addEventListener('click', () => {
            displayIngredients(allIngredients)
            $ingredientsList.classList.remove('ingredients-list-request')
        })

    } else {
        $ingredientsList.style.display = "none"
        $ingredientsChevronDown.classList.remove('hidden')
        $ingredientsChevronUp.classList.add('hidden')
    }
})


$ingredientsList.addEventListener('click', e => {


    if (e.target.className !== 'ingredients-list') {
    $wrapperIngredients.innerHTML += `
        <div class="selected-ingredient">
            ${e.target.textContent}
            <i class="far fa-times-circle"></i>
        </div>
    `
    
    // Retire l'élément/la valeur du tableau
    const ingredient = e.target.textContent
    // Splice -> retire un élément d'un tableau
    allIngredients.splice(
        // Où on commence
        allIngredients.indexOf(ingredient),
        // Combien d'éléments on retire
        1
    )

    // On appelle la fonction pour filtrer les recettes affichées
    filterRecipes(ingredient)

    // Retire l'élément du DOM
    const clickedElement = e.target
    const parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)
    }

})


$wrapperIngredients.addEventListener('click', e => {
    // console.log(e.target.textContent.trim())

    // console.log(e.target)

    // Si c'est l'élément far qui a été cliqué
    if (e.target.classList.contains('far')) {
        // Alors que l'élémént "siblings" pour récupérer le nom de l'ingrédient
    // Sinon si c'est l'élément selected-ingredient qui a été cliqué
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.remove()
        console.log(parentClickedElement)

        allIngredients.unshift(parentClickedElement.textContent.trim())
        console.log(allIngredients)


        
    } else if (e.target.classList.contains('selected-ingredient')) {
        // Retirer lélément du DOM
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.removeChild(clickedElement)

        // Ajouter dans le tabeau allIngredients la valeur
        allIngredients.unshift(e.target.textContent.trim())


    }

    for (let i = 0; i < $recipeCard.length; i++){
        const eachRecipe = $recipeCard[i]
        eachRecipe.remove()
        }  
    
        const RecipesCards = createRecipeCards(allRecipes)
        $cardsGrid.innerHTML = RecipesCards
        
})


