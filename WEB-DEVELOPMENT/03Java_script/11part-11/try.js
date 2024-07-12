let h1= document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("Color changed!");
//         },delay)
//     })
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("color changed to red ");
//      return changeColor("yellow",1000)
// })
// .then(()=>{
//     console.log("color changed to yellow");
// })
// .catch(()=>{
//     console.log("error in updating color");
// })




 function changeColor(color, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed")
        },delay) 
    })
}

async function demo(){
    await changeColor("yellow",1000)
    await changeColor("red",1000)
    await changeColor("yellow",1000)
    await changeColor("red",1000)
}
demo();
