import './btn.js';
import './imgFile.js';
import './number.js';

const form = document.getElementById('form-data');
const selectInput = document.getElementById('selectInput');

const regEx = /^[a-zA-Z0-9]{6,100}$/;

let [
    descriptionInput, 
    roomInput, 
    sizeInput, 
    repairInput, 
    additionInput, 
    fromInput, 
    priceInput, 
    numberInput ] = [
    form['description-input'], 
    form['room-input'].value,
    form['size-input'].value,
    form['repair-input'].value,
    form['addition-input'].value,
    form['from-input'].value,
    form['price-input'].value,
    form['number-input'].value,
];

function formSubmit(e) {
    e.preventDefault();

    let parnetEl = descriptionInput.parentElement.children[2];
    let result = regEx.test(descriptionInput.value);

    if(result) {
        parnetEl.style.display = 'none';
    } else {
        parnetEl.style.display = 'block';
    }
};

form.addEventListener('submit', formSubmit);
