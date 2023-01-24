import React from "react";
import "./TaskBlock.css";
import Tasks from "./Tasks";

function TaskBlock({ newTask, deleteTask, props }) {
  return (
    <div className="task-container">
      <h1>Список задач</h1>
      <div id="taskNotification">{props}</div>
      <div className="task-list">
        {newTask.map((task) => (
          <Tasks task={task} deleteTask={deleteTask} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskBlock;
