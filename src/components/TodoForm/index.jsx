import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        newTodoValue,
        setNewTodoValue,
        addTodo,
        setOpenModal,
        validInputData,
        validSatus,
    } = useContext(TodoContext);

    const isDescriptionValid = (newTodoValue.length > 1) ? true : false;

    const onSubmit = (event) => {
        event.preventDefault();
        if (!isDescriptionValid) return;
        addTodo(newTodoValue.trim());
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        validInputData(newTodoValue);
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-11/12 max-w-[300px] py-8 px-10 bg-zinc-700 rounded-lg">
            <label className="text-center font-bold text-xl mb-6">Escribe tu nuevo TODO</label>
            <textarea 
                className="h-24 p-3 text-center text-lg rounded-sm border-2 border-solid border-slate-400" placeholder="cortar cebolla" 
                value={newTodoValue} 
                onChange={onChange} 
                onFocus={validInputData(newTodoValue)}
                required
            />
            <div className="w-full flex justify-between items-center mt-3">
                <button 
                    type="button" 
                    className="text-base text-center cursor-pointer inline-block bg-black rounded-small" onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className="text-base text-center cursor-pointer inline-block bg-black rounded-small">
                    Agregar
                </button>
            </div>
        </form>
    )
    
};

export default TodoForm;