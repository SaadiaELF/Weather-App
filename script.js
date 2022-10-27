let timezone = document.querySelector(".timezone");
let icon = document.querySelector(".icon");
let mainWeather = document.querySelector(".main-weather");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");

fetch(
  `https://api.ipgeolocation.io/ipgeo?apiKey=d991ebb557544c00bc3e215f2791d997`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let lat = data.latitude;
    let lon = data.longitude;
    let city = data.city;
    getWeather(lat, lon, city);
  });

function getWeather(lat, lon, city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=050af8688da478cbcad8a4d3f154271f`
  )
    .then((response) => response.json())
    .then((data) => {
      let weather = data.weather[0].main;
      let weatherIcon = data.weather[0].icon;
      let weatherInfo = data.weather[0].description;
      let temp = data.main.temp;
      displayWeather(city, weather, weatherIcon, weatherInfo, temp);
    });
}

function displayWeather(city, weather, weatherIcon, weatherInfo, temp) {
  timezone.innerHTML = city;
  icon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weatherIcon}@2x.png)`;
  mainWeather.innerHTML = weather;
  description.innerHTML = weatherInfo;
  temperature.innerHTML = temp;
}
