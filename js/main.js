// Name of city for API
var scity = 'Paris';
// Foo for weather check
function weather() {
  // scity = document.getElementById('input').value;
  // $('.menu').toggleClass('hiding');
  document.getElementById('input').value = '';
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + scity + '&APPID=1199abf130c10188ecbe9ef68d65221c&units=metric&lang=en';
  $.getJSON(api, function(data) {
    $('#temp').html(Math.floor(data.main.temp) + '&#176;C');
    $('#bigtemp').html(Math.floor(data.main.temp) + '&#176;C');
    $('#wind').text(Math.floor(data.wind.speed) + ' km/h');
    $('#city').text(data.name);
    $('#city2').text(data.name);
    $('#country').text(data.sys.country);
    $('#description').text(data.weather[0].description);
    var desc = data.weather[0].id;
    if (desc >= 500 && desc <= 531) {
      $('#weather-icon').html('<img class="svg" src="img/rainy-1.svg">');
      $('body').css('background', 'url("img/rainy.jpg")')
    } else if (desc >= 600 && desc <= 612) {
      $('#weather-icon').html('<img class="svg" src="img/snowy-6.svg">');
      $('body').css('background', 'url("img/snowy.jpg")')
    } else if (desc >= 200 && desc <= 232) {
      $('#weather-icon').html('<img class="svg" src="img/thunder.svg">');
      $('body').css('background', 'url("img/thunder.jpg")')
    } else if (desc >= 701 && desc <= 781) {
      $('#weather-icon').html('<img class="svg" src="img/cloudy.svg">');
      $('body').css('background', 'url("img/cloudy.jpg")')
    } else if (desc == 800) {
      $('#weather-icon').html('<img class="svg" src="img/day.svg">');
      $('body').css('background', 'url("img/day.jpg")')
    } else if (desc >= 801 && desc <= 804) {
      $('#weather-icon').html('<img class="svg" src="img/cloudy.svg">');
      $('body').css('background', 'url("img/cloudy.jpg")')
    }
  });
};
$(document).ready(weather());
// HIDE MENU
$('#menu').click(function() {
  $('.menu').toggleClass('hiding')
})
// Run weather check by click
$('#send').click(function() {
  scity = document.getElementById('input').value;
  $('.menu').toggleClass('hiding');
  weather();
});
// Run weather check by press enter
function handle(e) {
  if (e.keyCode === 13) {
    scity = document.getElementById('input').value;
    $('.menu').toggleClass('hiding');
    weather();
  }
}