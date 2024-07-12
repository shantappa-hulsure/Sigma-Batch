let div =document.querySelector("div");
let ul =document.querySelector("ul");
let lis=document.querySelectorAll("li");


div.addEventListener("click",function(){
    console.log("div was clicked");
})
ul.addEventListener("click",function(event){
   event.stopPropagation(); //bass ul ka console log pe print hoga
    console.log("ul was clicked");
})
for(li of lis){
li.addEventListener("click",function(event){
    event.stopPropagation(); //bass li ka log pe print hoga
    console.log("li was clicked");
})}