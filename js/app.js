const $recipesName = document.querySelector('.recipes-name')



fetch("/assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes

        // Méthode à la papa
        for (let i = 0; i < recipes.length; i++) {
            console.log(recipes[i])
            // Prochaine étape faire 
        }
    })
    .catch(() => console.log("==="))
