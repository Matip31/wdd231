const navButton = document.querySelector('#ham');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle("show");
});
const navBar=document.querySelector("#nav-bar");
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
document.getElementById("lastModified").innerHTML=`Last Modification: ${document.lastModified}`;
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

getWeather();
const url = "data/members.json";

async function getMembers(){

    const response = await fetch(url);

    const data = await response.json();

    displaySpotlights(data.companies);

}

function displaySpotlights(members){

    const container = document.querySelector("#spotlights");

    container.innerHTML = "";

    const qualified =
        members.filter(member =>
            member.membership === 3 ||
            member.membership === 2
        );

    qualified.sort(() => Math.random() - 0.5);

    const selected = qualified.slice(0,3);

    selected.forEach(member => {
        let membership="";
        if (member.membership==3){
            membership="Gold";
        }
        else if(member.membership==2){
            membership="Silver";
        }
        container.innerHTML += `
        <article class="spotlight">

            <img src="images/${member.image}" alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <p>
                <a href="${member.weburl}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>${membership} Member</strong></p>

        </article>
        `;

    });

}

getMembers();