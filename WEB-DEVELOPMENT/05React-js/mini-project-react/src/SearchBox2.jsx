import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox2({updateInfo}){
    const [city,setCity]=useState("");
    const [error,setError]=useState(false);
 
    const API_URL="http://api.openweathermap.org/data/2.5/weather"
    const API_KEY=   "f0e3dd9c2dbca2bebd6e94d583eb1514";

   
    let getWeatherInfo=async()=>{
        try{
         let response=await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let jsonResponse=await response.json();
         let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        }catch(err){
          throw err;
        }
        
    }



    function handleChange(event){
     setCity(event.target.value);
    }
    let handleClick=async (event)=>{
      console.log(city);
      event.preventDefault();
      setCity("")
      let newInfo= await getWeatherInfo()
      updateInfo(newInfo);
    }

    return(
        <div>
        <form action="">
        <TextField id="outlined-basic" label="Enter-City" variant="outlined" value={city} onChange={handleChange} />
        <br /><Button variant="contained" onClick={handleClick}>Search</Button>

        </form>
        </div>
    )
}