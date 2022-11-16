const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=b1bec77cc204ab32a7422058dfa36545";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  // to fixed() to specify decima points
    document.querySelector('#current-temp').textContent = Math.round((jsObject.main.temp - 273.15) * 1.8 + 32);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
  


getWeather();

