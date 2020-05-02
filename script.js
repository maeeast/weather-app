let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=> {
    return response.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
  .then((response) => {
    showWeatherData(response);
  }).catch((error)=> {
    console.log(error);
  })
}

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  let icon = weatherData.weather[0].icon;
  
  if (icon === "01d" || icon === "01n")  {

    document.body.style.backgroundImage = "url('images/clear.jpeg')";

  } else if(icon === "02d" || icon === "02n" || icon === "03d" || icon === "0n3" || icon === "04d" || icon === "04n")  {

    document.body.style.backgroundImage = "url('images/cloudy.jpeg')";

  } else if(icon === "09d" || icon === "09n" || icon === "10d" || icon === "10n") {

    document.body.style.backgroundImage = "url('images/rain.jpeg')";

  } else if(icon === "11d" || icon === "11n") {

    document.body.style.backgroundImage = "url('images/storm.jpeg')";

  } else if(icon === "50d" || icon === "50n") {

    document.body.style.backgroundImage = "url('images/fog.jpeg')";
    
  } else if(icon === "13d" || icon === "13n") {

    document.body.style.backgroundImage = "url('images/snow.jpeg')";
    
  } else {

  }

  
}

