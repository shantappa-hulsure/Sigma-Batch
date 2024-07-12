const mongoose = require('mongoose');
const {Schema}=mongoose;
main().then(()=>console.log("connection succeffull")). catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema=new Schema({
    item:String,
    price:Number,

})

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:'Order'
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("pre middleware");
// })
customerSchema.post("findOneAndDelete", async(customer)=>{
  if(customer.orders.length){
      let res= await Order.deleteMany({_id:{$in:customer.orders}})
    console.log(res);
  }
})








const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",customerSchema)
// const addCustomer =async()=>{
//    let cust1=new Customer({
//     name:"chinnu"
//    })
//    let order1=await Order.findOne({item:"chips"});
//    let order2=await Order.findOne({item:"choclate"});
//    cust1.orders.push(order1)
//    cust1.orders.push(order2)
//    await cust1.save();
// };
// addCustomer();

// const findCustomer =async()=>{
//     let result =await Customer.find({}).populate("orders");
//     console.log(result);
// }

// findCustomer();


// const addOrders =async()=>{
//    let res= await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"choclate",price:25},
//         {item:"chips",price:102},
//         {item:"biscuit",price:120},
//     ]);
//     console.log(res);
// }
// addOrders();



const addCust =async()=>{
    let newCust =new Customer({
        name:"hanuman"
    });
    let newOrder =new Order({
        item:"burger",
        price:120
    })
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("added new customer");
}
// addCust();

const delCust =async()=>{
  let data=  await Customer.findByIdAndDelete('667e866469940a1aedcce763')
    console.log(data);
}
delCust();


