import React from "react";

function TodoSearch({searchValue, setSearchValue,}) {
    return(
        <>  
            <div className="relative flex flex-row justify-center items-center mb-8 px-3 py-4">
                <input className="w-[13rem] h-[3rem] text-center bg-[#EDF0F2] rounded-xl" type="text" placeholder="Describe la tarea 🔎" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
                />
            </div>
        </>
    )
}   

export default TodoSearch;