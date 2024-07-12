import React, { useState } from 'react';
import { tickets, sum } from './Ticket.js';

function Ticket({ Num = 3, Sum = 15 }) {
  const [ticket, setTicket] = useState(0);

  function newTicket() {
    const newTicketValue = tickets(Num);
    setTicket(newTicketValue);
  }

  const isWinning = sum(Num, ticket) === Sum;

  return (
    <div>
      <h1>New Ticket = {ticket}</h1>
      <button onClick={newTicket}>Generate Ticket</button>
      {isWinning && <p>Congratulations! You have a winning ticket.</p>}
    </div>
  );
}

export default Ticket;
