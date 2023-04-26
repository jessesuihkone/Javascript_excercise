/*body.style.backgroundColor = "tan"*/

var changeBgBtnCat = document.getElementById('bg-img-cat');
var body = document.querySelector('body');
var changeBgBtnDog = document.getElementById('bg-img-dog');

const myDiv = document.getElementById("bbutton");


changeBgBtnCat.addEventListener('click', () => {
  body.style.backgroundImage = "url('cat.png')";
});


changeBgBtnDog.addEventListener('click', () => {
  body.style.backgroundImage = "url('dog.png')";
});


myDiv.addEventListener("click", function() {
  if(body.style.backgroundImage = 'url("dog.png")') {
    alert("dog");
  } else if(body.style.backgroundImage = 'url("cat.png")') {
    alert("cat");
  }
})