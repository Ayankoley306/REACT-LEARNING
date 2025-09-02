import React, { createContext, useContext } from "react";

const ToDoContext = createContext({
    Name: "Ayan koley",
    Roll: 56,
    Deperment: "BCA",
})

export const usetodos = () => {
    return useContext(ToDoContext);
}