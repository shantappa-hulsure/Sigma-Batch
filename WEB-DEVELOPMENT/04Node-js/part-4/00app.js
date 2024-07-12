const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port,()=>{
 console.log(`listening through port ${port}`);
});

app.get("/submit",(req,res)=>{
    let {user,password}=req.query;
    
    res.send(`calling through get. welcome ${user}`);
})
app.post("/submit",(req,res)=>{
   console.log(req.body);
    res.send("calling through post ");
})
