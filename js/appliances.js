// Appliances
function retrieveAllAppliancesFromRecipes(recipes){
    for (let i = 0; i < recipes.length; i++){
        const applianceName = recipes[i].appliance.replace("casserolle", "casserole")

        if (allAppliances.indexOf(applianceName) === -1){
            allAppliances.push(applianceName)
        }
    }
}

function displayAppliances(appliances) {
    let appliance = ""
    
    for(let i = 0; i < appliances.length; i++){
        appliance += `<li class="appliances-list-item">${appliances[i]}</li>`
    }
    
    document.querySelector('.appliances-list').innerHTML = appliance
    
    return appliance
}

 

$appliancesSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredAppliances = filterRecipeElements(allAppliances, search)

    displayAppliances(filteredAppliances)
    
    
    if (search.length >= 3) {
        $appliancesList.style.display = "block"
        $appliancesList.classList.add('appliances-list-request')
        $appliancesChevronDown.classList.add('hidden')
        $appliancesChevronUp.classList.remove('hidden')

        $appliancesChevronDown.addEventListener('click', () => {
            displayAppliances(allAppliances)
            $appliancesList.classList.remove('appliances-list-request')

        })

    } else {
        $appliancesList.style.display = "none"
        $appliancesChevronDown.classList.remove('hidden')
        $appliancesChevronUp.classList.add('hidden')
    }
})



$appliancesList.addEventListener('click', e => {

    if (e.target.className !== 'appliances-list') {
    $wrapperAppliances.innerHTML += `
        <div class="selected-appliance">
            ${e.target.textContent}
            <i class="far fa-times-circle"></i>
        </div>
    `
    // Retire l'élément/la valeur du tableau
    const appliance = e.target.textContent
    // Splice -> retire un élément d'un tableau
    allAppliances.splice(
        // Où on commence
        allAppliances.indexOf(appliance),
        // Combien d'éléments on retire
        1
    )

    console.log(allAppliances)
    // Retire l'élément du DOM
    const clickedElement = e.target
    const parentClickedElement = clickedElement.parentNode
    parentClickedElement.removeChild(clickedElement)
    }
})


$wrapperAppliances.addEventListener('click', e => {
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

        allAppliances.unshift(parentClickedElement.textContent.trim())
        console.log(allAppliances)
        
    } else if (e.target.classList.contains('selected-appliance')) {
        // Retirer lélément du DOM
        const clickedElement = e.target
        const parentClickedElement = clickedElement.parentNode
        parentClickedElement.removeChild(clickedElement)

        // Ajouter dans le tabeau allIngredients la valeur
        allAppliances.unshift(e.target.textContent.trim())
    }
})

