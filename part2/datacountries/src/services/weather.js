import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = import.meta.env.VITE_WEATHER_KEY

const get = (city) => {
  return axios
    .get(`${url}?q=${city}&units=metric&APPID=${apiKey}`)
    .then(response => {
      return {
        city,
        temp: response.data.main.temp,
        windSpeed: response.data.wind.speed,
        iconPath: getPathIcon(response.data.weather[0].icon)
      }
    })
}

const getPathIcon = icon => `https://openweathermap.org/img/wn/${icon}@4x.png`

export default { get }