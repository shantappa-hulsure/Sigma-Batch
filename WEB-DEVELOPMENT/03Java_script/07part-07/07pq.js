let id=setInterval(()=>{
   console.log("hello world ");
},2000)
setInterval(()=>{
    clearInterval(id)
},11000)