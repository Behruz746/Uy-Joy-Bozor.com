const fileSelecInput = document.querySelector('.filePath');
const imageContainer = document.getElementById('imageContainer');
const imageSelect = document.querySelector('.image__select');
const defaultSlider = document.querySelectorAll('.default__slider');
const dataImages = document.querySelector('.data__images');

function selectImages(event) {
    const fileFirst = event.target.files;

    for(let i = 0; i <= fileFirst.length; i++) {
        const file = fileFirst[i];
        const imageUrl = URL.createObjectURL(file);
        
        const containerEl = document.createElement('div');
        imageContainer.append(containerEl);
        containerEl.classList.add('image');

        const inputEl = document.createElement('input');
        inputEl.type = 'file';
        inputEl.classList.add('imgIn');
        containerEl.append(inputEl);

        const imageEl = document.createElement('img');
        imageEl.src = imageUrl;
        imageEl.alt = 'Tanlangan rasm';
        imageEl.classList.add('imageEl');
        containerEl.appendChild(imageEl);

        const imgCon = document.querySelectorAll('.image');
        imageSelect.style.order = '1';

        function newUrlS(event) {
            const fileLast = event.target.files;

            for (let i = 0; i < fileLast.length; i++) {
                const files = fileLast[i];
                const newUrl = URL.createObjectURL(files);
                imageEl.src = newUrl;
            }
        }

        imgCon.forEach((item, index)=> {
            if(index >= 6) {
                const textEl = document.createElement('h4');
                textEl.textContent = "Maksimal 5ta surat yuklash mumkin";
                textEl.classList.add('images__text');
                dataImages.appendChild(textEl);

                imageSelect.remove();
                containerEl.remove();
            }

            defaultSlider.forEach((i)=> {
                if(index === 2) {
                    i.remove();
                } 
            });
        });

        inputEl.addEventListener('change', newUrlS);
    }
}

fileSelecInput.addEventListener('change', selectImages);