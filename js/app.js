const $recipesName = document.querySelector('.recipes-name')
// const $recipeList = document.createElement('li')
// $recipesName.appendChild($recipeList)
const $timeRecipe = document.querySelector('.time-recipe')

fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes

        // Méthode à la papa
        for (let i = 0; i < recipes.length; i++) {
            // $recipeList.innerHTML += recipes[i].name
            $timeRecipe.innerHTML += `<li>${recipes[i].time}</li>`    
            // Prochaine étape faire 
        }
    })
    
    .catch(() => console.log("==="))
