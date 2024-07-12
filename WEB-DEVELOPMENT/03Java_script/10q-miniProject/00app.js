let input =document.querySelector("input");
let ul= document.querySelector("ul") ;
let btn=document.querySelector('button');
btn.addEventListener('click',function(){
    let item=document.createElement('li')  ;
    item.innerText=input.value;
    let delbtn=document.createElement('button')  ;
    delbtn.innerText= "Delete"   ;
    delbtn.classList.add="delete";
    item.appendChild(delbtn)     ;
    ul.append(item);
    input.value=" ";
});
//  let delbtns=document.querySelectorAll( ".delete" )  ;
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         this.parentElement.remove()      ;
//     })
// }  ise bass jo existing hai uspe chalrahe the so abb kuch aur use karinge
// event listners bass existing elements ke liye kam karte naya added elemets ke upar kam nahi karte

ul.addEventListener('click' , function (event) {
    if(event.target.nodeName=="BUTTON"){
      let listItem=  event.target.parentElement;
      listItem.remove();
    }
});