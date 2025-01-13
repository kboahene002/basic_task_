import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Task(props) {
    const myTask = [
        {title:"Complete todays assignment", id:1, completed: false},
        {title:"Get groceries from the shop", id:2, completed: false},
        {title:"Learn React js from scratch", id:3, completed: false},
        {title:"lets Pray and Hope for success", id:4, completed: true}
    ];
    const [tasks, setTasks] = useState(myTask);
    const [taskInput , setTaskInput] = useState("");
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
        if(taskInput === ""){
            alert("Please enter a task");
            return
        };
        let newtask = {title:taskInput, id:tasks.length+1, completed: false};
        // console.log(newtask);
        setTasks([...tasks, newtask]);
        
        clearInput();
    }

    function handleInput(event){setTaskInput(event.target.value)};
    function clearInput(){
        setTaskInput("");

    }
    return (
        <div>
            <div className="main_div">
            <h2 className="heading">{props.title}</h2>

                <ul className="task_list">
                    {tasks.map(task => (
                        <TaskCard key={task.id} task={task} changeStatus={changeStatus}/>
                    ))}
                </ul>
                
                <div className="add_task"> 
               
                        <input placeholder="Add Task" className="title_input" value={taskInput} onChange={handleInput} type="text" />
                        <button className="button addButton" onClick={()=>addTask()}>Add</button>
                   
                </div>
            </div>
        </div>
    );
}
export default Task;