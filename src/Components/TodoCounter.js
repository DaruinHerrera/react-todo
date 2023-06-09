import React from "react";
import { TodoContext } from "../TodoContext";
import '../Styles/TodoCounter.css'

function TodoCounter () {
    const {
        totalTodos,
        completedTodos
    } = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Completos { completedTodos } de { totalTodos } TODOs</h2>
    );
}

export { TodoCounter };