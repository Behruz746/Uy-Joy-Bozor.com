import "./btn.js";
import "./imgFile.js";
import "./number.js";
import "./textCopy.js";

const payContainer = document.getElementById('pay-container');
const container = document.querySelector('.container');

const mainForm = document.forms.mainForm;
const elements = mainForm.elements;
const elementsUserAd = elements.userAd;
const elementsSelectHome = elements.selectHome;
const elementsNameFile = elements.nameFile;
const elementsUserRoom = elements.userRoom;
const elementsUserEstate = elements.userEstate;
const elementsUserFix = elements.userFix;
const elementUserDate = elements.userDate;
const elementUserFrom = elements.userFrom;
const elementUserPrice = elements.userPrice;
const elementsUserNumberFirst = elements.userNumberFirst;
const elementsUserNumberLast = elements.userNumberLast;
const focusEl = document.querySelectorAll(".focus");

function submitForm(event) {
  event.preventDefault();
  const formDate = new FormData(mainForm);
  const formDateObject = Object.fromEntries(formDate.entries());

  // regex date //
  let regex = /^[a-zA-Z0-9а-яА-Я\s]{5,}$/;
  let resultUserAd = regex.test(elementsUserAd.value);
  let resultUserFix = regex.test(elementsUserFix.value);
  let resultUserDate = regex.test(elementUserDate.value);
  let resultUserFrom = regex.test(elementUserFrom.value);

  if (resultUserAd) {
    document.querySelector(".userAd__err").classList.add("remove--add");
  } else if (!resultUserAd) {
    event.preventDefault();
    document.querySelector(".userAd__err").classList.remove("remove--add");
  }

  if (document.querySelector(".userFixed__err") != null) {
    if (resultUserFix) {
      document.querySelector(".userFixed__err").classList.add("remove--add");
    } else if (!resultUserFix) {
      event.preventDefault();
      document.querySelector(".userFixed__err").classList.remove("remove--add");
    }
  }

  if (document.querySelector(".userRoom__err") != null) {
    if (elementsUserRoom.value.length === 0) {
      event.preventDefault();
      document.querySelector(".userRoom__err").classList.remove("remove--add");
    } else {
      document.querySelector(".userRoom__err").classList.add("remove--add");
    }
  }

  if (document.querySelector(".userEstate__err") != null) {
    if (elementsUserEstate.value.length === 0) {
      event.preventDefault();
      document
        .querySelector(".userEstate__err")
        .classList.remove("remove--add");
    } else {
      document.querySelector(".userEstate__err").classList.add("remove--add");
    }
  }

  if (resultUserDate) {
    document.querySelector(".userDate__err").classList.add("remove--add");
  } else if (!resultUserDate) {
    event.preventDefault();
    document.querySelector(".userDate__err").classList.remove("remove--add");
  }

  if (resultUserFrom) {
    document.querySelector(".userFrom__err").classList.add("remove--add");
  } else if (!resultUserFrom) {
    event.preventDefault();
    document.querySelector(".userFrom__err").classList.remove("remove--add");
  }

  if (elementUserPrice.value.length === 0) {
    event.preventDefault();
    document.querySelector(".userPrice__err").classList.remove("remove--add");
  } else {
    document.querySelector(".userPrice__err").classList.add("remove--add");
  }

  if (elementsUserNumberFirst.value.length <= 13) {
    event.preventDefault();
    document
      .querySelector(".userNumFirst__err")
      .classList.remove("remove--add");
  } else {
    document.querySelector(".userNumFirst__err").classList.add("remove--add");
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "#"); // backend server URL
  xhr.setRequestHeader("Content-Type", "application/json"); 

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.readyState == 4 && xhr.status ===  200 && !resultUserAd && resultUserFix && resultUserDate && resultUserFrom && elementsUserNumberFirst.value.length <= 13 && elementUserPrice.value.length === 0) {
        var response = JSON.parse(xhr.responseText);
        console.log(response);
      } else if (xhr.readyState == 4) {
        payContainer.classList.remove('remove--add');
        container.classList.add('remove--add');
        console.error("Backendga so'rovda xatolik yuz berdi. ERROR");
      }
    }
  };

  var jsonData = JSON.stringify(Object.fromEntries(formDate));
  console.log(jsonData); // Json
  console.log(formDateObject); // Object 

  xhr.send(formDate);
};

const maskOptions = {
  mask: "+998 00 000 0000",
  lazy: true,
};

focusEl.forEach((item, index) => {
  let itemPl = item.placeholder;

  if (index === 7) {
    item.addEventListener("focus", () => {
      mask.value = "+998" + elementsUserNumberFirst.value.slice(5);
    });
  }

  item.addEventListener("focus", () => {
    item.placeholder = "";
  });

  item.addEventListener("blur", () => {
    item.placeholder = itemPl;
  });
});


const mask = IMask(elementsUserNumberFirst, maskOptions);
mainForm.addEventListener("submit", submitForm);
