import { useState } from "react";
import InfoBox2 from "./InfoBox2";
import SearchBox2 from "./SearchBox2";

export default function WeatherApp2(){
   const [weatherInfo,setWeatherInfo]=useState({
    city:"delhi",
    feelslike:24.84,
    temp:25.05,
    humidity: 47,
    tempMin:22,
    tempMax:28,
    weather:"haze"
})

  let updateInfo =(newInfo)=>{
    setWeatherInfo(newInfo)
  }
    return(
        <div>
            <h2>Weather App By Ssh</h2>
            <SearchBox2  updateInfo={updateInfo}/> 
            <InfoBox2 info={weatherInfo}/>
        </div>
    )
}