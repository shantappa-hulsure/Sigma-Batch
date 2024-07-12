//        objects in js 

// let student={
//     Name:"sly",
//     class:13,
//     bf:"ssh",
//     age:18
// };   //objects aise i kam karte hai yad rakh 

// const car={  //bhai nesting of   object ho skta hai same sas arrays
//  brand:"Audio",
//  price:150000,
//  model:"xyshdsio",
//  1:"one "  //ye 1 string ke tarah consider kiya  jata hai 
// };
// console.log(car);
// console.log(car.price);
// car.price=20000;
// delete car[1];
// console.log(car);


// object of objects 
// const classinfo={
//     ssh:{
//         grade:"A+",
//         city:"glb"
//     },
//     love:{
//         grade:"pyar",
//         city:"heart"
//     },
//     sly:{
//         grade:"A+",
//         city:"bnglr"
//     }
// };
// console.log(classinfo.ssh.grade);

// const classinfo=[
//     {
//         name:"ssh",
//         grade:"A+",
//         city:"glb"
//     },
//    {   
//         name:"pyar",
//         grade:"pyar",
//         city:"heart"
//     },
//     {   
//         name:"sly",
//         grade:"A+",
//         city:"bnglr"
//     }
// ];
// console.log(classinfo);



// math objects

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.abs(-98));  //negative tha toh +ve val deta hai
// console.log(Math.pow(5,2));
// console.log(Math.floor(5.8));//decimal hatake integer deta hai
// console.log(Math.ceil(5.8));//next integer deta hai highest integer round of
// console.log(Math.random());// 0 to 1 random number generate karta hai decimal meh

// generating of random number
// let num= Math.random();
// num=num*10;   
// num=Math.floor(num);
// num=num+1;
// console.log(num);
let random=Math.floor(Math.random()*10)+1;