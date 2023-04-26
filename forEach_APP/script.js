var animals = ['cat', 'dog', 'fish', 'bird'];

var output = document.getElementById("output");

animals.forEach(function(animal) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("animal");

  var newHeader = document.createElement("h2");
  newHeader.textContent = animal;

  var newImage = document.createElement("img");
  newImage.src = "https://via.placeholder.com/150";

  newDiv.appendChild(newHeader);
  newDiv.appendChild(newImage);
  output.appendChild(newDiv);
    
});
