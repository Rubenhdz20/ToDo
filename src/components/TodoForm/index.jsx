import React, { useState } from "react";

function TodoForm({
        newTodoValue,
        setNewTodoValue,
        addTodo,
        setOpenModal,
        validInputData,
        validSatus,
    }) {

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
        <form onSubmit={onSubmit} className="flex flex-col justify-center items-center w-11/12 max-w-[300px] py-8 px-10 bg-[#B3BFFC] rounded-lg">
            <label className="text-center font-bold text-xl mb-6">Agrega mas tareas!</label>
            <textarea 
                className="h-24 p-3 text-center text-lg rounded-lg border-2" placeholder="cortar cebolla" 
                value={newTodoValue} 
                onChange={onChange} 
                onFocus={validInputData(newTodoValue)}
                required
            />
            <div className="w-full flex justify-between items-center mt-3">
                <button 
                    type="button" 
                    className="p-2 text-base text-center cursor-pointer inline-bloc bg-[#d0d8ff] rounded-lg hover:bg-[#91a3fb]" onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className="p-2 text-base text-center cursor-pointer inline-block bg-[#d0d8ff] rounded-lg hover:bg-[#91a3fb]">
                    Agregar
                </button>
            </div>
        </form>
    )
};

export default TodoForm;