import React from "react";
import '../Styles/TodoItem.css'
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
function TodoItem (props) {
    return (
        <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <AiFillCheckCircle/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <AiFillCloseCircle/>
      </span>
    </li>
    );
}

export { TodoItem }