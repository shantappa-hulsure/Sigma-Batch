let num=[1,2,3,4,5,6];
let double=num.map(function(el){
    return el*2;
})
console.log(double);

let even=num.filter((num)=>(num%2==0));
console.log(even);

// every and some

let arr=[2,4,6,8,9];
console.log(arr.every((el)=>el%2==0));
console.log(arr.some((el)=>el%2==0));
