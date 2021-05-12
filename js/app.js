const $recipesName = document.querySelector('.recipes-name')
const $recipesTime = document.querySelector('.recipes-time')
const $recipesIngredients = document.querySelector('.recipes-ingredients')
const $recipesDescription = document.querySelector('.recipes-description')
const $recipesWrapper = document.querySelector('.card-recipe-wrapper')
const $recipesHeading = document.querySelector('.card-headings')
const $cardContainer = document.querySelector('.card-container')
const $cardsGrid = document.querySelector('.cards-grid')


fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes


        for(let i = 0; i < recipes.length; i++){
            $cardContainer = `
            ${$recipesName.textContent = recipes[i].name} +
            ${$recipesTime.textContent = recipes[i].time} +
            ${$recipesDescription.textContent = recipes[i].description} +
            ${$recipesIngredients.textContent = recipes[i].ingredients}`
        }




        // for(let i = 0; i < recipes.length; i++){
        //     $recipesName.textContent = recipes[i].name
        //     $recipesTime.textContent = recipes[i].time
        //     $recipesDescription.textContent = recipes[i].description
        //     $recipesIngredients.textContent = recipes[i].ingredients
        // }
       
    })
    
    .catch(() => console.log("==="))
