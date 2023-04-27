var animals = ['cat', 'dog', 'fish', 'bird', 'kangaroo', 'monkey', 'penguin' ];

var output = document.getElementById("output");

// create animal function to make new divs for each animal
animals.forEach(function(animal) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("animal");

  // add header to animal div
  var newHeader = document.createElement("h2");
  newHeader.textContent = animal;

  // image place
  var newImage = document.createElement("img");
  newImage.src = "https://via.placeholder.com/150";

  newDiv.appendChild(newHeader);
  newDiv.appendChild(newImage);
  output.appendChild(newDiv);
    
});
