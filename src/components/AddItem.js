import styles from "../css/addItem.module.css";
import {useState} from "react";

const AddItem = ({tasks , tasksMethod}) => {

  const [title, setTitle] = useState('');
  const [progress , setProgress] = useState(false);


  const AddItem = (event) => {
    event.preventDefault();
    if(title === '') {
      let input = document.getElementsByClassName(styles.input)[0];
      input.focus();
      input.style.border="2px solid red";
      return;
    }
    let task = {
      title : title,
      completed : progress,
      id : Math.floor(Math.random() * 1000)
    }
    
    tasksMethod([...tasks , task]);
    clearInput();
    
  }


   function clearInput() {
    setTitle('');
    setProgress(false);
  }

  return (
    <section>
      <div className={styles.main_div}>
        <form className={styles.form} action="">
          <span style={{ display: "flex", flexDirection: "row" }}> 
            <span className={styles.sub_div}>
              <label className={styles.label} htmlFor={`add_item`}>
                Add Item
              </label>
              <input
                className={styles.input}
                onChange={(event)=>setTitle(event.target.value)}
                type="text"
                value={title}
                placeholder="Add Item"
                name={`add_item`}
                id={`add_item`}
              />
            </span>
            <span className={styles.sub_div}>
              <label className={styles.label} htmlFor={`completion`}>
                Completion
              </label>
              <select
                onChange={(event)=>setProgress(event.target.value)}
                value={progress}
                className={styles.input}
                name="completion"
                id="completion"
              >
                {/* <option  value="">Select</option> */}
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
              </select>
            </span>
          </span>


          <button onClick={(event)=>AddItem(event)} className={` ${styles.button} button complete`}>Add</button>
        </form>
        
      </div>
    </section>
  );
};

export default AddItem;
