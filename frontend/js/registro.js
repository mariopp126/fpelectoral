const selectedOption = document.querySelector(".selected-option");
const selectValue = document.querySelector(".select-value");
const optionContainer = document.querySelector(".options");
const optionList = document.querySelectorAll(".option");

console.log(selectedOption)

/* Toggle fuction */

const selectToggle = () => {
    if(optionContainer.dataset.toggle == 'collapsed') {
        optionContainer.dataset.toggle = '';
    }
    else {
        optionContainer.dataset.toggle = 'collapsed';
    }
}

/* Cuando se clickea el select-option */
selectedOption.addEventListener('click', selectToggle);

/* Actualiza el select value */
const updateSelectValue = (option) => {
    selectValue.innerText = option.innerText;
}

optionList.forEach((option) => {
    option.addEventListener('click', (e) => {
        updateSelectValue(option);
        selectToggle();
    })
})