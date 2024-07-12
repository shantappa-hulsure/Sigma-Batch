const express =require("express");
const app=express();

const expressError =require("./expressError")
// app.use((req,res)=>{ //execution band karega 
//     console.log("hi i am a middleware");
//     res.send("middleware finished")
// })  
// app.use((req,res,next)=>{
//     console.log("hi i am a middleware");
//    next();  
// })  

// LOGGER

// app.use((req,res,next)=>{
//     req.time=new Date(Date.now());
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

// app.use("/random",(req,res,next)=>{})  //ye bas un links pe work hoga jo random se start hoga..

// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token==="giveaccess"){
//         next();
//     }
//     res.send("access denied")
// })
const checkToken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
   throw new expressError(401,"access denied") //kuch error kudse bhejna hai toh 
   res.send(err);
})


app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});


app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/err",(req,res)=>{
   abcd=abcd;
})


app.get("/admin",(req,res)=>{
    throw new expressError(420," access to this page is forbidden")
})

// error middleware
app.use((err,req,res,next)=>{
    // console.log("hame chaiye toh error ko aisa bi bhej sakte");
let {status=500,message="error occured"}=err;
    res.status(status).send(message);
    // res.send(err);
    
})













// default  agar kuch galath hai toh ye work hoga
app.use((req,res)=>{
    res.send("page not found");
})
app.listen(8080,()=>{
    console.log("server listening through port 8080 ");
})
