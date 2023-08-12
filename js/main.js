import './btn.js';
import './imgFile.js';
import './number.js';

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;

function submitForm(event) {
    event.preventDefault();
   
    

};

mainForm.addEventListener('submit', submitForm);



const focusEl = document.querySelectorAll('.focus');

const userAd = elements.userAd;
const userAdPlaceholder = elements.userAd.placeholder;

focusEl.forEach((item)=> {
    let itemPl = item.placeholder;

    item.addEventListener('focus', ()=> {
        item.placeholder = '';
    })

    item.addEventListener('blur', ()=> {
        item.placeholder = itemPl;
    })
});
