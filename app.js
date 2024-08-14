document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'ad974a45033c4a649b28a022f7f0be42'; // Replace with your OpenWeatherMap API key
    const city = 'Bengaluru'; // Replace with desired city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather-report');
            if (weatherContainer) { // Check if the element exists
                const weatherInfo = `
                    <div>
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Condition: ${data.weather[0].main}</p>
                    </div>
                `;
                weatherContainer.innerHTML = weatherInfo;
            } else {
                console.error('Element with ID "weather-report" not found.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
