const $recipesName = document.querySelector('.recipes-name')
const $recipesTime = document.querySelector('.recipes-time')
const $recipesIngredients = document.querySelector('.recipes-ingredients')
const $recipesDescription = document.querySelector('.recipes-description')



fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes

        let contentHtml = ''

        for(let i = 0; i < recipes.length; i++){
            let recipeCard = recipes[i]
            contentHtml += $recipesName.name
                            $recipesTime.time
                            $recipesDescription.description
        }
        document.querySelector('main').innerHTML = contentHtml

    })
    
    .catch(() => console.log("==="))
