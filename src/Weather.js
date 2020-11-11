import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
 const [weatherData, setWeatherData] = useState({ ready: false });
 function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    city: response.data.name,
    date: "Wednesday 17:00",
    })
    
    
      }

    if (weatherData.ready) {
        return (
            <div className="Weather">
         <form >
            <input
            type="search"
            placeholder="Search city"
            autocomplete="off"
            Class= "zoeken"
          />
          <input type="submit" value="Enter" className="btn btn-secondary btn-sm" />
          </form>
    
                <h1>{weatherData.city}</h1>
               <p>{weatherData.date}</p>
    
               <div className="row"> 
               <div className="col-5">
                   
                 {Math.round(weatherData.temperature)}°C
                 <br />
                   <i className="fas fa-sun"> {weatherData.description}</i>
                
    </div>
    
               <div className="col-5">
                   <ul>
                    <li>
              <i className="fas fa-wind"></i>
              <span>  {weatherData.wind} </span>
              km/h
            </li>
           
            <li>
              <i className="fas fa-tint"></i>

              <span>   {weatherData.humidity}</span>%
            </li>
                   </ul>
               </div>
               </div>
               </div>
        )
    } else {

  const apiKey = "84f9934b2b326e36e6485d8b518ae65b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "loading...";
    }
    
}