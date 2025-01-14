import React from "react";
import {useState} from "react"
import '../css/box.css';
import styles from "../css/TaskCard.module.css";
import AddItem from "../components/AddItem";


const Box = ({ children, class_name , id }) => {

    const [hideDiv , setHideDiv] = useState(false);
    const handleHide = () => {
        setHideDiv(!hideDiv);
        console.log(hideDiv);
        
    }
  return (
    <>
      <div className={`box ${class_name} ${hideDiv ? "hide" : "show"}`}>
      <p className={styles.task_title}>{class_name.toUpperCase()}</p>

        {children}

        <AddItem id={id} />

        <br />

        <div>
          <button className="button" onClick={()=>handleHide()}>Hide</button>    
        </div>

      </div>
    </>
  );
};

export default Box;
