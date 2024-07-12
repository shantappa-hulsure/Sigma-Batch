// function sum(...args){
//    return args.reduce((sum,el)=>sum+el); //sare elements add karne ke liye hai
// }
// console.log(sum(1,2,3,4));

function min(...args) {
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        }
        else {
            return min;
        }
    }
    )
}
console.log(min(15,8,665,2,52,98,555,652,5,5,20));














