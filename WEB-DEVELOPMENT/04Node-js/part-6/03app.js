const express =require("express");
const app = express();
const path=require('path')
const methodOverride=require("method-override")
const ExpressError=require("./ExpressError.js")

app.use(methodOverride("_method"))
const Chat=require("./models/chat.js");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})
app.use(express.urlencoded({extended:true}))
const mongoose=require("mongoose");
const { log } = require("console");

main().then(console.log("connection succefful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

// let chat1=new Chat({
//     from:"ssh",
//     to:"sly",
//     msg:"hay its me SSH.....!",
//     created_at: new Date()
// })

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


app.get("/chats",async(req,res)=>{
let chats=await Chat.find();
// console.log(chats);
res.render("index.ejs",{chats})
})

app.get("/chats/new",async(req,res)=>{
    res.render("new.ejs")
   
})
// asynchronus blocks ko try catch me daldo chaye then next ho ya nah
app.post("/chats",(req,res)=>{
  try{
    let {from,msg,to}=req.body;
    let newChat=new Chat({
       from: from,
       msg:msg,
       to:to,
       created_at:new Date()
    });
  }
  catch(err){
  next(err);
  }
 console.log(newChat);
 newChat.save();
 res.redirect("/chats");
})


// Wrapasync function ham ayncWrap use karke har jage ka try catch blocks ko hata sakte 
function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err))
  }
}

// error handling ke liye show route
// for asynchronus ham throw nahi next use karna padta hai
app.get("/chats/:id",async(req,res,next)=>{
  try{
    let {id}=req.params;
    let chat= await Chat.findById(id);
    if(!chat){
      next(new ExpressError(404,"chat not found"))
    }
    res.render("edit.ejs",{chat})
  }catch(err){
    next(err);
  }
  });


// edit
app.get("/chats/:id/edit",asyncWrap(async(req,res)=>{
    let id=req.params.id;
   let chat =await  Chat.findById(id);
   res.render("edit.ejs",{chat});
}))
app.put("/chats/:id",async(req,res)=>{
let {id}=req.params;
let{msg: newmsg}=req.body;
let updatedChat =await Chat.findByIdAndUpdate(id,{msg:newmsg});
res.redirect("/chats")
})
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
})

app.get("/",(req,res)=>{
    res.send("root is working");
});
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="ReferenceError"){
    console.log("please folow rules");
  }
  next(err);
})

app.use((err,req,res,next)=>{
  let {status=500,message="some error occured"}=err;
  res.status(status).send(message)
})
