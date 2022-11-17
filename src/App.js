import "./App.css";
import React, { useState } from "react";
import AddTaskBlock from "./Components/AddTaskBlock";
import TaskBlock from "./Components/TasksBlock";

function App() {
  const [newTask, fnNewTask] = useState([]);

  const addTask = (sendedTask) => {
    fnNewTask([...newTask, sendedTask]);
  };

  const deleteTask = (task) => {
    fnNewTask(newTask.filter((p) => p.id !== task.id));
  };

  return (
    <div className="App">
      <div id="ss">
        {newTask.length !== 0 ? (
          <TaskBlock newTask={newTask} deleteTask={deleteTask} props="" />
        ) : (
          <TaskBlock
            newTask={newTask}
            deleteTask={deleteTask}
            props="Список задач пуст"
          />
        )}
      </div>
      <div id="dd">
        <AddTaskBlock addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
