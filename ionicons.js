(function(doc){
    var scriptElm = doc.scripts[doc.scripts.length - 1];
    var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];
  
    warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')
  
    var parts = scriptElm.src.split('/');
    parts.pop();
    parts.push('ionicons');
    var url = parts.join('/');
  
    var scriptElm = doc.createElement('script');
    scriptElm.setAttribute('type', 'module');
    scriptElm.src = url + '/ionicons.esm.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm);
  
    
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)
    
    console.warn(warn.join('\n'));
  
  })(document);
  
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
