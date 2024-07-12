//  GET ELEMENTS BY ID =document.getElementById(id)
//    console.log(document.getElementById("mainImg"));
// if id doesnot exist returns null


// GET ELEMENT BY CLASS NAME
// console.log(document.getElementsByClassName("oldImg" )); //returns html collection of objects
//  if classname does not exist returns empty object


// GET ELEMENTS BY TAG NAME
// console.log( document.getElementsByTagName("p") ); 
// document.getElementsByTagName("p")[0].innerText="abc";   //ye karne se 1st parragraph ka content change hoke abc banjayega



// Query Selector
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#description"));
//   querry selector use karke  sirf first ana yak chiz update karsakte jaisa ki doh paragh the toh querry selector use kiye toh bass 1st parragh ata hai
// same syntax as CSS
//  agar hame sare html collection chahiye toh querySelectorAll use karna padta hai



// manipulation of objects
// innerText=>Shows the visisble text contained in a node
// textContent=>Shows all the  content including HTML tags and hidden elements  inddex.html meh kya kya lika hay oh dikata hai jab next line pe like and all
// innerHTML => shows  the complete Html code inside an element  kaha konsa tag use huva bolke be dikata

//      .innerText
// let para=document.querySelector("p");
//     para.innerText="This is a new updated  paragraph"; 
// agar normal text dena hai toh .innerText use karna sahi rahega nahi toh hame bold italic sab karna hai toh  .innerHTML use karna padta


//     Manipulating attributes  getAttribute setAttribute
// let img=document.querySelector( "img" );
// img.getAttribute("class");
// img.setAttribute("class","hello");


//     manipulating Style

//  let links =document.querySelectorAll(".box a");
//  for(let i=0;i<links.length;i++){
//     links[i].style.color = "purple";   //inline style
//  }
//  for(link of links){
//     link.style.color="purple";
//  }

// using classList
// obj.classList  == heading.classList.
//     classList.add() to add new class
//      classList.remove() to remove existing class
//       classList.contains() check if class exists or not
//         classList.toggle() will toggle between adding and removing the class


// Navigation
//  parentElement  // it gives us immediate parent of any selected element
//  children        // returns HTMLCollection of all child elements of selected element
// childElementCount     // return number of child elements
// firstChild    //return the first child node of the specified element, also includes text nodes
// lastChild     //returns the last child node of the specified element, also includes text nodes
// nextSibling   //returns the sibling node that comes after the current node
// previousSibling//returns the sibling node that comes before the current node


// Adding Elements
//  document.createElement("p")  
//  obj.appendChild(element)          // adds an element as a child of the selected element at the end of element 
// obj.append(element)  //  apend use karke oh obj ke andar i jake ham change karsakte purane text ke badh turanth continue hota hai 
// obj.prepend(element) //prepend se ham yak element ka begiing meh kuch add karsakte hai 
// obj.insertAdjacentElement("position",element); // position can be "beforebegin" , "afterbegin" , "beforeend", "afterend"

// Remove element 
// parent.removeChild(child);