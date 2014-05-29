$(document).ready(function() {
  var randomButton = $('.random')
  randomButton.on('click', getRandomAnimal)
});

function getRandomAnimal(e) {
  e.preventDefault();
  $.ajax ({
    url:'http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=dog&output=basic&format=json&callback=?',
    type: "GET",
    dataType: "json"
  })
  .done(function(data){
    $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + '>')
  })
  .fail(function() {
    alert('Error');
  })
}

//////////////////////////////////////dogs

function getRandomAnimal(e) {
  e.preventDefault();
  $.ajax ({
    url:'http://api.petfinder.com/pet.getRandom?key=3ecb826fb4381a335e1ca1cc3d9bfad4&animal=dog&output=basic&format=json&callback=?',
    type: "GET",
    dataType: "json"
  })
  .done(function(data){
    $('.photos').html('<img src='+ data.petfinder.pet.media.photos.photo[0].$t + '>')
  })
  .fail(function() {
    alert('Error');
  })
}

///////////////////////////////////////cats
