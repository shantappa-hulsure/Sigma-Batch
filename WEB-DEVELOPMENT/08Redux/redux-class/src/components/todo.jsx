import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux";
import {deleteTodo, markAsDone } from "../features/todo/todoSlice"
export default function Todo(){
    const todos = useSelector(state => state.todos)
    const dispatch=useDispatch();
    // console.log(todos);
    const handleDelete =(id)=>{
        dispatch(deleteTodo(id))
    }
    const handleMarkAsDone=(id)=>{
       dispatch( markAsDone(id))
    }
    return(
        <>
        <AddForm/>
        <h2> Todos</h2>
        <ul>
            {todos.map(todo => <li key={todo.id} >
           <span style={todo.isDone ?{textDecoration:"line-through"}:{}}>{todo.task}</span>   &nbsp;&nbsp;
            <button onClick={()=> handleDelete(todo.id) } >Delete  </button>
            <button onClick={()=> handleMarkAsDone(todo.id) } > markAsDone  </button>
            </li>)}
        </ul>
        </>
    )
}