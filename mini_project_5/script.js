body.style.backgroundColor = "tan"

const changeBgBtnCat = document.getElementById('bg-img-cat');
const body = document.querySelector('body');

changeBgBtnCat.addEventListener('click', () => {
  body.style.backgroundImage = "url('cat.png')";
});


const changeBgBtnDog = document.getElementById('bg-img-dog');

changeBgBtnDog.addEventListener('click', () => {
  body.style.backgroundImage = "url('dog.png')";
});
