import {useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo } from "../features/todo/todoSlice"
export default function Addform(){
    const [task,setTask]=useState();
    const dispatch =useDispatch();
   const submitHandler=(event)=>{
      event.preventDefault();
    //   console.log("hii");
      console.log(task);
      dispatch(addTodo(task)) 
      setTask("");
   }

    return(
       <form onSubmit={submitHandler}>
        <input type="text"  onChange={(e)=>setTask(e.target.value)} value={task}/>
        <button>Add Task</button>
       </form>
    )
}