const arrayavg =(arr)=>{
    let total=0;
    for(let  i of arr){
        total+=i;
    }
    return total/arr.length;
}
let arr=[1,2,3,4,5,6,7,8];
console.log(arrayavg(arr));