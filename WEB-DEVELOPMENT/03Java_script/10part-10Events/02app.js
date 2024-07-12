// let p=document.querySelector("p")
// p.addEventListener("click",function(){
//     console.log("paragh was clicked");
// })
// let box=document.querySelector("div");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// })


//     this in Event Listeners

let btn=document.querySelector("button");
let p=document.querySelector("p");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
  
function changecolor(){
   console.log(this.innerText);
    this.style.backgroundColor="yellow";
}

btn.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
