import "./App.css";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import AddTaskBlock from "./Components/addTask/AddTaskBlock";
import TaskBlock from "./Components/task/TasksBlock";

function App() {
  const [newTask, fnNewTask] = useState([]);

  const addTask = (sendedTask) => {
    fnNewTask([...newTask, sendedTask]);
  };

  const deleteTask = (task) => {
    fnNewTask(newTask.filter((p) => p.id !== task.id));
    localStorage.setItem("save", JSON.stringify(newTask));
  };

  // Сохранение задач в локальное хранилище
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("save", JSON.stringify(newTask));
    }, 1);
  }, [addTask]);

  // Сохранение задач из локального хранилища в пустой массив newTask при перезагрузке
  useEffect(() => {
    fnNewTask(JSON.parse(localStorage.getItem("save")));
  }, []);

  return (
    <div className="App">
      <div id="tasksWrapper">
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
      <div id="addTaskWrapper">
        <AddTaskBlock addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
