import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name: 'todo',

    initialState:[
        {
            id:0,
            description: 'checkpoint',
            isDone:false
          }
    ],
  
    reducers: {
        addTask:(state,action)=>{
            const newTask={
                id: Date.now(),
                isDone:false,
                description: action.payload,
            }
            state.push(newTask);
            
        },
    
        removeTask:(state,action)=>{
           state= state.filter((v)=>v.id!==action.payload)
           return state;
        },
        
        editTask:(state, action)=>{
            const tache=state.find((v)=>v.id===action.payload);
            tache.isDone=!tache.isDone
        }
    },
   
});

export const {addTask,removeTask}=todoSlice.actions;

export const store=configureStore({
    reducer:{
        todo:todoSlice.reducer
    },
});

    