$(document).ready(function () {

  $('#petfinder').on('click', function(event) {
    $('#results').empty();
    var userZipCode = $('.user-zip-code').val().trim();
    var queryUrl = `http://api.petfinder.com/pet.find?format=json&key=a7e12d55f8325f95f249644d6b56c772&location=${userZipCode}&animal=dog&callback=?`

    $.ajax({
      dataType: 'json',
      url: queryUrl,
      method: 'GET'
    }).done(function(response) {
      const resultingPets = response.petfinder.pets.pet;
      console.log(resultingPets)
      for (var i = 0; i < resultingPets.length; i++) {
        // result attributes we're gonna use //
        var PFpetPicUrl         = resultingPets[i].media.photos.photo[2].$t;
        var PFpetName           = resultingPets[i].name.$t;
        var PFpetDescription    = resultingPets[i].description.$t;
        var PFpetAge            = resultingPets[i].age.$t;
        // if there's only one breed, it's just one object
        var PFpetBreed          = resultingPets[i].breeds.breed;
        // if there's more than one breed, it's an array

        var petCard = $(`<div class='card' id='pet-card-${[i]}' style='width:11rem;height:300px;float:left;margin-right:35px'>`)
        // pet picture //
        var petPic = $(`<img class='card-img-top' id='pet-pic-${[i]}'>`)
        petPic.attr('src', PFpetPicUrl)
        
        // pet info //
        var petCardBody = $(`<div class='card-body pet-${[i]}'>`)
        petCardBody.append(
          `<h5>${PFpetName}</h5>
          <p>${PFpetAge}<br>
          <button class='btn btn-primary'>Read More!</button>`
        )
        
        // final card //
        petCard.append(petPic)
        petCard.append(petCardBody)
        $('#results').append(petCard)
      }
    })
  })

});