import {useState} from 'react';
import {getCitiesWeather} from '../services/WeatherApi';
import WeatherHistory from './WeatherHistory';
import WeatherInput from './WeatherInput';

const API_KEY = 'OPEN_WEATHER_MAP_API_KEY';

const Weather = () => {

  const [apiKey, setApiKey] = useState(localStorage.getItem(API_KEY));
  const [cities, setCities] = useState('');
  const [history, setHistory] = useState([]);

  const onSubmit = () => {
    console.log('Submit', cities);
    const cityArr = cities.split(',');
    getCitiesWeather(cityArr, apiKey).then(res => {
      const currentHistory = Object.entries(res.weather)
      .map(([city, temp]) => {
        return {
          city,
          temp
        };
      });
      const existingsHistory = history.filter(e => !cityArr.includes(e.city));
      setHistory([...currentHistory, ...existingsHistory]);
      localStorage.setItem(API_KEY, apiKey);
    });
  }

  return (
    <div className='Weather-Container'>
      <WeatherInput apiKey={apiKey} setApiKey={setApiKey} cities={cities} setCities={setCities} onSubmit={onSubmit} />
      <WeatherHistory history={history} />
    </div>
  );
}

export default Weather;
