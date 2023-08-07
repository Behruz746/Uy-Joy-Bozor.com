import './btn.js';
import './imgFile.js';
import './number.js';

const form = document.getElementById('form-data');

function formSubmit(e) {
    e.preventDefault();

    let [descriptionInput, roomInput, sizeInput, repairInput, additionInput, fromInput, priceInput, numberInput] = [
        form['description-input'].value, 
        form['room-input'].value,
        form['size-input'].value,
        form['repair-input'].value,
        form['addition-input'].value,
        form['from-input'].value,
        form['price-input'].value,
        form['number-input'].value,
    ];

    console.log(descriptionInput);
    console.log(roomInput);

};

form.addEventListener('submit', formSubmit);
