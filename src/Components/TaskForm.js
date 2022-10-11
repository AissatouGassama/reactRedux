import React, {useState} from 'react';
import { useDispatch } from "react-redux";
const TaskForm=()=>{
   const[description, setDescription]=useState("");
   console.log(description)

const dispatch=useDispatch();

   const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch({
      type:"todo/addTask",
      payload:description
    });
    setDescription('');

   }
  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='ajouter une tache'
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      </form>
    </div>
  )
}
export default TaskForm;