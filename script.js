var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.description');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var wind = document.querySelector('.wind');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a736f58c521cb62c95d7b86563757a97')

.then(response => response.json())
.then(data => {
  var tempValue = (data.main.temp - 273.15).toFixed(2);
  var nameValue = data.name;
  var descValue = data.weather[0].description;
  var cloudsValue = data.clouds.all;
  var windValue = (data.wind.speed * 2.237).toFixed(2);

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather Condition - "+descValue;
  temp.innerHTML = "Temp - "+tempValue  + ' °C';
  clouds.innerHTML = "clouds - "+ cloudsValue + "%";
  wind.innerHTML = "Wind speed - " + windValue + "mph"
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
});
