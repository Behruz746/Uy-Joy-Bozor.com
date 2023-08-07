const toggleElement = {'once': true};
const numbersBtn = document.getElementById('numbersBtn');

function creatNewNum() {
    const parentEl = numbersBtn.parentElement.parentElement; 

    parentEl.innerHTML += `
        <h3 class="input__title" style="margin-top: 10px;">Qoʻshimcha telefon raqami</h3>
        <div class="number__input" style="margin-top: 10px;">
            <input type="text" placeholder="Masalan, “99 123 45 67”." class="form__input" id="number-input">
        </div>
    `;
};

numbersBtn.addEventListener('click', creatNewNum, toggleElement);