const mongoose =require("mongoose");  //mongodb

main().then(console.log("connected succefully"))
.catch(err=>console.log(err));
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User =mongoose.model("user",userSchema)

const user1 =new User({
    name:"ssh",
    email:"ssh@gmail.com",
    age:19
});
// user1.save().then(console.log("done")).catch((err)=>{console.log("failed");});

// // insert many can be done as 
// User.insertMany([
//     {name:"a",email:"a@gmail.com",age:19},
//     {name:"b",email:"b@gmail.com",age:19},
//     {name:"c",email:"c@gmail.com",age:19}
// ]) 

// To find in mongodb

// User.find({name:"ssh"}).then((res)=>{
//     console.log(res);
// })


// to update in mongodb

// User.updateOne({name:"ssh"},{age:55})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.findOneAndUpdate({name:"ssh"},{age:14},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.deleteOne({name:"ssh"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})