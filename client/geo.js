if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    displayPosition, 
    displayError,
    { enableHighAccuracy: true, timeout: 10 * 1000 * 1000, maximumAge: 0 }
  );
}
else {
  alert("Geolocation is not supported by this browser");
}

function displayPosition(position) {
  var currentCoordsElement = $("#CurrentCoords");
  var currentSpeedElement = $("#CurrentSpeed");

  if (currentCoordsElement) {
    currentCoordsElement.text("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
  }

  if (currentSpeedElement) {
    currentSpeedElement.text("Speed: " + (position.coords.speed? position.coords.speed : "0"))
  }
}
function displayError(error) {
  var errors = { 
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}