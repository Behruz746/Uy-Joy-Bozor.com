const imageCard = document.querySelectorAll('.image__card');
const creatCard = document.querySelector('.creat--card');
const imageFileInput = document.getElementById('file-01');

function addImageFile() {
  creatCard.style.order = '1';
  let imageUrl = URL.createObjectURL(imageFileInput.files[0]);

  const imageEl = document.createElement('img');
  imageEl.src = imageUrl;
  imageEl.alt = "home image";
  imageEl.classList.add('imageEl');
  // imageCard.appendChild(imageEl);

  imageCard.forEach(item=> {
    item.appendChild(imageEl);
  });

  console.log(imageUrl, imageEl);
};

imageFileInput.addEventListener('change', addImageFile);