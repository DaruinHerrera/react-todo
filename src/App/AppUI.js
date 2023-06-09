import React from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButtom } from "../Components/CreateTodoButtom";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../Components/TodoForm";
import { TodoLoader } from "../Components/TodoLoader";
function AppUI () {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>            
            <TodoList>
            {error && <p>Hubo un error</p>}
            {loading && <TodoLoader/>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo </p>}

            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text}  
                text={todo.text}
                completed = {todo.completed}
                onComplete = {() => {completeTodo(todo.text)}}
                onDelete = {() => {deleteTodo(todo.text)}}
                />
            ))}
            </TodoList>
            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            
            <CreateTodoButtom
            setOpenModal = { setOpenModal }
            />
        </React.Fragment>
    );
};

export { AppUI }