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