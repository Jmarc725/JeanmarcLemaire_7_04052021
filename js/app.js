const $recipesName = document.querySelector('.recipes-name')
const $recipesTime = document.querySelector('recipes-time')
const $recipeDescription = document.querySelector('recipes-description')


fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes

        // for(let i = 0; i < recipes.length; i++){
        //     $recipesName.innerHTML += `<li>${recipes[i].name}</li>`
        // }

        function recipeCard(object, prop){
            let recipeItem = ""
            for (let i = 0; i < object.length; i++) {
                recipeItem += object[i].prop
            }
            return recipeItem
        }

    })
    
    .catch(() => console.log("==="))
