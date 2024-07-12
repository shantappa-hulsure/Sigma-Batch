import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from 'react'

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
   const API_URL="http://api.openweathermap.org/data/2.5/weather"
   const API_KEY=   "f0e3dd9c2dbca2bebd6e94d583eb1514";
   
   let getWeatherInfo=async()=>{
    try{
    let response=await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    // console.log(jsonResponse);
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        // pressure:jsonResponse.main.pressure,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
    }
    console.log(result);
    return result;
}
catch(err){
throw err;
}
}


function handleChange(evt){
    setCity(evt.target.value)
}
let handleClick= async(evt)=>{
    try{

        evt.preventDefault();
        console.log(city);
        setCity("")
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }catch{
        setError(true);
    }
    // console.log("ji");
    
}
  
    return(
        <form action="">

        <div>
          <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br />    <br />  <Button variant="contained" type='submit' onClick={handleClick}>
        Search
      </Button>
      {error&& <p>No such plaace exists  !</p> }
        </div>
        </form>
    )
}