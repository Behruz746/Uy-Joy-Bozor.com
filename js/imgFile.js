const imageCard = document.querySelectorAll('.image__card');
const imageRow = document.querySelector('.form-image__row');
const creatCard = document.querySelector('.creat--card');
const imageFileInput = document.getElementById('file-01');

function addImageFile() {
  creatCard.style.order = '1';
  let imageUrl = URL.createObjectURL(imageFileInput.files[0]);

  const imageCardEl = document.createElement('div');
  imageCardEl.classList.add('image__card');
  imageRow.append(imageCardEl);

  const inputEl = document.createElement('input');
  inputEl.type = 'file';
  inputEl.name = 'upDateFile';
  inputEl.classList.add('inputNewFile');
  imageCardEl.append(inputEl);

  const imageEl = document.createElement('img');
  imageEl.src = imageUrl;
  imageEl.alt = "home image";
  imageEl.classList.add('imageEl');
  imageCardEl.appendChild(imageEl);
  const updateInput = document.querySelectorAll('.inputNewFile');

  updateInput.forEach((item)=> item.addEventListener('change', ()=> {
    let siblingEl = inputEl.nextElementSibling;
    let newUrl = URL.createObjectURL(item.files[0]);
    siblingEl.src = newUrl;
  }));

  updateInput.forEach((item, index)=> {
    if(index >= 4) {
      creatCard.remove();
      document.querySelector('.card__err').classList.remove('remove--add');
    }

    if(index === 0) {
      imageCard.forEach(item=> item.remove());
    }
  });
};

imageFileInput.addEventListener('change', addImageFile);