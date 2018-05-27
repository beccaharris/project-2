$(document).ready(function () {

  $('#petfinder').on('click', function(event) {
    var userZipCode = $('.user-zip-code').val().trim();
    var queryUrl = `http://api.petfinder.com/pet.find?format=json&key=a7e12d55f8325f95f249644d6b56c772&location=${userZipCode}&animal=dog&callback=?`
    console.log(userZipCode)
    $.ajax({
      dataType: 'json',
      url: queryUrl,
      method: 'GET'
    }).done(function(response) {
      const resultingPets = response.petfinder.pets.pet;
      for (var i = 0; i < resultingPets.length; i++) {
        // result attributes we're gonna use //
        var PFpetPicUrl         = resultingPets[i].media.photos.photo[2].$t;
        var PFpetName           = resultingPets[i].name.$t;
        var PFpetDescription    = resultingPets[i].description.$t;
        var PFpetAge            = resultingPets[i].age.$t;
        var PFpetBreedPrimary   = resultingPets[i].breeds.breed[0];
        var PFpetBreedSecondary = resultingPets[i].breeds.breed[1];

        var petCard = $(`<div class='card' id='pet-card-${[i]}' style='width:14rem;float:left;margin-right:40px'>`)
        // pet picture //
        var petPic = $(`<img class='card-img-top' id='pet-pic-${[i]}'>`)
        petPic.attr('src', PFpetPicUrl)
        

        // pet info //
        var petCardBody = $(`<div class='card-body pet-${[i]}'>`)
        petCardBody.append(
          `<h3>${PFpetName}</h3>\n<button>Read More!</button>`
        )
        // final card //
        petCard.append(petPic)
        petCard.append(petCardBody)
        $('#results').append(petCard)
      }
    })
  })

  //$("#petfinder").on('click', function(event) {
  //  $.ajax({
  //    dataType: "json",
  //    url: 'http://api.petfinder.com/pet.find?format=json&key=a7e12d55f8325f95f249644d6b56c772&location=80111&animal=dog&callback=?',
  //    method: "GET",
  //    success: (function (response) {
  //      const resultingPets = response.petfinder.pets;
//
  //      console.log(resultingPets)
  //      $('#results').html('<h1>' + HELLO + "</h1>")
  //      $("#results").text(resultingPets.animal);    
//
  //
  //    })
  //  });
  //})
  

});