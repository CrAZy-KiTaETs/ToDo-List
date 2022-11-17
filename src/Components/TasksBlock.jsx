import React, { useState } from "react";
import classes from "./style.css";
import Tasks from "./Tasks";

function TaskBlock({ newTask, deleteTask, props }) {
  return (
    <div className="TaskBlock">
      <div className="container">
        <h1>Список задач</h1>
        <div id="taskNotification">{props}</div>
        <div id="ll">
          {newTask.map((task) => (
            <Tasks task={task} deleteTask={deleteTask} key={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskBlock;
