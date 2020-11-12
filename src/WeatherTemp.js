import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit"
export default function WeatherTemp(props) {
    return (
        <div className="WeatherTemp">
                <h1>{props.data.city}</h1>
               <p>
                   <CurrentDate date={props.data.date} />
                </p>
    
               <div className="row"> 
               <div className="col-5">
                 <WeatherUnit celsius={props.data.temperature} /> 
                
                 <br />

                 <div className="float-left">
                 <WeatherIcon code={props.data.icon} />
                 <i className="info"> {props.data.description}</i>
                 </div>
               </div>
    
               <div className="col-4">
                   <ul>
                    <li>
              <i className="fas fa-wind"></i>
              <span>  {props.data.wind} </span>
              km/h
            </li>
           
            <li>
              <i className="fas fa-tint"></i>

              <span>   {props.data.humidity}</span>%
            </li>
                   </ul>
               </div>
               </div>
               </div>
               
    );
}