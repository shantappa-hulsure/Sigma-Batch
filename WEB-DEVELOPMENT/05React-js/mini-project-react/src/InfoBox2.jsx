import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox2({info}){
    
    const INIT_URL="https://images.unsplash.com/photo-1632926252975-b2e237fb3842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"

    return(
        <div>
        <br /><br /><hr />      
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature={info.temp} &deg;C</div>
         <div>Humidity={info.humidity}</div>
         {/* <div>Feelslike={info.feelslike}</div> */}
         <div>Min-Temp={info.tempMin}</div>
         <div>Max-Temp={info.tempMax}</div>
            <p> The weather can be described as {info.temp} and feels like {info.feelslike}</p>   
          
       </Typography>
      </CardContent>
     
    </Card>
  
        </div>
    )
}