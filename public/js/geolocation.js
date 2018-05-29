// js for finding the user's current location //
$(document).ready(function () {
  const $geolocateButton = document.getElementById('geolocation-button');
  $geolocateButton.addEventListener('click', geolocate);

  function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
  }

  function onGeolocateSuccess(coordinates) {
    var { latitude, longitude } = coordinates.coords;
    function reverseGeocode() {
      var geocoder = new google.maps.Geocoder;
      latitude = parseFloat(latitude).toFixed(2)
      longitude = parseFloat(longitude).toFixed(2)
      var latlng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};

      geocoder.geocode({'location': latlng}, function(results, status) {
        var addressLength = results[0].address_components.length
        var zip = results[0].address_components[addressLength - 2].long_name
        $('.user-zip-code').attr('value', zip)
      })
    }
    reverseGeocode();
  }

  function onGeolocateError(error) {
    console.warn(error.code, error.message);
    if (error.code === 1) {
      // they said no
    } else if (error.code === 2) {
      // position unavailable
    } else if (error.code === 3) {
      // timeout
    }
  }

})
//'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCGEkAY5NCelXoecmVjXn1Ul3eCNkzSnRE'
