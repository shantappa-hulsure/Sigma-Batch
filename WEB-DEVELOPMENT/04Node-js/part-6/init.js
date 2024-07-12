const mongoose =require("mongoose");
const Chat=require("./models/chat.js");
main().then(console.log("connection succefful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

Chat.insertMany([
    {
    from:"ssh",
    to:"sly",
    msg:"hay its me SSH.....!",
    created_at: new Date()
},
    {
    from:"s1",
    to:"sl1",
    msg:"hay its me S1..!",
    created_at: new Date()
},
    {
    from:"s2",
    to:"sl2",
    msg:"hay its me S2.....!",
    created_at: new Date()
},
    {
    from:"s3",
    to:"sl3",
    msg:"hay its me S3.....!",
    created_at: new Date()
},
    {
    from:"s4",
    to:"sl4",
    msg:"hay its me S4.....!",
    created_at: new Date()
},

])