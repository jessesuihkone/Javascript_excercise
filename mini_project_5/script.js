/*body.style.backgroundColor = "tan"*/

const changeBgBtnCat = document.getElementById('bg-img-cat');
const body = document.querySelector('body');

changeBgBtnCat.addEventListener('click', () => {
  body.style.backgroundImage = "url('cat.png')";
});


const changeBgBtnDog = document.getElementById('bg-img-dog');

changeBgBtnDog.addEventListener('click', () => {
  body.style.backgroundImage = "url('dog.png')";
});
/*
const rattlesnake = document.getElementById("kaarme");

rattlesnake.addEventListener('click', function() {
  const bgImg = getComputedStyle(rattlesnake).backgroundImage;
  if (bgImg.includes("url('dog.png'")) {
    alert('Background image: DOG!');
  }
});
*/
const myDiv = document.getElementById('myDiv');

myDiv.addEventListener('click', function() {
  const bgImg = getComputedStyle(body).backgroundImage;
  if (bgImg.includes('dog.png')) {
    alert('Background image detected!');
  }
});
