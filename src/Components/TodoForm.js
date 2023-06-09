import React, { useState } from "react";
import { TodoContext } from "../TodoContext";
import '../Styles/TodoForm.css'
function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');
    const onchange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false)
    };
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Nuevo Todo</label>
            <textarea
                placeholder="Escribe tu todo"
                value={newTodoValue}
                onChange={onchange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    );
};

export { TodoForm };