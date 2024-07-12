let num =[1,7,3,4,5];
 let total=num.reduce((res,el)=>res+el)
 console.log(total); 
let arr=[12,5,4,8,72,5,45,7,55,4,5]
let max=arr.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else{
        return res;
    }
})
console.log(max);