const locationForm = document.querySelector('#location-form');
const locationInput = document.querySelector('#location');
const weatherInfo = document.querySelector('#weather-info');

locationForm.addEventListener('submit', fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  
  const location = locationInput.value.trim();
  if (!location) return;

  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0];
      const temperature = data.main.temp;
      const description = weather.description;
      
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    });
}
