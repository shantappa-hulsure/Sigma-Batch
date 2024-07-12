let a = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let btns = document.querySelectorAll("button");
let val = "X";
let turn = 1;
for (btn of btns) {
    btn.addEventListener("click", function () {
        if (this.innerText != "X" && this.innerText != "O") {
            this.innerText = val;
            if(val=="X"){
           this.style.backgroundColor="#92DCE5";
        }
        else{
                this.style.backgroundColor="#F7EC59";
                
            }
            a[this.value] = turn;
            console.log(a);
            changeturn();
            let cw = checkWin();
        }
    })
}
function changeturn() {
    if (turn == 1) {
        turn = 2;
        val = "O";
    }
    else if (turn == 2) {
        turn = 1;
        val = "X"
    }
}
let body = document.querySelector("body");

function p1(){
    body.classList.add("green");
    body.innerText=`Player-1 wins`
    let btn=document.createElement('BUTTON');
    btn.classList.add("btn");
    btn.innerText="Play Again";
    body.appendChild(btn);
    btn.onclick=function(){location.reload()}
    
}
function p2(){
    body.classList.add("green");
    body.innerText=`Player-2 wins`
    let btn=document.createElement('BUTTON');
    btn.classList.add("btn");
    btn.innerText="Play Again";
    body.appendChild(btn);
    btn.onclick=function(){location.reload()}
}
function draw(){
    body.classList.add("green");
    body.innerText=`It was a Draw !`
    let btn=document.createElement('BUTTON');
    btn.classList.add("btn");
    btn.innerText="Play Again";
    body.appendChild(btn);
    btn.onclick=function(){location.reload()}
}
function checkWin() {
    if ((a[0] == a[1]) && (a[0] == a[2]) && (a[0] != 0)) {
        if (a[0] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();
        } return 0;
    }
    else if ((a[3] == a[4]) && (a[3] == a[5]) && (a[3] != 0)) {
        if (a[3] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();

        } return 0;
    }
    else if ((a[6] == a[7]) && (a[6] == a[8]) && (a[6] != 0)) {
        if (a[6] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();

        } return 0;
    }
    else if ((a[0] == a[3]) && (a[0] == a[6]) && (a[3] != 0)) {
        if (a[0] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();
        } return 0;
    }
    else if ((a[1] == a[4]) && (a[4] == a[7]) && (a[1] != 0)) {
        if (a[1] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();
        } return 0;
    }
    else if ((a[2] == a[5]) && (a[8] == a[2]) && (a[2] != 0)) {
        if (a[2] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();
        } return 0;
    }
    else if ((a[0] == a[4]) && (a[0] == a[8]) && (a[8] != 0)) {
        if (a[2] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
            p2();
        } return 0;
    }
    else if ((a[2] == a[4]) && (a[6] == a[2]) && (a[2] != 0)) {
        if (a[2] == 1) {
            console.log("Player 1 is winner");
            p1()
        }
        else {
            console.log("player 2 is winner");
        }
        p2();
        return 0;
    }
    else if (a.indexOf(0) == -1) {
        console.log("It's a draw.");
        draw();
        return 0;
    }
}
