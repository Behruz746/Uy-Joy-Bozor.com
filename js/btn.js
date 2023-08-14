const formRoomRow = document.querySelector(".form-room__row");
const btnFirst = document.querySelector(".data__btn01");
const btnLast = document.querySelector(".data__btn02");

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;
const elementsUserAd = elements.userAd;
const elementsSelectHomeLabel = document.querySelector('.active--label');

const removeEls = document.querySelectorAll('.remove--active');
const selectionOptins = document.querySelectorAll('.selectionOptins');

function homeDateSubmit() {
  elementsUserAd.placeholder = "Masalan, “Denov tumanida 3 xonalik xonadon sotiladi”.";
  elementsSelectHomeLabel.textContent = 'Qanday xonadon?';
    removeEls.forEach((item, index)=> {

      if(index === 0) {
        item.innerHTML = `
          <label for="selectHome" class="active--label">Qanday xonadon?</label>
          <select tabindex="3" name="selectHome">
              <option selected value="hovli-joy" class="selectionOptins">Hovli joy</option>
              <option value="kvartira" class="selectionOptins">Kvartira</option>
              <option value="tomorqa" class="selectionOptins">Tomorqa</option>
          </select>
          <p class="userSelect__err error__text remove--add">Bo’limni tanlang yozing!</p>
        `;
      } else if(index === 1) {
            item.innerHTML = `
                <label for="userRoom">Xonalar soni nechta</label>
                <input tabindex="4" type="number" class="focus" min="1" max="100" name="userRoom" placeholder="Masalan, “5ta”.">
                <p class="userRoom__err error__text remove--add">Qo’shimcha ma’lumot kiriting!</p>
            `;
        } else if(index === 2) {
            item.innerHTML = `
                <label for="userEstate">Tomorqa o’lchami, nechi sotix?</label>
                <input tabindex="4" type="number" class="focus" min="1" max="100" name="userEstate" placeholder="Masalan, “8 sotix”.">
                <p class="userEstate__err error__text remove--add">Qo’shimcha ma’lumot kiriting!</p>
            `;
        } else if(index === 3) {
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
  let regex = /^[a-zA-Z0-9а-яА-Я\s]{10,}$/;
  elementsUserAd.placeholder = "Masalan, “Nexia 3 sotiladi”.";
  elementsSelectHomeLabel.textContent = 'Katergoriyani tanlang?';

  removeEls.forEach((item, index)=> {
    if(index === 0) {
      item.innerHTML = `
        <label for="userCarYear">Mashina yili</label>
        <input tabindex="4" type="text" class="focus" name="userCarYear" placeholder="Masalan, “2013”.">
        <p class="userCar__err error__text remove--add">Yili haqida ma’lumot kiriting!</p>
      `;  
      item.style.display = 'block';
    } else if(index === 1) {
      item.innerHTML = `
        <label for="userCarKm">Mashina qancha yurgan? (Probegi)</label>
        <input tabindex="5" type="text" class="focus" name="userCarKm" placeholder="Namuna: 100,000 km yurgan">
        <p class="userCarKm__err error__text remove--add">Mashina qancha yurgani haqida ma’lumot kiriting!</p>
      `;  

    } else if(index === 2) {
      item.innerHTML = `
        <label for="userCarColor">Rangi (kraskasi)?</label>
        <input tabindex="6" type="text" class="focus" name="userCarColor" placeholder="Urilgan turtilgan, kraska qilinganini yozing">
        <p class="userCarColor__err error__text remove--add">Mashina rangi haqida ma’lumot kiriting!</p>
      `;  
      item.style.display = 'block';
    } else if (index === 3) {
      item.innerHTML = `
        <label for="userCarOil">Yoqilgʻisi?</label>
        <input tabindex="7" type="text" class="focus" name="userCarOil" placeholder="mashina binzendami yoki gazda yuradimi shuni yozing">
        <p class="userCarOil__err error__text remove--add">Mashina yoqilgʻisi haqida ma’lumot kiriting!</p>
      `;
    };
  });

  mainForm.addEventListener("submit", (e) => {
    const elementsUserCarYear = elements.userCarYear;
    const elemntsUserCarKm = elements.userCarKm;
    const elemntsUserCarColor = elements.userCarColor;
    const elemntsUserCarOil = elements.userCarOil;
    
      if(regex.test(elementsUserCarYear.value)) {
        document.querySelector(".userCar__err").classList.add("remove--add");
      } else {
        e.preventDefault();
        document.querySelector(".userCar__err").classList.remove("remove--add");
      }

      if(regex.test(elemntsUserCarKm.value)) {
        document.querySelector(".userCarKm__err").classList.add("remove--add");
      } else {
        e.preventDefault();
        document.querySelector(".userCarKm__err").classList.remove("remove--add");
      }

      if(regex.test(elemntsUserCarColor.value)) {
        document.querySelector(".userCarColor__err").classList.add("remove--add");
      } else {
        e.preventDefault();
        document.querySelector(".userCarColor__err").classList.remove("remove--add");
      }

      if(regex.test(elemntsUserCarOil.value)) {
        document.querySelector(".userCarOil__err").classList.add("remove--add");
      } else {
        e.preventDefault();
        document.querySelector(".userCarOil__err").classList.remove("remove--add");
      }
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
