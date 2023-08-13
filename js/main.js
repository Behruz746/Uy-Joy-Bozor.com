import './btn.js';
import './imgFile.js';
import './number.js';
import './numberDown.js';

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;
const elementsUserAd = elements.userAd;
const elementsNameFile = elements.nameFile;
const elementsUserRoom = elements.userRoom;
const elementsUserEstate = elements.userEstate;
const elementsUserFix = elements.userFix;
const ElementUserDate = elements.userDate;
const ElementUserFrom = elements.userFrom;
const ElementUserPrice = elements.userPrice;
const elementsUserNumberFirst = elements.userNumberFirst;
const elementsUserNumberLast = elements.userNumberLast;
const focusEl = document.querySelectorAll('.focus');

function submitForm(event) {
    // regex date //
    let regex = /^[a-zA-Z0-9а-яА-Я\s]{10,}$/;
    let resultUserAd = regex.test(elementsUserAd.value);
    let resultUserFix = regex.test(elementsUserFix.value);
    let resultUserDate = regex.test(ElementUserDate.value);
    let resultUserFrom = regex.test(ElementUserFrom.value);
    
    if(resultUserAd) {
        document.querySelector('.userAd__err').classList.add('remove--add');
    } else if(!resultUserAd) {
        event.preventDefault();
        document.querySelector('.userAd__err').classList.remove('remove--add');
    };

    if(resultUserFix) {
        document.querySelector('.userFixed__err').classList.add('remove--add');
    } else if(!resultUserFix) {
        event.preventDefault();
        document.querySelector('.userFixed__err').classList.remove('remove--add');
    };

    if(elementsUserRoom.value.length === 0) {
        event.preventDefault();
        document.querySelector('.userRoom__err').classList.remove('remove--add');
    } else {
        document.querySelector('.userRoom__err').classList.add('remove--add');
    };

    if(elementsUserEstate.value.length === 0) {
        event.preventDefault();
        document.querySelector('.userEstate__err').classList.remove('remove--add');
    } else {
        document.querySelector('.userEstate__err').classList.add('remove--add');
    };

    if(resultUserDate) {
        document.querySelector('.userDate__err').classList.add('remove--add');
    } else if(!resultUserDate) {
        event.preventDefault();
        document.querySelector('.userDate__err').classList.remove('remove--add');
    };

    if(resultUserFrom) {
        document.querySelector('.userFrom__err').classList.add('remove--add');
    } else if(!resultUserFrom) {
        event.preventDefault();
        document.querySelector('.userFrom__err').classList.remove('remove--add');
    };

    if(ElementUserPrice.value.length === 0) {
        event.preventDefault();
        document.querySelector('.userPrice__err').classList.remove('remove--add');
    } else {
        document.querySelector('.userPrice__err').classList.add('remove--add');
    };
    
    if(elementsUserNumberFirst.value.length <= 13) {
        event.preventDefault();
        document.querySelector('.userNumFirst__err').classList.remove('remove--add');
    } else {
        document.querySelector('.userNumFirst__err').classList.add('remove--add');
    };
};

focusEl.forEach((item)=> {
    let itemPl = item.placeholder;
  
    item.addEventListener('focus', ()=> {
      item.placeholder = ''; 
    });
  
    item.addEventListener('blur', ()=> {
      item.placeholder = itemPl;
    });
  });

const maskOptions = {
    mask: '+998 00 000 0000',
    lazy: true,
};
  
const mask = IMask(elementsUserNumberFirst, maskOptions);
mainForm.addEventListener('submit', submitForm);