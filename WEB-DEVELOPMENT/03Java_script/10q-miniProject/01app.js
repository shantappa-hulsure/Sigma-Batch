let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
let body = document.body;
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
})

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash")},250)
}

function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash")
   },250) 
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
     
    let randIdx=Math.floor(Math.random()*3); 
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
    //console.log(randColor, randbtn,randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(index){
    if(userSeq[index]===gameSeq[index]){
      if(userSeq.length==gameSeq.length){
        setTimeout(function(){
            levelup();
        },1000)
      }
    }
    else{
        body.classList.add("red1")
        setTimeout(function(){
            body.classList.remove("red1")
        },500)
        h2.innerHTML=`Game Over ! your score was <b> ${level -1} </b> <br>   Press any key to start...`;
     reset();

    }
}

function btnPress(){
    userFlash(this)
    userColor=this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1)
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[]
    userSeq=[];
    level=0;
}
