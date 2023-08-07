const btnFirst = document.querySelector('.data__btn01');
const btnLast = document.querySelector('.data__btn02');

const overBtn = ()=> {
    btnFirst.classList.add('over');
    btnFirst.classList.remove('out');
    btnLast.classList.remove('over');
    btnLast.classList.add('out');
};

const overBtnLast = ()=> {
    btnFirst.classList.remove('over');
    btnFirst.classList.add('out');
    btnLast.classList.add('over');
    btnLast.classList.remove('out');
};

btnFirst.addEventListener('mouseover', overBtn);
btnLast.addEventListener('mouseover', overBtnLast);
