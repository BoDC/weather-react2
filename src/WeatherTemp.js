import react from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemp(props) {
    return (
        <div className="WeatherTemp">
                <h1>{props.data.city}</h1>
               <p>
                   <CurrentDate date={props.data.date} />
                </p>
    
               <div className="row"> 
               <div className="col-5">
                   
                 {Math.round(props.data.temperature)}°C
                 <br />
                 <div className="float-left">
                 <WeatherIcon code={props.data.icon} />
                 <i> {props.data.description}</i>
                 </div>
               
                  
                
    </div>
    
               <div className="col-5">
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