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
