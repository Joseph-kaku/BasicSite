const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=b1bec77cc204ab32a7422058dfa36545";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();