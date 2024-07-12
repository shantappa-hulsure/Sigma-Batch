import {useState} from "react"
// import {ticket,win} from "./Lottery.js"
export default function Lottery(){
   let [tickets, setTickets] = useState(ticket());
   let isWinning=win(tickets)===15;
   function newTicket(){
    setTickets(ticket)
   }
   return(
    <div>
        <h1>{isWinning&&  "Lottery  Congratulations, you won ! "}</h1>
        <h1>{!isWinning&&  "Lottery "}</h1>
        <h2>Lottery Ticket={tickets} </h2>
        <button onClick={()=>newTicket()}>Buy New Ticket</button>
        </div>
    )
}

// lottery.js

// function ticket(){

//     let ticket =Math.floor(Math.random()*999);
//     // console.log("hello");
//     return ticket;
// }
// function win(ticket){

//     let n=0;
//     let tCopy=ticket;
//      let win=false;
//     for(let i=0;i<3;i++){
//         n=n+tCopy%10;
//         tCopy=Math.floor(tCopy/10);
//     }
//     console.log(n);
//     return n;
// }

// export {ticket,win}