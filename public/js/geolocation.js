$(document).ready(function () {
  var geocoder = new google.maps.Geocoder;

  document.getElementById('geolocation-button').addEventListener('click', function () {
    geocodeLatLng(geocoder);
  });

  function geocodeLatLng(geocoder) {
    var latlng = { lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1]) };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
          console.log(latlng)
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

})
//'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCGEkAY5NCelXoecmVjXn1Ul3eCNkzSnRE'
