let urlMain = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '01c5190151deba0603f49f4aa73a480e'

document.getElementById('buttonSearch').addEventListener('click', () => {
    const city = document.getElementById('cityRoute').value
    if (city) {
        fetchClimateDate(city);
    }
})

const fetchClimateDate = (city) => {
    fetch(`${urlMain}?q=${city}&appid=${api_key}`)
        .then(response => response.ok ? response.json() : Promise.reject("Error something went wrong"))
        .then(data => showClimateDate(data))
        .catch(error => showError("Error the value entered is not a city"));
};



function showError(message) {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to left, #ffffff, #000080)",
        },
        onClick: function(){}
    }).showToast();
}


const number = 273.15

function showClimateDate(data) {
    const divClimateDate = document.getElementById('climateDate');
    divClimateDate.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icono = data.weather[0].icon;

    const cityTitle = document.createElement('h2');
    cityTitle.textContent = `${cityName}, ${countryName}`;

    const temperatureInfo = document.createElement('p');
    temperatureInfo.textContent = `Temperature is: ${Math.floor(temperature - number)}ºC`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humidity is: ${humidity}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `The weather description is: ${description}`;

    divClimateDate.appendChild(cityTitle);
    divClimateDate.appendChild(temperatureInfo);
    divClimateDate.appendChild(humidityInfo);
    divClimateDate.appendChild(iconoInfo);
    divClimateDate.appendChild(descriptionInfo);
}