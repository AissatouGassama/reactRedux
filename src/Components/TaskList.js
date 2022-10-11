import React from "react";
import { useSelector } from "react-redux";
import TaskItem from './TaskItems'

const ListTask=(props)=>{
    const tasks=useSelector((state)=>state.todo);
  return(
    <div>
      {
        tasks.map((value)=>(
          <div>
        <TaskItem
        task={value}
        key={value.id}
       


        />
        </div>)
        )
      }
    </div>
  )
}
export default ListTask;