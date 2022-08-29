const express = require('express');
const weatherMapApi = require('../services/weatherMapApi');
const router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const cities = req.body.cities || [];
  console.log(req.headers);
  const apiKey = req.headers['apikey'];
  const weather = {};
  const promises = cities.map(city => {
    return weatherMapApi.getWeatherByCity(city, apiKey).then(apiRes => {
      const temparature = apiRes.data.main.temp;
      weather[city] = temparature + 'C';
    }).catch(err => {
      console.log(err);
      throw error(500, 'Internal Server Error');
    });
  });

  Promise.all(promises).then(() => res.json({weather})).catch(err => res.json(err.status || 500, err.message || 'Internal Server Error'));

});


const error = (status, message) => {
  return {status, message};
}

module.exports = router;
