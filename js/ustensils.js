// Ustensils
function retrieveAllUstensilsFromRecipes(recipes) {    
    for (let i = 0; i < recipes.length; i++) {
        for (let y = 0; y < recipes[i].ustensils.length; y++) {

            const ustensilName = recipes[i].ustensils[y][0].toUpperCase() + recipes[i].ustensils[y].substr(1)

            // Ici je cherche les ingrédients qui ne sont pas présents dans mon tableau
            if (allUstensils.indexOf(ustensilName) === -1) {

                // Si l'ingrédient n'est pas présent, alors je le rajoute dans mon tableau
                allUstensils.push(ustensilName)
            }
        }
    }
}

function displayUstensils(ustensils) {
    let ustensil = ""
    let firstThirtyUstensils = ustensils.slice(0, 30)
    
    for(let i = 0; i < firstThirtyUstensils.length; i++){
        ustensil += `<li class="ustensils-list-item">${firstThirtyUstensils[i]}</li>`
    }
   
    document.querySelector('.ustensils-list').innerHTML = ustensil
    
    return ustensil
}


$ustensilsSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredUstensils = filterRecipeElements(allUstensils, search)

    displayUstensils(filteredUstensils)
    
    const ustensilsInput = displayUstensils(filteredUstensils)

    
    if (search.length >= 3 ){
        $ustensilsList.style.display = "block"
        $ustensilsList.classList.add('ustensils-list-request')
        $ustensilsChevronDown.classList.add('hidden')
        $ustensilsChevronUp.classList.remove('hidden')

        $ustensilsChevronDown.addEventListener('click', () => {
            displayUstensils(allUstensils)
            $ustensilsList.classList.remove('ustensils-list-request')
        })
    
     } else {
        $ustensilsList.style.display = "none"
        $ustensilsChevronDown.classList.remove('hidden')
        $ustensilsChevronUp.classList.add('hidden')
    }
})



$ustensilsList.addEventListener('click', e => {


    if (e.target.className !== 'ustensils-list') {
    $selectedUstensils.innerHTML += `
        <div class="selected-ustensil">
            ${e.target.textContent}
            <i class="far fa-times-circle"></i>
        </div>
    `
    
    // Retire l'élément/la valeur du tableau
    const ustensil = e.target.textContent
    // Splice -> retire un élément d'un tableau
    allUstensils.splice(
        // Où on commence
        allUstensils.indexOf(ustensil),
        // Combien d'éléments on retire
        1
    )

    console.log(allUstensils)
    // Retire l'élément du DOM
    const clickedElement = e.target
    const parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)
    }
})


$selectedUstensils.addEventListener('click', e => {
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

        allUstensils.unshift(parentClickedElement.textContent.trim())
        console.log(allUstensils)
        
    } else if (e.target.classList.contains('selected-ustensil')) {
        // Retirer lélément du DOM
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.removeChild(clickedElement)

        // Ajouter dans le tabeau allIngredients la valeur
        allUstensils.unshift(e.target.textContent.trim())
    }
})

