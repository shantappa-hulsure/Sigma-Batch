import {useState} from "react";
import Ticket from "./Ticket.jsx"
function Lottery(Sum,Num){
// function ko bi pass kar sakte as props agar age jaroorath pade toh deklena
    return(
        <div>
        <h1>welcome</h1>
        <Ticket Num={3} Sum={15} />
        <Ticket Num={5} Sum={30} />
        <Ticket Num={2} Sum={5} />
        <Ticket Num={4} Sum={20} />
        </div>
    )
}

export default Lottery;