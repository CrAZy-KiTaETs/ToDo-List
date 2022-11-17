import React, { useState } from "react";
import styled from "styled-components";

function Tasks(props) {
  const [isHide, setHide] = useState(false);

  const toggleInfo = () => {
    setHide(!isHide);
  };

  return (
    <div className="task">
      <div className="task-name">
        <div id="name">{props.task.task}</div>
        <button
          onClick={() => props.deleteTask(props.task)}
          className="deleteBtn"
        >
          &#10006;
        </button>
        <button
          onClick={toggleInfo}
          className={isHide ? "descriptionBtnClosed" : "descriptionBtnActive"}
        >
          ◂
        </button>
        <div>{props.task.mal}</div>
      </div>
      <div className={isHide ? "description-hide" : "description-actve"}>
        {props.task.description}
      </div>
    </div>
  );
}

export default Tasks;
