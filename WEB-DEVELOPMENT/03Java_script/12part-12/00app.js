//              ASYNC KEYWORD
// async function greet(){
//     throw "some random error "
//     return "hello !";
// }

// greet()
//  .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was ", result);
//  })
//  .catch((error)=> {
//     console.log("promise was rejected");
//     console.log("error was", error)
//  })

//  let demo= async()=>{
//     return 5;
//  };



//                AWAIT KEYWORD

// function getNum(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//        },1000);
//     })
// }
// async function demo(){
//   await getNum();  //jab thak ye await call complete nahi hogi tab tak dusre async functions call nahi hogi
//    await getNum();
//   await getNum();
// }



//      COLOR CHANGE ACTIVITY USING ASYNC AND AWAIT KEYWORDS
 let h1= document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let num= Math.floor(Math.random() *10);
           if(num>5){
            reject();
           }
            h1.style.color=color;
            console.log(color + " color is applied");
            resolve("color changed!")
        },delay)
    })
}

async function demo(){
    try{
        await  changeColor("red",1000)
        await   changeColor("orrange",1000)
         await changeColor("blue",1000)
          changeColor("green",1000)
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=5;
    console.log("a = ",a);
}



// handling  rejections with await
