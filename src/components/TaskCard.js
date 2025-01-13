import React from "react";

const TaskCard = (props) => {
  return (
    <li
      className={
        props.task.completed == false ? "flex-item active" : "flex-item inactive"
      }
      
    >
      <h4 className="task_title">{props.task.title}</h4>
      <button
        className={
          props.task.completed == false ? "complete button" : "completed button"
        }
        onClick={() => props.changeStatus(props.task.id)}
      >
        {props.task.completed == false ? "Complete" : " Completed"}
      </button>
    </li>
  );
};

export default TaskCard;
