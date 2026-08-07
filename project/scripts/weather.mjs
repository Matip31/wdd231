export {getWeather};
const key = "cf0384e7e963f364d6f03d8601fbc4ff";
const lat = -34.907;
const lon = -56.210;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

async function getWeather() {

    try {

        const currentResponse = await fetch(currentURL);
        const currentData = await currentResponse.json();

        displayCurrent(currentData);

        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        displayForecast(forecastData);

    } catch(error) {
        console.log(error);
    }

}

function displayCurrent(data){

    document.querySelector("#current-temp").textContent =
        Math.round(data.main.temp);

    document.querySelector("#weather-desc").textContent =
        data.weather[0].description;

    const icon =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const weatherIcon =
        document.querySelector("#weather-icon");

    weatherIcon.src = icon;
    weatherIcon.alt = data.weather[0].description;

}

function displayForecast(data){

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    // aproximadamente cada 24 horas
    const days = [8,16,24];

    days.forEach(index => {

        const item = data.list[index];

        const date = new Date(item.dt_txt);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        forecast.innerHTML += `
            <p>${day}: ${Math.round(item.main.temp)}°C</p>
        `;

    });

}