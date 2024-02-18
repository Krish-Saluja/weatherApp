const apiKey = "b2845053de1735fd32a1aa6279dbde9e";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
document.getElementById('btn').addEventListener("click",() =>{
    const cityInput = document.querySelector('#srch input');
const city = cityInput ? cityInput.value : '';

    if (city==="")
    return;

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
        .then(data => {
            // Handle the weather data here
            const temperatureElement = document.getElementById('temperature');
            const temperatureCelsius = Math.round(data.main.temp - 273.15);
            temperatureElement.textContent = `Temperature: ${temperatureCelsius} °C`;
        
            console.log(data);
        })
        .catch(error => {
            // Handle errors here
            console.error('Error fetching weather data:', error);
        });
});


