const authors = ["Sebastien Jermer","Juli Kosolapova", "Steve Carter","Mark Zimmer","Filip Bunkins"];

const imageSources = ["beach-sj", "desert-jk", "mountains-sc", "river-mz", "snow-fb"];

const sceneName = ["Beach", "Desert", "Mountains", "River", "Snow"]

const leftButton = document.querySelector('#left-btn');
const rightButton = document.querySelector('#right-btn');
const imgElem = document.querySelector('img');
const attributionElem = document.querySelector('.attribution');

let count = 0;


function movePreviousImg() {
  count--

  if (count < 0) {
    count = imageSources.length - 1;

}
  
  imgElem.src = `./images/${imageSources[count]}.jpg`
  attributionElem.innerHTML = `${sceneName[count]} - ${authors[count]}`
}

function moveNextImg() {
  count++

  if (count === imageSources.length) {count = 0}

  imgElem.src = `./images/${imageSources[count]}.jpg`
  attributionElem.innerHTML = `${sceneName[count]} - ${authors[count]}`
}


leftButton.addEventListener('click', movePreviousImg)
rightButton.addEventListener('click', moveNextImg)