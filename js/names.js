
// Names
function retrieveAllNamesRecipes(recipes){
    
    for (let i = 0; i < recipes.length; i++){
        let recipeName = recipes[i].name
        allNames.push(recipeName)
    }
}        

function displayAllNames(names){
    let recipeName = ""
    for (let i = 0; i < names.length; i++){
        recipeName += `<li class="recipe-name-list">${names[i]}</li>`
    }
    $namesList.innerHTML = recipeName
}

