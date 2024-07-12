// let jsonRes='{"fact":"Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.","length":182}'
// let validRes=JSON.parse(jsonRes);
// console.log(validRes.fact);

// Ajax=>Asynchronous JavaScript and XML

let url="https://catfact.ninja/fact"
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url)
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.fact);
// })




//    async await use karke
 async function getFacts(){
    let res=await fetch(url);
    let data=await  res.json();
    console.log(data.fact);
 }