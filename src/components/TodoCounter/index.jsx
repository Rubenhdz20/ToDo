import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {
        completedTodos,
        allTodos,
    } = useContext(TodoContext);

    return(
        allTodos === completedTodos ? 
        <h1 className="m-0 p-[3rem] text-center text-lg text-gray-950">Haz sido muy productivo hoy!</h1>
        :
        <h1 className="m-0 p-[3rem] text-center text-lg text-gray-950">Has completado {completedTodos} de {allTodos} Todos!</h1>
    )
}

export default TodoCounter;