
// Names
function retrieveAllNamesRecipes(recipes){
    
    for (let i = 0; i < recipes.length; i++){
        let recipeName = recipes[i].name
        allNames.push(recipeName)
    }

    return allNames
}        

function displayAllNames(names){
    let recipeName = ""
    for (let i = 0; i < names.length; i++){
        recipeName += `<li class="recipe-name-list">${names[i]}</li>`
    }
    $mainList.innerHTML = recipeName

    return recipeName
}


$mainSearch.addEventListener('input', (e) => {
    const search = e.target.value
    
    const filteredName = filterRecipeElements(allNames, search)

    displayAllNames(filteredName)
    
    if (search.length >= 3) {
        $mainList.style.display = 'block'
    } else {
        $mainList.style.display = 'none'
    }
})
