let cntnr=document.querySelector(".container")
for(let i=0;i<5;i++){
    let line=document.createElement("div")
    line.setAttribute("class","line");
    cntnr.appendChild(line);
    for(let i=0;i<5;i++){
        let box=document.createElement("div")
        box.setAttribute("class","box" );
        line.appendChild(box)
}
}

let square=document.querySelector(".box");
// for(square of squares){
square.addEventListener('click', function(event) {
    // Get the element's bounding rectangle
    console.log(event);
    var rect = square.getBoundingClientRect();
    
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var borderLeftWidth = parseInt(window.getComputedStyle(square).borderLeftWidth);
    var borderTopWidth = parseInt(window.getComputedStyle(square).borderTopWidth);
    var borderRightWidth = parseInt(window.getComputedStyle(square).borderRightWidth);
    var borderBottomWidth = parseInt(window.getComputedStyle(square).borderBottomWidth);
    
    // Determine which border was clicked and change its color
    if (x < borderLeftWidth) {
        
        square.style.borderLeftStyle='solid';
        square.style.borderLeftColor = 'purple';
    } else if (x > rect.width - borderRightWidth) {
        square.style.borderRightStyle='solid';
        square.style.borderRightColor = 'purple';
    } else if (y < borderTopWidth) {
        square.style.borderTopStyle='solid';
        square.style.borderTopColor = 'purple';
    } else if (y > rect.height - borderBottomWidth) {
        console.log("bottom clicked");
        square.style.borderBottomStyle='solid';
        square.style.borderBottomColor = 'purple';
    } else {
        console.log('Inside element clicked');
    }
})
// }
