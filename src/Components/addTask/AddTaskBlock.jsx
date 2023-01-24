import React, { useState } from "react";
import "./addTask.css";

function AddTaskBlock({ addTask }) {
  const [task, setTask] = useState({ task: "", description: "" });

  const sendTask = (e) => {
    e.preventDefault();
    const sendedTask = {
      ...task,
      id: Date.now(),
    };

    if (task.task.length == 0) {
      return;
    } else addTask(sendedTask);

    setTask({ task: "", description: "" });
  };

  return (
    <div className="WriteTaskBlock">
      <h1>Добавить задачу</h1>
      <div className="new-task-name">
        <p>Назание задачи</p>
        <input
          type="text"
          maxLength={70}
          value={task.task}
          onChange={(e) => setTask({ ...task, task: e.target.value })}
        />
      </div>
      <div className="new-task-description">
        <p>Описание</p>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <button onClick={sendTask}>Добавить задачу</button>
    </div>
  );
}

export default AddTaskBlock;
