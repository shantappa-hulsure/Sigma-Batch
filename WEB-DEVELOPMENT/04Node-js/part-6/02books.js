const mongoose =require("mongoose");  //mongodb

main().then(console.log("connected succefully"))
.catch(err=>console.log(err));
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema({
    title:{
      type:String,
      required:true
    },
    author:String,
    price:Number //ye dono bi objects ke tarah chaiye toh likh sakte magar ye uska i shortform hai
})

const Book =mongoose.model("Book",bookSchema);

let book1=new Book({
    title:"Mathematics XII",
    author:"RD SHARMA",
    price:15000,
    
});
book1.save()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})