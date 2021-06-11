function chevronDown(down, up, list, placeholder, variable){
    down.addEventListener('click', () => {
        down.classList.toggle('hidden')
        up.classList.toggle('hidden')
        list.style.display = 'block'
        placeholder.value = ""
        placeholder.focus()
        variable
    })
}

function chevronUp(down, up, list, placeholder){
    up.addEventListener('click', () => {
        down.classList.toggle('hidden')
        up.classList.toggle('hidden')
        list.style.display = 'none'
        placeholder.value = placeholder.getAttribute('value')
    })
}



function chrevonDownIngredients() {
    $ingredientsChevronDown.classList.toggle('hidden')
    $ingredientsChevronUp.classList.toggle('hidden')
    $ingredientsList.style.display = 'block'
}

function chrevonUpIngredients() {
    $ingredientsChevronDown.classList.toggle('hidden')
    $ingredientsChevronUp.classList.toggle('hidden')
    $ingredientsList.style.display = 'none'
}

