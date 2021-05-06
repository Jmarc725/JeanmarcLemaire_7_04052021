const $recipesName = document.querySelector('.recipes-name')


fetch("assets/recipes.json")
    .then((res) => res.json())
    .then((data) => {
        const recipes = data.recipes

        let recipe = ""
        // Méthode à la papa
        for (let i = 0; i < recipes.length; i++) {
            recipe += recipes[i].name
            // Prochaine étape faire 
        }
        $recipesName.innerHTML = `<li>${recipe}</li>`
    })
    
    .catch(() => console.log("==="))
