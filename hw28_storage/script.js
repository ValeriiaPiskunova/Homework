const expireTime = 120 * 60; // 2 hours

const storageKey = "weather";
const city = "Oslo";

const apiKey = "733309b45a135040615686c0a57c15f7";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const resultsContainer = document.querySelector("#results");

function toSeconds(datetime) {
  return datetime / 1000;
}
async function fetchWeather() {
  const response = await fetch(url);
  const { main } = await response.json();
  return main;
}

async function initializeWeather() {
  const storedData = JSON.parse(localStorage.getItem(storageKey));
  const lastUpdated = new Date(storedData?.updatedAt);

  const currentTime = new Date();
  if (toSeconds(currentTime - lastUpdated) < expireTime) {
    return storedData;
  } else {
    const updatedWeather = await fetchWeather();
    updatedWeather.updatedAt = currentTime.toUTCString();
    localStorage.setItem(storageKey, JSON.stringify(updatedWeather));
    return updatedWeather;
  }
}

async function displayWeather(weather) {
  resultsContainer.innerHTML = `
      <h1>Weather in ${city}</h1> 
      <p><strong>Temperature:</strong> ${Math.round(
        weather.temp
      )}°C</p> 
      <p><strong>Feels like:</strong> ${Math.round(
        weather.feels_like
      )}°C</p>
      <p><strong>Humidity:</strong> ${weather.humidity}%</p>
      <p><strong>Pressure:</strong> ${weather.pressure}hPa</p>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const weather = await initializeWeather();
  displayWeather(weather);
});
