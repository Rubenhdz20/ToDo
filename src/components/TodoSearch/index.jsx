import React from "react";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext);

    return(
        <>  
            <div className="mb-8 flex justify-center">
                <input className="w-[13rem] h-[3rem] text-center" type="text" placeholder="Describe la tarea" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
            </div>
        </>
    )
}

export default TodoSearch;