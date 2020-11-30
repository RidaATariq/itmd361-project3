//Automatic Slideshow
var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "media/bahrain-bread.jpg";
images[1] = "media/grilled-beef-kafta-kebabs.jpg";
images[2] = "media/labneh-with-toppings.jpg";
images[3] = "media/qahwa-&-sweets.jpg";

// Change Image
function changeImg() {
  document.getElementById("slide").src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
