import React from "react";
import '../Styles/TodoList.css'
function TodoList (props) {
    return (
        <section>
            <span>{props.title}</span>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};