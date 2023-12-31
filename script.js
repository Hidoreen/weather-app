const apiKey = 'a33921c0ac48fe398bc9c3d6deb74c46';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const input = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');
const weatherDisplay = document.querySelector('.weather');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404) {
    document.querySelector('.errorMsg').style.display = 'block';
    weatherDisplay.style.display = 'none';
  } else {

      var data = await response.json();

      console.log(data);

      document.querySelector('.city').textContent = data.name;
      document.querySelector('.temp').textContent = Math.round(data.main.temp) + '°C';
      document.querySelector('.humidity').textContent = data.main.humidity + '%';
      document.querySelector('.wind').textContent = data.wind.speed + 'km/h';

      if(data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'images/clouds.png'
      } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'images/clear.png'
      }  else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'images/rain.png'
      }  else if (data.weather[0].main === 'Dizzle') {
        weatherIcon.src = 'images/drizzle.png'}
        else if (data.weather[0].main === 'Mist') {
          weatherIcon.src = 'images/mist.png'}

          document.querySelector('.errorMsg').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
  weatherDisplay.style.display = 'block';
  checkWeather(input.value);
});