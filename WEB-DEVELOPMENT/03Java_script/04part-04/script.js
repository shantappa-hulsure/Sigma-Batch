let todo=[];
while(true){
 let req=prompt("please enter your choice");
 console.log("your request is  "+req);
   if(req=="quit"){
    console.log("quitting app");
    break;
   }
if(req=="list"){
    console.log("----------------------");
    for(task of todo){
        console.log(task);
    }
    console.log("----------------------");
}

if(req=="add"){
    let task=prompt("enter your task which uh want to add");
    todo.push(task);
    console.log(" your  task has been added successfully");
}
if(req=="delete"){
    let task=prompt("enter a index you want to delete");
   for(let i=0;i<Array.length;i++){
    if(todo[i]==task) {
        todo.splice(i,1);
            console.log(task+"has been deleted from the list ");
        }
    }
}

}