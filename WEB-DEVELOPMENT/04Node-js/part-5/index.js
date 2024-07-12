const express= require("express");
const app=express();
const port =8080;

const {v4:uuidv4}=require("uuid");
// uuidv4();

const methodOverride=require("method-override")
app.use(methodOverride('_method'))


app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static("public"))


let posts=[
    {
        id:uuidv4(),
        username:"ssh",
        content:"i love coding..!"
    },
    {
        id:uuidv4(),
        username:"sly",
        content:"loves dancing"
    },
    {
        id:uuidv4(),
        username:"sl",
        content:"plays FF"
    }
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let newId=uuidv4();
    let {username,content}=req.body;
    posts.push({newId,username,content});
    res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let post=posts.find((post)=>post.id===id);
//    console.log(post);
   res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let{ id }=req.params;
   let newContent=req.body.content;
   let post=posts.find((post)=> id===post.id);
   post.content=newContent;
   console.log(post);
    res.redirect("/posts")
})


app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post =posts.find((p)=> id===p.id);

    res.render("edit.ejs",{ post });
})

app.delete("/posts/:id",(req,res)=>{
    let{id}=req.params;
   posts =posts.filter((p)=> id===p.id);
   res.redirect("/posts");
})


app.listen(port,()=>{
    console.log(`listening through ${port}`);
})
