// Map
var map;

function initMap() {
  myCoordinates = {
    lat: 21.480497,
    lng: 39.184999
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: myCoordinates,
    zoom: 15
  });
  var jeddahMarker = new google.maps.Marker({
    position: myCoordinates,
    map: map,
    title: "Jeddah is known in the kingdom for its shopping districts, restaurants and cafes."
  });
}

// To add the marker to the map, call setMap();
jeddahMarker.setMap(map);
window.addEventListener('load', initMap);

// Slideshow
var i = 0;
var images = [];
var time = 3000;

images[0] = "media/bahrain-bread.jpg";
images[1] = "media/grilled-beef-kafta-kebabs.jpg";
images[2] = "media/labneh-with-toppings.jpg";
images[3] = "media/qahwa-&-sweets.jpg";

function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
