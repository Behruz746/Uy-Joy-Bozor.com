import './btn.js';
import './imgFile.js';
import './number.js';

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;
const focusEl = document.querySelectorAll('.focus');
const elementsUserAd = elements.userAd;
const elementsUserRoom = elements.userRoom;
const elementsUserEstate = elements.userEstate;
const elementsUserFix = elements.userFix;
const elementsUserNumberFirst = elements.userNumberFirst;
const elementsUserNumberLast = elements.userNumberLast;

function submitForm(event) {
    // regex date //
    let regex = /^[a-zA-Z0-9а-яА-Я\s]{10,}$/;
    let resultUserAd = regex.test(elementsUserAd.value);
    let resultUserFix = regex.test(elementsUserFix.value);
    
    if(resultUserAd) {
        console.log(true);
        document.querySelector('.userAd__err').classList.add('remove--add');
    } else if(!resultUserAd) {
        event.preventDefault();
        document.querySelector('.userAd__err').classList.remove('remove--add');
        elementsUserAd.value = '';
    };

    if(resultUserFix) {
        document.querySelector('.userFixed__err').classList.add('remove--add');
    } else if(!resultUserFix) {
        event.preventDefault();
        document.querySelector('.userFixed__err').classList.remove('remove--add');
        elementsUserFix.value = '';
    };  
};

mainForm.addEventListener('submit', submitForm);

focusEl.forEach((item, index)=> {
    let itemPl = item.placeholder;

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
