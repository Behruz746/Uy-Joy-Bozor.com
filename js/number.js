const mainForm = document.forms.mainForm;
const userNumberLast = document.querySelector(".user-number__last");
const formNumberFirst = document.querySelector(".form-number__first img");
const userLastErr = document.querySelector(".userLast__err");
const formNumberRow = document.querySelector(".form-number__row");

let toggle = false;
function toggleNum() {
  const formNumberLastEl = document.createElement("div");
  formNumberRow.appendChild(formNumberLastEl);
  const formNumberLast = document.querySelector(".form-number__last");

  if (!toggle) {
    formNumberLastEl.style.marginTop = "30px";
    formNumberLastEl.classList.add("form-number__last");
    formNumberLastEl.innerHTML = `
      <label for="userNumberLast">Qo'shimcha telefon raqamingiz</label>
      <input tabindex="10" type="tel" class="user-number__last"  name="userNumberLast" placeholder="Masalan, “99 123 45 67”.">
      <p class="userLast__err error__text remove--add">Telefon raqam kiriting!</p>
    `;
    const inputNumeLast = mainForm.userNumberLast;
    let itemPl = inputNumeLast.placeholder;

    mainForm.addEventListener("submit", (e) => {
      if (document.querySelector(".userLast__err") != null) {
        if (inputNumeLast.value.length <= 13) {
          e.preventDefault();
          document
            .querySelector(".userLast__err")
            .classList.remove("remove--add");
        } else if (!inputNumeLast.value.length <= 13) {
          document.querySelector(".userLast__err").classList.add("remove--add");
        }
      }
    });

    const maskOptions = {
      mask: "+998 00 000 0000",
      lazy: true,
    };

    const mask2 = IMask(inputNumeLast, maskOptions);
    inputNumeLast.addEventListener('focus', ()=> inputNumeLast.placeholder = '');
    inputNumeLast.addEventListener('blur', ()=> inputNumeLast.placeholder = itemPl);
    toggle = true;
  } else if (toggle) {
    formNumberLast.remove();
    toggle = false;
  }
}


formNumberFirst.addEventListener("click", toggleNum);
