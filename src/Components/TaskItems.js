import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../Redux/Redux";

const TaskItems=(props)=>{
    const{task}=props;
    const dispatch=useDispatch();
    return(
        <div>
            <div>{task.description}</div>
            <button onClick={()=>dispatch(
                {
                    type:"todo/removeTask",
                    payload: task.id

                }
            )}>
                Delete
            </button>
        </div>
    )
}
export default TaskItems;