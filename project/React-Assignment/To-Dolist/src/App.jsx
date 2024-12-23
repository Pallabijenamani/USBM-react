/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

  
function App() {
    const[listTodo,setListTodo]=useState([]);
    let addList=(inputText)=>{
        setListTodo([...listTodo,inputText]);
    }
    return (
        <div className="main-container">
         <div className="center-container">
            <Todoinput addList={addList}/> 
            <h1 className="app-heading">TODO</h1>
            <hr />
            {listTodo.map((listItem,i)=> {
                return (
                    <TodoList key={i} item={listItem} />
                )
            })}
            </div>
            </div>
    )
}

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   const addTask = () => {
//     if (task.trim()) {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

//   return (
//     <div className="app">
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a task"
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App;
