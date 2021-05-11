// const $recipesName = document.querySelector('.recipes-name')
// const $recipesTime = document.querySelector('.recipes-time')
// const $recipesIngredients = document.querySelector('.recipes-ingredients')
// const $recipesDescription = document.querySelector('.recipes-description')

// let $eachRecipe = document.createElement('div')
// let $allRecipes = document.querySelector('.cards-grid')
// $allRecipes.appendChild.$eachRecipe

// let recipe = document.querySelector('.wrapper-recipe')

let contentHtml = ''

fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes


        // for(let i = 0; i < recipes.length; i++){
        //     recipe.innerHTML += `<ul><li>${recipes[i].name}</li><li>${recipes[i].time}</li><li>${recipes[i].description}</li></ul>`
        // }

        for(let i = 0; i < recipes.length; i++){
            let recipe = recipes[i]
            contentHtml += `<h2 class="recipe-name">${recipe.name}</h2>
                            <p class="recipe-time">${recipe.time}</p>
                            <p class="recipe-description">${recipe.description}</p>`
        }
        document.querySelector('main').innerHTML = contentHtml

    })
    
    .catch(() => console.log("==="))
