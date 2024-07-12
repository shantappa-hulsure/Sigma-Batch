let val=prompt("Enter the max number");
let random=Math.floor(Math.random()*val)+1;
let count=0;
while(true){
    let guess=prompt("guess a number press 0 to exit ");
    if(guess==0){
     console.log("you have tried for " +(count+1)+"times" );
     break;
    }
    else{
     count++;
     if (parseInt(guess) == random){
        console.log("congrats you have done it at your "+count+" chance" );
        break;
     }
    }
}