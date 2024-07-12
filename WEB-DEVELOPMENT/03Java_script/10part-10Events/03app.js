let input=document.querySelector("input");
input.addEventListener( "keydown" , function ( event ) { //keydown se paa chalta hai keys kite bar press kiya gaya hai includes backspace space and all
// keyup use kiya toh ham key press karke chodne ke bad oh consider hojayega as +1
// console.log("key =",event.key);
// console.log("code =" ,event.code);
//   console.log("key was pressed");

console.log("code =" ,event.code);
if(event.code=="ArrowUp"){
    console.log("character moves forward");
}else if(event.code=="ArrowDown"){
    console.log("character goes backward");
}else if (event.code == "ArrowLeft") {
    console.log( "Character moves left" );
}else if(event.code=="ArrowRight"){
    console.log( "Character moves right" )  ;
}
})
