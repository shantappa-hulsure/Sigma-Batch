// // callback Hell
// h1=document.querySelector("h1")

// function changeColor(color,delay,nextColorChange){
// setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColorChange) nextColorChange();
// },delay);
// }

// changeColor("red" ,1000,()=>{
// changeColor("yellow" ,1000,()=>{
// changeColor("blue" ,1000,()=>{
// changeColor("green" ,1000,()=>{
// changeColor("grey" ,1000)
// })
// })
// })
// })

// // call back hell se bachne ke liye Promises Async and await ka use kiya jata hai



// CallBack hell

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//        failure();
//     }
// }
// savetoDb(
//     "apna college",
//     ()=>{
//         console.log("success : your data was saved :");
//         savetoDb("hello world",()=>{console.log("Succeess2: data2 saved");
//         savetoDb("hay buddy",()=>{console.log("Succeess3: data3 saved");},
//         ()=>{console.log("failure3 : data3 not saved ")} );
//         },
//         ()=>{console.log("failure2 : data2 not saved ")} 
//     )
//     },
//     ()=>{
//         console.log(" failure : weak connection data not saved ");
//     }
// )

          // promise is an object and it has   resolve and reject in it
 
// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10 )+1;
//         if(internetSpeed>4){
//             resolve("data was saved Good Internet connection");  //promise meh 3 states rahte fullfilled(resolved) pending rejected(error)
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     })
// }

// savetoDb("apna college");

// Methods od Promises
//     if fullfilled  then -> .then()
//     if rejected   then -> .catch() / .error()
//     if pending    then -> .finally()

// let request=savetoDb("apna college");
// request
// .then(()=>{
    //  console.log("promise resolved");
    // })
    // .catch(()=>{
        //     console.log("promise rejected");
        // })
        
        
        
        //   promise chaining
        // savetoDb("apna college")
        // .then((result)=>{
        //  console.log("data1 saved : ");
        //  console.log(result);
        //  return savetoDb("hello world")
        // })
        // .then((result)=>{
        //     console.log( "data2 saved : " );
        //     console.log(result);
        //     return savetoDb("ssh SLY")
        // })
        // .then((result)=>{
        //     console.log("data 3saved");
        //     console.log(result);
        // })
        // .catch((error)=>{
        //     console.log("promise rejected");
        //     console.log(error);
        // })
        



h1= document.querySelector('h1');
function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     h1.style.color=color;
    resolve("color changed..!");
    },delay)
    })
}

changeColor( 'red',1000)
.then(()=>{
    console.log("red color was updated ");
    return changeColor("green ",1000);
})
.then(()=>{
    console.log("Green color is applied ")
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color is applied");
})
.catch(()=>{
    console.log("Failed to update color");
}
)