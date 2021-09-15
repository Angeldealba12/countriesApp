import React from "react";
import { useEffect, useState } from "react";
import OpacityIcon from '@material-ui/icons/Opacity';
import AcUnitIcon from '@material-ui/icons/AcUnit';


const Weather = ({ city }) => {
  const [main, setMain] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();
  const [country, setCountry] = useState();
  const [temp, setTemp] = useState();
  const [huminity, setHumidity] = useState();
  const [wind, setWind] = useState();

  const toCelcius = (kelvins) => {
      return Math.round(kelvins - 273.15);
  }

  useEffect(() => {
    if (city) {
      const logic = async () => {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d73698a7658ffbde11a462cf4e231472`
        );
        const response = await data.json();
        setMain(response.weather[0].main)
        setDescription(response.weather[0].description)
        setIcon(response.weather[0].icon)  
        setCountry(response.sys.country) 
        setTemp(toCelcius(Math.round(response.main.temp)))
        setHumidity(response.main.humidity)
        setWind(response.wind.speed)
      };
      logic();
    }
  }, [city]);


  return (
    <div className="weather-box">
      <h2>Current Weather</h2>
      <div className="weather-info">
      <h3>{city} / {country} </h3>
        <img alt={city} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <p>{main}</p>
        <p>{description}</p>
        <p className="temp">{temp}°C</p>
        <p><OpacityIcon/>  Humidity: {huminity}%</p>
        <p><AcUnitIcon/>  Wind: {wind} </p>
      </div>
    </div>
  );
};

export default Weather;
