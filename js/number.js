const toggleElement = {'once': true};
const numbersBtn = document.getElementById('numbersBtn');

function creatNewNum() {
    const parentEl = numbersBtn.parentElement.parentElement;

    parentEl.innerHTML += `
        <div class="number__input" style="margin-top: 10px;">
            <input type="text" placeholder="Masalan, “99 123 45 67”." class="form__input" id="number-input">

            <!--<div id="numbersBtn">
                <img src="./assets/images/svg/pluse02.svg" alt="pluse icon">
            </div>-->
        </div>
    `;
};

numbersBtn.addEventListener('click', creatNewNum, toggleElement);