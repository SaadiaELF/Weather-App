let timezone = document.querySelector(".timezone");
let icon = document.querySelector(".icon");
let mainWeather = document.querySelector(".main-weather");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let lat;
let lon;


fetch(`http://ipwho.is/`)
  .then((response) => response.json())
  .then((data) => {
    lat = data.latitude;
    lon = data.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=050af8688da478cbcad8a4d3f154271f`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
