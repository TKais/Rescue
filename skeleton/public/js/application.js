$(document).ready(function() {
  var catButton = $('.cats')
  catButton.on('click', getRandomCat)
  var dogButton = $('.dogs')
  dogButton.on('click', getRandomDog)
  var formButton = $('#search')
  formButton.on('submit', submitForm)

});

function getRandomCat(event) {
  event.preventDefault();
  $.ajax ({
    url:'http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=cat&output=basic&format=json&callback=?',
    type: "GET",
    dataType: "json"
  })
  .done(function(data){

    $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + ' width="100">').append('<p>' + data.petfinder.pet.name.$t + '</p>').append('<br>Breed:  ' + data.petfinder.pet.breeds.$t + '</br>').append('<br>Age:  ' + data.petfinder.pet.age.$t + '</br>').append('<br>Sex:  ' + data.petfinder.pet.sex.$t + '</br>').append('<br>Description:  ' + data.petfinder.pet.description.$t + '</br>').append('<br>Shelter ID:  ' + data.petfinder.pet.shelterId.$t + '</br>').append('<br>Status:  ' + data.petfinder.pet.status.$t + '</br>')
  })
  .fail(function() {
    alert('Error');
  })
}

////////////////////////////////////////

function getRandomDog(event) {
  event.preventDefault();
  $.ajax ({
    url:'http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=dog&output=basic&format=json&callback=?',
    type: "GET",
    dataType: "json"
  })
  .done(function(data) {
    $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + ' width="100"><br>').append('<p>' + data.petfinder.pet.name.$t + '</p>').append('<br>Breed:  ' + data.petfinder.pet.breeds.$t + '</br>').append('<br>Age:  ' + data.petfinder.pet.age.$t + '</br>').append('<br>Sex:  ' + data.petfinder.pet.sex.$t + '</br>').append('<br>Description:  ' + data.petfinder.pet.description.$t + '</br>').append('<br>Shelter ID:  ' + data.petfinder.pet.shelterId.$t + '</br>').append('<br>Status:  ' + data.petfinder.pet.status.$t + '</br>')
  })
  .fail(function() {
    alert('Error');
  })
}

//////////////////////////////////////////
function submitForm(event) {
  event.preventDefault();
  $.ajax ({
    url:'http://api.petfinder.com/pet.find?key=3ecb826fb4381a335e1ca1cc3d9bfad4&location=94608&output=basic&format=json&callback=?',
    type: "POST",
    dataType: "json"
  })
  .done(function(data) {

    $('.all').html('<img src='+ data.petfinder.pets.pet[0].media.photos.photo[0].$t + ' width="100"><br>').append('<p>' + data.petfinder.pets.pet[0].name.$t + '</p>').append('<br>Breed:  ' + data.petfinder.pets.pet[0].breeds.$t + '</br>').append('<br>Age:  ' + data.petfinder.pets.pet[0].age.$t + '</br>').append('<br>Sex:  ' + data.petfinder.pets.pet[0].sex.$t + '</br>').append('<br>Description:  ' + data.petfinder.pets.pet[0].description.$t + '</br>').append('<br>Shelter ID:  ' + data.petfinder.pets.pet[0].shelterId.$t + '</br>').append('<br>Status:  ' + data.petfinder.pets.pet[0].status.$t + '</br>')
  })
  .fail(function() {
    alert('Error');
  })
}


// function getDog(event) {
//   event.preventDefault();
//   $.ajax ({
//     url:'http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=dog&output=basic&format=json&callback=?',
//     type: "GET",
//     dataType: "json"
//   })
//   .done(function(data) {
//     debugger
//     $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + ' width="100"><br>').append('<p>' + data.petfinder.pet.name.$t + '</p>').append('<br>Breed:  ' + data.petfinder.pet.breeds.$t + '</br>').append('<br>Age:  ' + data.petfinder.pet.age.$t + '</br>').append('<br>Sex:  ' + data.petfinder.pet.sex.$t + '</br>').append('<br>Description:  ' + data.petfinder.pet.description.$t + '</br>').append('<br>Shelter ID:  ' + data.petfinder.pet.shelterId.$t + '</br>').append('<br>Status:  ' + data.petfinder.pet.status.$t + '</br>')
//   })
//   .fail(function() {
//     alert('Error');
//   })
// }
//
//   function submitForm(event) {
//     event.preventDefault();
//     $.ajax ({
//       url: "http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=dog&breed.list&output=basic&format=json&callback=?",
//       type: 'POST',
//       data: $(this).serialize()
//     })
//     .done(function(data) {
//     $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + ' width="100"><br>').append('<p>' + data.petfinder.pet.name.$t + '</p>').append('<br>Breed:  ' + data.petfinder.pet.breeds.$t + '</br>').append('<br>Age:  ' + data.petfinder.pet.age.$t + '</br>').append('<br>Sex:  ' + data.petfinder.pet.sex.$t + '</br>').append('<br>Description:  ' + data.petfinder.pet.description.$t + '</br>').append('<br>Shelter ID:  ' + data.petfinder.pet.shelterId.$t + '</br>').append('<br>Status:  ' + data.petfinder.pet.status.$t + '</br>')
//  })
//     .fail(function() {
//     alert('Error');
//   })
// }
//
//
//
//
//
//
//
