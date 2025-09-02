import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Todo msg",
            compleated: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleate: (id) => { }
});

export const useToDo = () => {
    return useContext(ToDoContext);
}