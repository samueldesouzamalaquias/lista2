
let lista = JSON.parse(localStorage.getItem('lista'))
if (!lista) {
    lista = [];
} 

let promptInput = document.querySelector('.js-input');

let itemInput = promptInput.value;
console.log(itemInput)

let elemDiv = document.querySelector('.js-div');

let elemPar = document.querySelector('.js-p');
console.log(typeof elemPar);