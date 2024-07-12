function tickets(Num) {
    console.log(Num);
    let newTicket = Math.floor(Math.random() * Math.pow(10, Num));
    return newTicket;
  }
  
  function sum(Num, ticket) {
    let n = 0;
    let x = ticket;
    for (let i = 0; i < Num; i++) {
      n = n + (x % 10);
      x = Math.floor(x / 10);
    }
    return n;
  }
  
  export { tickets, sum };
  