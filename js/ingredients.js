// ------------------------------ Functions

/*  
    Parcourt le tableau d'ingrédients des recettes 
    Filtre et stock les ingrédients dans le tableau allIngrédients
    On obtient une array de 130 ingrédients
*/

function retrieveAllIngredientsFromRecipes(recipes) {    
    for (let i = 0; i < recipes.length; i++) {
        for (let y = 0; y < recipes[i].ingredients.length; y++) {

            const ingredientName = recipes[i].ingredients[y].ingredient
        
            // Ici je cherche les ingrédients qui ne sont pas présents dans le tableau allIngredients
            if (allIngredients.indexOf(ingredientName) === -1) {
                // Si l'ingrédient n'est pas présent, alors je le rajoute dans le tableau allIngredients
                allIngredients.push(ingredientName)
            }
        }
    }
    return allIngredients
}

 
// Affiche les 30 premiers ingrédients dans ma liste déroulante (insertion HTML 30 <li>)
function displayIngredients(ingredients) {

    let ingredient = ""
    let firstThirtyIngredients = ingredients.slice(0, 30)

    for(let i = 0; i < firstThirtyIngredients.length; i++){
       ingredient += `<li class="ingredients-list-item">${firstThirtyIngredients[i]}</li>`
    }

    $ingredientsList.innerHTML = ingredient
   
    return ingredient
}


// -------------------------------------------- Event listeners


// J'écoute un évènement à chaque frappe sur le clavier
$ingredientsSearch.addEventListener('input', (e) => {
    const search = e.target.value   

    // J'active la fonction qui filtre les ingrédients en fonction de la saisie
    const filteredIngredients = filterRecipeElements(allIngredients, search)
    displayIngredients(filteredIngredients)
    
    // Les ingrédients apparaissent et le chevron monte quand un minimum de 3 caractères est saisi
    if (search.length > 2 && filteredIngredients.length && $ingredientsChevronUp.classList.contains('hidden')) {
        $ingredientsList.style.display = "block"

        // Ma liste déroulante passe sur une colonne
        $ingredientsList.classList.add('ingredients-list-request')
        $ingredientsChevronDown.classList.toggle('hidden')
        $ingredientsChevronUp.classList.toggle('hidden')
        } 

        // Les ingrédients disparaissent et le chevron redescend quand on a moins de 3 caractères
        else if (search.length < 3 && $ingredientsChevronDown.classList.contains('hidden')){
            $ingredientsList.style.display = "none"
            $ingredientsChevronDown.classList.toggle('hidden')
            $ingredientsChevronUp.classList.toggle('hidden')
            }
        })

// -------------------------------

// J'écoute un évènement au click sur le chevron down
$ingredientsChevronDown.addEventListener('click', () => {

    // Je réaffiche mes 30 premiers ingrédients
    displayIngredients(allIngredients)

    // Ma liste déroulante repasse sur 3 colonnes
    $ingredientsList.classList.remove('ingredients-list-request')
    })

// --------------------------------

// J'écoute un évènement au click d'un des ingrédients de ma liste déroulante
$ingredientsList.addEventListener('click', e => {
    const ingredient = e.target.textContent

    // Le click ne s'active que sur la classe ingredients-list-item
    if (e.target.classList.contains('ingredients-list-item')){

        // 
        $selectedIngredients.innerHTML += `
            <div class="selected-ingredient">
                ${ingredient}
                <i class="far fa-times-circle"></i>
            </div>
        `

    // Splice retire un élément d'un tableau
    allIngredients.splice(allIngredients.indexOf(ingredient), 1)

    // Push ajoute un élément à mon tableau
    filteredIngredientsRecipes.push(ingredient)

    // On appelle la fonction pour filtrer les recettes affichées
    filterRecipes()

    // Retire l'élément du DOM
    const clickedElement = e.target
    const parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)
    }
})

// ------------------------------

$selectedIngredients.addEventListener('click', e => {
    
    // console.log(e.target.textContent.trim())
    const ingredient = e.target.textContent
    
    // Si c'est l'élément far qui a été cliqué
    if (e.target.classList.contains('far')) {
        // Alors que l'élémént "siblings" pour récupérer le nom de l'ingrédient
        // Sinon si c'est l'élément selected-ingredient qui a été cliqué
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.remove()

        allIngredients.push(parentClickedElement.textContent.trim())

    } else if (e.target.classList.contains('selected-ingredient')) {
        // Retirer lélément du DOM
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.removeChild(clickedElement)

        // Ajouter dans le tabeau allIngredients la valeur
        allIngredients.push(e.target.textContent.trim())
    }

    filteredIngredientsRecipes.splice(filteredIngredientsRecipes.indexOf(ingredient))

    $cardsGrid.innerHTML = createRecipeCards(displaySelectedRecipes)
})


