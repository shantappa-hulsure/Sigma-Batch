const mongoose = require('mongoose');
const {Schema}=mongoose;
main().then(()=>console.log("connection succeffull")). catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema=new Schema({
    username:String,
    address:[
        {
            _id:false,

        location:String,
        city:String
    },
    ]
});
const User=mongoose.model("User",userSchema);

const addUsers =async()=>{
    let user1=new User({
        username:"ssh",
        address:[
            {
            location:"221P Baker Street",
            city:"London"
        }]
    })
    user1.address.push({location:"glb",city:"bng"});
   let result =await user1.save();
   console.log(result);
}
addUsers();