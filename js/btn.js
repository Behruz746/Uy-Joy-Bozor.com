const formRoomRow = document.querySelector(".form-room__row");
const btnFirst = document.querySelector(".data__btn01");
const btnLast = document.querySelector(".data__btn02");

const removeEls = document.querySelectorAll('.remove--active');

function homeDateSubmit() {
  console.log(true);
    removeEls.forEach((item, index)=> {
        if(index == 0) {
            item.innerHTML = `
                <label for="userRoom">Xonalar soni nechta</label>
                <input tabindex="4" type="number" class="focus" min="1" max="100" name="userRoom" placeholder="Masalan, “5ta”.">
                <p class="userRoom__err error__text remove--add">Qo’shimcha ma’lumot kiriting!</p>
            `;
        } else if(index == 1) {
            item.innerHTML = `
                <label for="userEstate">Tomorqa o’lchami, nechi sotix?</label>
                <input tabindex="4" type="number" class="focus" min="1" max="100" name="userEstate" placeholder="Masalan, “8 sotix”.">
                <p class="userEstate__err error__text remove--add">Qo’shimcha ma’lumot kiriting!</p>
            `;
        } else if(index == 2) {
            item.innerHTML = `
                <label for="userFix">Remont. Xonadan qachon tamirlangan?</label>
                <input tabindex="5" type="text" class="focus" name="userFix" placeholder="Masalan, “Yaqinda ta’mirdan chiqqan. Biroz kamchiliklari bor”.">
                <p class="userFixed__err error__text remove--add">Remonti haqida ma’lumot kiriting!</p>
            `;
        }
        item.style.display = 'block';
    });
}

function carDateSubmit() {
  console.log(false);

  removeEls.forEach(item=> {
    item.innerHTML = "";
    item.style.display = 'none';
  });
}

const overBtn = () => {
  btnFirst.classList.add("over");
  btnFirst.classList.remove("out");
  btnLast.classList.remove("over");
  btnLast.classList.add("out");
};

const overBtnLast = () => {
  btnFirst.classList.remove("over");
  btnFirst.classList.add("out");
  btnLast.classList.add("over");
  btnLast.classList.remove("out");
};

btnFirst.addEventListener("mouseover", overBtn);
btnLast.addEventListener("mouseover", overBtnLast);
btnFirst.addEventListener("click", homeDateSubmit);
btnLast.addEventListener("click", carDateSubmit);  
