let btn =document.querySelector("button");
// btn.addEventListener("click",getFacts)
let p=document.querySelector("p")


// axios 
// cat
// let url ="https://catfact.ninja/fact";
// async function getFacts(){
    //     try{
        //         let res=await axios.get(url);
        //         console.log(res.data.fact);
        //         p.innerText=res.data.fact;
        //     }
        //     catch(e){
            //         console.log("error - ", e);
            //     }
            // }
            
//  btn.addEventListener("click",getDogs)
// let url ="https://dog.ceo/api/breeds/image/random";
// let img=document.createElement( "img" );
// async function getDogs(){
//     try{
//         let res=await axios.get(url);
//         console.log(res.data.message);
//         img.src=res.data.message;
//         document.body.appendChild(img);
//     }
//     catch(e){
//         console.log("error");
//     }}




// Axios headers

// const url="https://icanhazdadjoke.com";

// async function getjokes(){
//     try{
//         const config={headers:{accept: "application/json"}}
//         let res=await axios.get(url,config);
//         console.log(res);
//     }
//     catch(e){
//         console.log("error");
//     }
// }


let url="http://universities.hipolabs.com/search?name=";
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colArr= await getColleges(country);
    
    show(colArr);
});

function show(colArr) {
    let list=document.querySelector("#list")
    list.innerText="";
    for(col of colArr){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
async function getColleges(country){
    try{
        let res =await axios.get(url+country);
        return res.data;
    }
    catch(e){
        console.log("errors");
        return [];
    }
}