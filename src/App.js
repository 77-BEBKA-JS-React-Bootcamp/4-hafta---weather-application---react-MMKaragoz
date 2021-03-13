import React, { useEffect, useState } from 'react';
import './App.scss'
import ForecastButton from './components/ForecastButton/ForecastButton';
import InfoCard from './components/InfoCard/InfoCard';
import Search from './components/Search/Search';

export default function App() {

    const [city, setCity] = useState("");
    const [search, setSearch] = useState("");
    const [weatherInfo, setWeatherInfo] = useState({});
    const [forecastDay, setForecastDay] = useState(1);

    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&days=${forecastDay}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherInfo(data)
        })
    }, [city, forecastDay])

    function handleKeyDown(event) {
      return event.keyCode === 13 && search.length > 1 ? setCity(search) : null;
    }

    function handleOnBlur() {
      return search.length > 1 ? setCity(search) : null;
    }

    function handleOnClick(days) {
      weatherInfo.forecast && setForecastDay(days)
    }

    return (
      <>
        <Search 
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => handleKeyDown(event)}
          onBlur={handleOnBlur}
        />
        <div className="buttons-wrapper">
          <ForecastButton
            innerHTML="1 day"
            onClick={() => handleOnClick(1)}
          />
          <ForecastButton
            innerHTML="2 days"
            onClick={() => handleOnClick(2)}
          />
          <ForecastButton
            innerHTML="3 days"
            onClick={() => handleOnClick(3)}
          />
        </div>
        <div className="cards-wrapper">
          {weatherInfo.location &&
            weatherInfo.forecast.forecastday.map((item) => (
              <InfoCard
                date={item.date}
                src={item.day.condition.icon}
                conditionText={item.day.condition.text}
                maxTemp={item.day.maxtemp_c}
                minTemp={item.day.mintemp_c}
              />     
            ))
          }
        </div>
      </>
    )
}
