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