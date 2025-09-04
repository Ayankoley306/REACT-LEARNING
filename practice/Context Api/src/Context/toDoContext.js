import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: {
        id: 1,
        title: "First Todo item",
        complete: false,

        addToDO: (title) => { },
        deleteToDo: (id) => { },
        updateToDo: (title, id) => { },
        toggleCompleateToDo: (id) => { }
    }
})

export const useToDo = () => {
    return useContext(ToDoContext);
}