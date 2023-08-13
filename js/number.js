const mainForm = document.forms.mainForm;
const userNumberLast = document.querySelector('.user-number__last');
const formNumberFirst = document.querySelector(".form-number__first img");
const formNumberLast = document.querySelector(".form-number__last");

let toggle = false;
function toggleNum() {
  if (!toggle) {
    formNumberLast.classList.remove("remove--add");

    mainForm.addEventListener("submit", (event) => {
      if (userNumberLast.value.length === 0) {
        event.preventDefault();
        document.querySelector(".userLast__err").classList.remove("remove--add");
      } else {
        document.querySelector(".userLast__err").classList.add("remove--add");
      };
    });

    toggle = true;
  } else if (toggle) {
    formNumberLast.classList.add("remove--add");
    toggle = false;
  }
}

formNumberFirst.addEventListener("click", toggleNum);
