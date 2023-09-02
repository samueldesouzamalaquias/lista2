
let lista = JSON.parse(localStorage.getItem('lista'))
if (!lista) {
    lista = [];
} 

let promptInput = document.getElementById("input");

let itemInput = promptInput.value;

let elemDiv = document.querySelector('.js-div');

let elemPar = document.getElementById("p");
console.log(typeof elemPar);
