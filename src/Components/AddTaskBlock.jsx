import React, { useState } from "react";
import classes from "./style.css";

function AddTaskBlock({ addTask }) {
  const [task, setTask] = useState({ task: "", description: "" });

  const sendTask = (e) => {
    e.preventDefault();
    const sendedTask = {
      ...task,
      id: Date.now(),
    };
    {
      task.task.length !== 0 ? addTask(sendedTask) : <div />;
    }

    setTask({ task: "", description: "" });
  };

  return (
    <div className="WriteTaskBlock">
      <div className="container">
        <h1>Добавить задачу</h1>
        <div id="new-task-name">
          <p>Назание задачи</p>
          <input
            type="text"
            maxLength={70}
            value={task.task}
            onChange={(e) => setTask({ ...task, task: e.target.value })}
          />
        </div>
        <div id="new-task-description">
          <p>Описание</p>
          <textarea
            id="gg"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <button onClick={sendTask}>Добавить задачу</button>
      </div>
    </div>
  );
}

export default AddTaskBlock;
