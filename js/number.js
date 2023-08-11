const formNumberFirst = document.querySelector(".form-number__first img");
const formNumberLast = document.querySelector(".form-number__last");

let toggle = false;
function toggleNum() {
  if (!toggle) {
    formNumberLast.classList.remove("remove--add");
    toggle = true;
  } else if (toggle) {
    formNumberLast.classList.add("remove--add");
    toggle = false;
  }
}

formNumberFirst.addEventListener("click", toggleNum);
