import React from "react";
import { useLocalStorage } from './useLocalStorage'

// Contexto permite mantener estados a nivel de aplicación
// Con provider lo envuelve y con consume en el componente lo puede usar
const TodoContext = React.createContext();

function TodoProvider(props) {
    // Aunque se reciben con un nombre estos se pueden renombrar usando :CustonName
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todos => !!todos.completed).length;
    const [openModal, setOpenModal] = React.useState(false);
    let searchedTodos = []

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter (todo => {
        const todoText = todo.text.toLowerCase();
        const searcText = searchValue.toLowerCase();
        return todoText.includes(searcText);
        });
    }


    //arrow function el return esta implicito
    const completeTodo = (text) => {
        // Filtar el index de elemto buscado
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // Clona un array
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        // Hace busqueda de coincidencia y recupera el idenx
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // Clona un array
        const newTodos = [...todos];
        // Elimina del array el elemento desde la posición todoindex y solo 1
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value = {{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };