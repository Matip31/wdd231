const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url='https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&appid=cf0384e7e963f364d6f03d8601fbc4ff';
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('SRC', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  captionDesc.textContent = `${desc}`;
}