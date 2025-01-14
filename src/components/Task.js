import { useState } from "react";
import TaskCard from "../components/TaskCard";
import "../../src/css/task.css";
import styles from "../css/Task.module.css";
import AddItem from "./AddItem";

function Task(props) {
  const myTask = [
    { title: "Complete todays assignment", id: 1, completed: false },
    { title: "Get groceries from the shop", id: 2, completed: false },
    { title: "Learn React js from scratch", id: 3, completed: false },
    { title: "lets Pray and Hope for success", id: 4, completed: true },
  ];
  const [tasks, setTasks] = useState(myTask);
  const [taskInput, setTaskInput] = useState("");
  const [hideTaskFlow , sethideTaskFlow] = useState(false);
  function changeStatus(taskid) {
    // let new_task = tasks.filter( (task) => task.id !== taskid);
    // setTasks(new_task);

    let new_task = tasks.map((task) => {
      if (task.id === taskid) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(new_task);
  }

 
  
  function clearInput() {
    setTaskInput("");
  }
  function hideTask(){
    sethideTaskFlow(!hideTaskFlow);
  }


  return (
    <div>
        <AddItem  tasks={tasks} tasksMethod={setTasks}/>
      <div className="main_div">
        <span className={styles.main_div_heading}>
          <h2 className="heading">{props.title}</h2>
          <button className="button" onClick={()=>hideTask()}>{hideTaskFlow ? "Show" : "Hide"}</button>
        </span>

        <ul className={`task_list ${hideTaskFlow ? styles.hide : styles.show} ` }>
          {tasks.map((task) => (
            <>
              <TaskCard key={task.id} task={task} changeStatus={changeStatus} />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Task;
