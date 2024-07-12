// DOM EVENTS

// ON CLICK => when  an element is clicked 

let btns = document.querySelectorAll("button");
function sayHello() {
    alert("Hello !");
}   
function sayName(){
    alert("ssh...!")
}
// for (btn of btns) {
//     btn.onclick = sayHello;
//     // onmouseenter  => when the mouse pointer enters in a specified element
//     btn.onmouseenter =function(){
//         this.style.backgroundColor="yellow";
//     }
// }


// Event Listners
 for(btn of btns){
    btn.addEventListener('click',sayHello);
    btn.addEventListener('click',sayName);
    btn.addEventListener('dblclick',sayName); // agar ham element ke upar dublle click kiye toh ye execute hoga
    
 }

 


