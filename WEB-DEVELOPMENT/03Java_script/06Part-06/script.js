// function xyz(a,b,c){
//     return a+b+c;
// }
// console.log(xyz(xyz(5,10,5),10,10));



// function scope
/*
   Variable defined inside a function are not accessible (visible) from outside the function 
*/
//global Scope
/* 
   Global Scope ka matlab hai kahi bi declare karo in the code outside  any function
*/
// Block scope
/*
  Block scope ka matlab hota hai tu { curly brace ke andar use kiya toh uska scope sirf andar i rahta hai}
*/
// Lexical Scope
/*
  Lexicak Scope bole toh parent function ka variable  child function meh use kar sakte ulta psbl nahi hai 
*/



 // nameless function

// let sum=function(a,b)
// {return a+b;}
// console.log(sum(10,20));

// function multipleGreet(func, count){   //higher order function ka matlab taking other function as variable
//     for(let i=1;i<count;i++){
//         func();
//     }
// }
// function greet(){
//     console.log("hello");
// }
// multipleGreet(greet,3);


// functions agar objects meh use kiye toh method bolte

// const calculator={
//     add: function(x,y){ return x + y},
//     subtract : function(x ,y ) { return x - y },
//     multiply : function(x ,y ){ return x * y }
// }

//  or can be written as
//  const calculator={
//     add(x,y){return x+y},
//     sub(x,y){return x-y},
//     mul(x,y){return x*y}
//  }
// console.log(calculator.add(5,6 ));
