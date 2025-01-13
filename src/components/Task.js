import { useState } from "react";
function Task() {
    let [tasks, setTasks] = useState([
        {title:"Complete todays assignment", id:1, completed: false},
        {title:"Get groceries from the shop", id:2, completed: false},
        {title:"Learn React js from scratch", id:3, completed: false},
        {title:"lets Pray and Hope for success", id:4, completed: true}
    ]);
    function changeStatus(taskid){
        // let new_task = tasks.filter( (task) => task.id !== taskid);
        // setTasks(new_task);

        let new_task = tasks.map((task) => {
            if(task.id === taskid){
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(new_task);
    }

    function addTask(){
        let newtask = {title:document.querySelector(".title_input").value, id:tasks.length+1, completed: false};
        // console.log(newtask);
        setTasks([...tasks, newtask]);
        // console.log(tasks);
    }
    return (
        <div>
            <div className="main_div">
            <h2 className="heading">Task List</h2>

                <ul className="task_list">
                    {tasks.map(task => (
                        <li className={task.completed == false ? "flex-item active" : "flex-item inactive"} key={task.id}>
                            <h4 className="task_title">{task.title}</h4>
                            <button className={task.completed == false ? "complete button" : "completed button"} onClick={() => changeStatus(task.id)}>
                                    {task.completed == false ? "Complete" : " Completed"}
                            </button>
                        </li>
                    ))}
                </ul>
                
                <div className="add_task"> 
               
                        <input placeholder="Add Task" className="title_input" type="text" />
                        <button className="button addButton" onClick={()=>addTask()}>Add</button>
                   
                    
                </div>
            </div>
        </div>
    );
}
export default Task;