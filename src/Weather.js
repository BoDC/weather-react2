import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherTemp from "./WeatherTemp";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });

 function handleResponse(response) {
    setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    icon: response.data.weather[0].icon,
    });
}

function search() {
    const apiKey = "85495f1b2ff0528cdd21810a2c5888e7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
}

function handleSubmit(event) {
    event.preventDefault();
    search();

}

function changeCity(event) {
    setCity(event.target.value);
}

    if (weatherData.ready) {
        return (
            <div className="Weather">
         <form onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Enter a city"
            autocomplete="off"
            Class= "zoeken"
            onChange={changeCity}
          />
          <input type="submit" value="Search" className="btn btn-secondary btn-sm"  />
          </form>

          <WeatherTemp data={weatherData}/>
          <WeatherForecast city={weatherData.city}/>
    </div>
        );

    } else {
        search();
return "loading...";
    }
    
}