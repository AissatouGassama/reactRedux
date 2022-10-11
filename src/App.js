import './App.css';
import React, { useState } from 'react'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import HeaderTask from './Components/HeaderTask';

function App() {
 

  return (
    <div className="App">
      <article>
      <HeaderTask/>
      <TaskList/>
      <TaskForm/>
     
      </article>
      
     
    </div>
  );
}

export default App;
