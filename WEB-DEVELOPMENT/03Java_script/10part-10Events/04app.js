// Extracting from Data
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
    //     event.preventDefault();  //iska matlab hai ham jo bi default kam hote use roka jayega next page ko redirect nahi hoga
    //     let inp=document.querySelector("input");
    //     console.log(inp.value);
    
    // });
    
    let form=document.querySelector("form");
let user=document.querySelector( "#user" );
let pass=document.querySelector("#pass");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value}, your password is set to ${pass.value}`);
// })


// change event input  event

user.addEventListener("change",function(){ // ye oh box ke bahar curson click karne ke bad i changes dikata hai
    console.log("input changed");
    console.log("final value= ", this.value);
})
user.addEventListener("input",function(){ // yak baar type kiya toh bi ye changes dikata hai 
    console.log("input changed");
    console.log("final value= ", this.value);
})