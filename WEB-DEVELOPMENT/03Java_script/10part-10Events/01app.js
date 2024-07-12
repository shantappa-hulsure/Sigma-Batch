let btn =document.querySelector("button")
btn.onclick=function(){
    let a=Math.floor(Math.random()*255 +1)
    let b=Math.floor(Math.random()*255 +1)
    let c=Math.floor(Math.random()*255 +1)
    let h1=document.querySelector('h1')
    h1.innerText= "rgb("+a+","+b+","+c+")"
    let div=document.querySelector("div");
    div.style.backgroundColor="rgb("+a+","+b+","+c+")"; 
}

