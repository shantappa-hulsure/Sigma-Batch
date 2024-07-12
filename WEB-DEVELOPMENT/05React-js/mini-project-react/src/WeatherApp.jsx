import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
   const [weatherInfo,setWeatherInfo]=useState({ city:"delhi",
    feelslike:24.84,
    temp:25.05,
    humidity: 47,
    tempMin:22,
    tempMax:28,
    weather:"haze"
})
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }

    return(
        <div>
            <h2>Weather App By Delta</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
