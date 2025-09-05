import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [{
        id: "01",
        todo: "context with chai",
        completed: false,
    }],
    addToDo: (todo) => { },
    deleteToDo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleCompleted: (id) => { },
})

export const useToDo = () => {
    return useContext(ToDoContext);
}