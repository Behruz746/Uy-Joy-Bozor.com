const formNumberFirst = document.querySelector('.form-number__first img');
const formNumberLast = document.querySelector('.form-number__last');

let toggle = false;

function toggleNum() {

    if(!toggle) {
        formNumberLast.classList.remove('remove--add');
        formNumberFirst.style.transform = 'rotate(130deg)';
        toggle = true;
    } else if(toggle) {
        formNumberLast.classList.add('remove--add');
        formNumberFirst.style.transform = 'rotate(0deg)';
        toggle = false;
    }
}

formNumberFirst.addEventListener('click', toggleNum);