var axios = require('axios');

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
const units = 'metric';

const getWeatherByCity = (city, apiKey) => {
  const params = {appid: apiKey, q: city, units};
  return axios.get(baseUrl, {params});
}

module.exports = {getWeatherByCity};
