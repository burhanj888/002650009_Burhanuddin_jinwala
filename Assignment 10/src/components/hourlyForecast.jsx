import React, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";



export const HourlyForecast = () => {
    const location = useLocation();
    var hourly = location.state.hourly;
    var isToggled = location.state.isToggled;
    let today = new Date().toISOString().slice(0, 10);
    var degree = '\u00b0' + 'C';

    const dates = [];

    for (let i=0;i<hourly.length;i++)
    {
        const temporary = hourly[i].dt_txt;
        if(temporary.split(" ")[0] === today)
            {
                console.log(hourly[i]);
                if(isToggled) { 
                    hourly[i].main.temp = ((hourly[i].main.temp*9/5)+32);
                    degree = '\u00b0' + 'F';
                }
                dates.push(<option time = {temporary.split(" ")[1]} temp = {hourly[i].main.temp} temp_min = {hourly[i].main.temp_min} temp_max = {hourly[i].main.temp_max} image = {hourly[i].weather[0].icon} key = {i}>{i}</option>)
            }
        else if(temporary.split(" ")[0] !== today)
            break;
    }
    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const link = days[now.getDay()];
    const dateval = useParams();
    
    return (
        
        <div className="container-forecast">
            <b>Hourly forecast for {today} ({link})</b>
            {console.log(dates)}
            <div style={{textAlign:'center', width:'100%'}}>
            {dates.map(date=>(
                
                <div className="forecast-space" key={date.key}>
                    <span className="forecastDate">{date.props.time} </span>
                    <span>
                    <img
                    src={`http://openweathermap.org/img/wn/${date.props.image}@2x.png`}
                    alt=""
                    /><br/>
                        <b>Temp: {Math.round(date.props.temp*10)/10} {degree}</b><br/>  
                    </span>
                </div>
            ))}
            </div>
            <br/>
            <Link to="/" className="linkToForecast" >
                <button class="return-btn">Return</button>
            </Link>
        </div>
    );
}


// const mapStateToProps = (state) => ({
//     hourlyData : state
// });