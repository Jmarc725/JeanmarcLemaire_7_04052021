const $recipesName = document.querySelector('.recipes-name')
const $recipesTime = document.querySelector('.recipes-time')
const $recipesIngredients = document.querySelector('.recipes-ingredients')
const $recipesDescription = document.querySelector('.recipes-description')

// let $eachRecipe = document.createElement('div')
// let $allRecipes = document.querySelector('.cards-grid')
// $allRecipes.appendChild.$eachRecipe

let recipe = document.querySelector('.wrapper-recipe')

fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes


        // for(let i = 0; i < recipes.length; i++){
        //     $recipesName.innerHTML = `<li>${recipes[i].name}</li>`
        //     $recipesTime.innerHTML = `<li>${recipes[i].time}</li>`
        //     $recipesDescription.innerHTML = `<li>${recipes[i].description}</li>`
        // }

        for(let i = 0; i < recipes.length; i++){
            recipe.innerHTML += `<ul><li>${recipes[i].name}</li><li>${recipes[i].time}</li><li>${recipes[i].description}</li></ul>`
        }

       

        // function recipeCard(object, prop){
        //     let recipeItem = ""
        //     for (let i = 0; i < object.length; i++) {
        //         recipeItem += object[i].prop
        //     }
        //     return recipeItem
        // }

    })
    
    .catch(() => console.log("==="))
