const $recipesName = document.querySelector('.recipes-name')
const $recipesTime = document.querySelector('.recipes-time')
const $recipesIngredients = document.querySelector('.recipes-ingredients')
const $recipesDescription = document.querySelector('.recipes-description')
const $recipesWrapper = document.querySelector('.card-recipe-wrapper')
const $recipesHeading = document.querySelector('.card-headings')


fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes


        for(let i = 0; i < recipes.length; i++){
        }

    })
    
    .catch(() => console.log("==="))
