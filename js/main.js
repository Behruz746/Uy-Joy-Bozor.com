import './btn.js';
import './imgFile.js';
import './number.js';

const form = document.getElementById('form-data');
const selectInput = document.getElementById('selectInput');

const regEx = /^[a-zA-Z0-9]{6,100}$/;
const regExNum = /^[a-zA-Z0-9]{13}$/;

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
    const formInput = document.querySelectorAll('.form__input');
    const dataRow = document.querySelectorAll('.err--active');

    formInput.forEach(item=> {
        let parentEl = item.nextElementSibling;
        let result = regEx.test(item.value);

        console.log(parentEl);
      
        if(result) {
            parentEl.classList.remove('err--remove');
        } else if (parentEl.getAttribute('id') === 'numbersBtn') {
            parentEl.classList.remove('err--remove');
        } else {
            parentEl.classList.add('err--remove');
        }
    });

    let resultNum = regExNum.test(numberInput.value);

    if(resultNum) {
        console.log(true);
    } else {
        console.log(false);
    }
};

form.addEventListener('submit', formSubmit);
