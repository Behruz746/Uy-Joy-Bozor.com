const textCopyBtn = document.getElementById('textCopy-btn');
const copyBtnIcon = document.getElementById('copy-icon');
const cardCode = document.getElementById('card-code');

function textCopy() {
  navigator.clipboard.writeText(cardCode.innerHTML);

  copyBtnIcon.src = './assets/images/svg/checked-icon.svg';

  setTimeout(()=> {
    copyBtnIcon.src = './assets/images/svg/copeIcon.svg';
  }, 1500);
};

textCopyBtn.addEventListener('click', textCopy);