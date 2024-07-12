// const {faker} =require("@faker-js/faker");   //sql keliye hai
// let getRandomUser=()=>{
    
//         return {
//           userId: faker.string.uuid(),
//           username: faker.internet.userName(),
//           email: faker.internet.email(),
//           password: faker.internet.password(),
//         };
// }
// // console.log(getRandomUser());


// const mysql=require("mysql2");
// const connection =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     database:'sigma',
//     password:'_____12345'
// });
// try{
//  connection.query("show tables",(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     })

// }catch(err){
//     console.log(err);
// }
// connection.end();