import React, { useState } from 'react';
import './Weather.css';

const api = {
  key: "592c3de9fd42bd6c6ce9567b83a6a6f2",
  base: "https://api.openweathermap.org/data/2.5/"
};

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }

  const getBackgroundClass = () => {
    if (typeof weather.main != "undefined") {
      const weatherMain = weather.weather[0].main.toLowerCase();
      switch (weatherMain) {
        case 'clear':
          return 'clear';
        case 'clouds':
          return 'cloudy';
        case 'rain':
          return 'rainy';
        case 'snow':
          return 'snowy';
        case 'drizzle':
          return 'drizzle';
        case 'thunderstorm':
          return 'thunderstorm';
        default:
          return 'default';
      }
    }
    return 'default';
  }

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <div className='search-box'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search any location'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <main>
        {(typeof weather.main != "undefined") ? (
          <div className='weather-card'>
            <div className='loc'>
              {weather.name}, {weather.sys.country}
            </div>
            <div className='date'>
              {dateBuilder(new Date())}
            </div>
            <div className='weather'>
              {weather.weather[0].main}
            </div>
            <div className='temp'>
              {Math.round(weather.main.temp)}°C
            </div>
          </div>
        ) : (
          <div className='weather-card'>
            <div className='loc'>
              Enter a location to get weather information
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Weather;
