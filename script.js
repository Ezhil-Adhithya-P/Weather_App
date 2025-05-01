const apiKey = "9d657d7e7d17ed3660f301c7b0cff866"; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");
  const errorDiv = document.getElementById("error");

  weatherInfo.innerHTML = "";
  errorDiv.textContent = "";

  if (!city) {
    errorDiv.textContent = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    // Extract and show weather info
    weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Pressure: ${data.main.pressure} hPa</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Date/Time: ${new Date().toLocaleString()}</p>
    `;

  } catch (error) {
    errorDiv.textContent = error.message;
  }
}
