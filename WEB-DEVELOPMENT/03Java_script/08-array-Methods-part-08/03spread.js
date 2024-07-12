// let arr=[1,2,3,5,7,8,9,8,52,4,52,452,5,22,55555,0]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// console.log(...arr);  //individyal elements of array print karne ke liye use hota hai 



// Array literals
// let nums =[1,2,3,4,5,6,7,8,9];
// let nums2=[...nums,5 ,7,9,8];
// console.log(nums2);

// let string ="hello world";
// let chars= [...string ];
// console.log(chars);

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let nums=[...odd , ...even];
// console.log(nums) ;



//                   object literals
// let data={
//     name:"ssh",
//     email:"ssh@gmail.com",
//     password:"xyz522023",
// };
// let datacopy={...data ,id:987};
// console.log(datacopy);

let arr=[10,20,30,40,50];
let obj={...arr};//array ko spreads use karke agar objects meh store karna hai toh key array index hoga and value value rahega
console.log(obj);
