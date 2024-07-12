// let a=prompt("enter no of rows  you want")
// let b=prompt("enter no of columns  you want")
let a=8,b=8;

let cntnr=document.querySelector(".container");
for(let i=0;i<a;i++){
    let l =document.createElement("div")
    l.setAttribute("class","l1")
    cntnr.appendChild(l)
    for (let i=0;i<b;i++){
        let dv =document.createElement("div");
        dv.setAttribute("class","point1");
        l.appendChild(dv)
    }
}
