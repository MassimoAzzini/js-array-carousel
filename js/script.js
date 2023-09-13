// 1. creo un array con le immagini
// 2. stampo le immagini dell'array dentro l'html con classe d-none (tranne il primo a cui tolgo il d-none)
// 3. creo i bottoni con i quali modifico la classe d-none delle immagini
// 4. assegno la possibilita ai bottoni di resettare lo scorrimento delle immagini per ricominciare a vedere le immagini
const itemsWrapper = document.querySelector('.items-wrapper');
const thumbContent = document.querySelector('.thumb-content')

const imagesList = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

let counterImg = 0;

for(let i = 0; i < imagesList.length; i++){
  const image = imagesList[i];
  itemsWrapper.innerHTML += `<img src="${image}" alt="" class="item d-none">`;
  thumbContent.innerHTML += `<img src="${image}" alt="" class="thumb-item">`;
}

const itemList = document.getElementsByClassName('item');
const thumbList = document.getElementsByClassName('thumb-item');

itemList[counterImg].classList.remove('d-none');
thumbList[counterImg].classList.add('active');


