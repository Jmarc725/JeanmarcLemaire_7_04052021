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

    // Retire l'élément du DOM
    const clickedElement = e.target
    const parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)
})


$wrapperIngredients.addEventListener('click', e => {
    console.log(e.target.textContent.trim())

    console.log(e.target)

    // Si c'est l'élément far qui a été cliqué
    if (e.target.classList.contains('far')) {
        // Alors que l'élémént "siblings" pour récupérer le nom de l'ingrédient
    // Sinon si c'est l'élément selected-ingredient qui a été cliqué
    } else if (e.target.classList.contains('selected-ingredient')) {
        // Retirer lélément du DOM
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.removeChild(clickedElement)

        // Ajouter dans le tabeau allIngredients la valeur
        allIngredients.push(e.target.textContent.trim())
    }
})

