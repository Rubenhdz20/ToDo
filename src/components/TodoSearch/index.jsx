import { useState } from "react";

function TodoSearch({searchValue, setSearchValue}) {
    return(
        <>  
            <div className="mb-8 flex justify-center">
                <input className="w-[13rem] h-[3rem] text-center" type="text" placeholder="Describe la tarea" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
            </div>
        </>
    )
}

export default TodoSearch;