import './btn.js';
import './imgFile.js';
import './number.js';

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;
const focusEl = document.querySelectorAll('.focus');

function submitForm(event) {
    event.preventDefault();

    const elementsUserAd = elements.userAd;
    const elementsUserRoom = elements.userRoom;
    const elementsUserEstate = elements.userEstate;
    const elementsUserFix = elements.userFix;
    const elementsUserNumberFirst = elements.userNumberFirst;
    const elementsUserNumberLast = elements.userNumberLast;

    // console.log(elementsUserAd, elementsUserRoom, elementsUserEstate, elementsUserFix);
    console.log(elementsUserNumberFirst.value, '\n', elementsUserNumberLast.value);
};

mainForm.addEventListener('submit', submitForm);

focusEl.forEach((item, index)=> {
    let itemPl = item.placeholder;
    let itemVa = item.value;

    item.addEventListener('focus', ()=> {
        item.placeholder = '';
       
        if(index === 7 || index === 8) {
            item.value = '+998';
        }
    })

    item.addEventListener('blur', ()=> {
        item.placeholder = itemPl;
    })
});
