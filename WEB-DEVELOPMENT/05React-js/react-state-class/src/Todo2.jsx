import {useState} from "react"
import { v4 as uuidv4 } from "uuid";
export default function Todo2(){
  let [todos,setTodos]=useState([{task:"sample todo",id:uuidv4(),isDone:false}])
  let [newTodo,setNewTodo]=useState("")

  function addTask(){
  setTodos([...todos,{task:newTodo,id:uuidv4(),isDone:false}])
  }
  function taskGenerate(event){
   setNewTodo(event.target.value);
  }
  
  function deleteTask(id){
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id) )
  }
  
  function markAsDone(id){
    setTodos(
      todos.map((todo)=>{
        if(todo.id==id){
          return {...todo,isDone:!todo.isDone}
        }else{
          return todo
        }
      })
    )
  }
    return(
        <div>
            <input type="text" placeholder="Add New Todo" onChange={taskGenerate}/><br/>
            <button onClick={addTask}>Add new task</button><br /><br /><br /><br /><hr />
            <h2>Todo List</h2>
            <ul>{
                todos.map((todo)=>{
                  return  <li key={todo.id}>
                     <span style={todo.isDone?{textDecoration:"line-Through"}:{}}> {todo.task}</span>
                     &nbsp;&nbsp;&nbsp; <button onClick={()=>deleteTask(todo.id)} >Delete task</button>
                     &nbsp;&nbsp;&nbsp; <button onClick={()=>markAsDone(todo.id)} >MarkAs Done</button>
                     &nbsp; <button>UpperCase</button>
                     {/* <input type="checkbox"  onClick={checkBox(todo.id)}  /> */}
                    {/* <span className="checkmark"></span> */}
                        </li>
                })
                }
            </ul>
        </div>
    )

}