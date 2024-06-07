import React from "react";

function TodoForm() {
    return(
        <form className="flex flex-col justify-center items-center w-11/12 max-w-[300px] py-8 px-10 bg-zinc-700 rounded-lg">
            <label className="text-center font-bold text-xl mb-6">Escribe tu nuevo TODO</label>
            <textarea className="h-24 p-3 text-center text-lg rounded-sm border-2 border-solid border-slate-400" placeholder="cortar cebolla"/>
            <div className="w-full flex justify-between items-center mt-3">
                <button className="">Cancelar</button>
                <button>Agregar</button>
            </div>
        </form>
    )
    
};

export default TodoForm;