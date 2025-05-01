const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '260b5caacd5c1100ce903742e85cc81f'
const diffkelvin = 273.15


document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityinput').value;
    if (city) {
        fetchweather(city)
    } else {
        alert('Ingrese una ciudad valida')
    }
})

function fetchweather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML = ''

    const cityName = data.name
    const contryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${contryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp - diffkelvin)}°C`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del: ${humidity}%`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
}

