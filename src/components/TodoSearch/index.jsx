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
            <div className="relative flex flex-col justify-center items-center mb-8 px-3 py-4">
                <svg className="sticky top-[40%] right-[64%] translate-x-[-60%] translate-y-[37%]" width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694V18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5V8.5Z" fill="#3D404A"/>
                </svg>
                <input className="w-[13rem] h-[3rem] text-center bg-[#EDF0F2] rounded-xl" type="text" placeholder="Describe la tarea" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
                />
            </div>
        </>
    )
}

export default TodoSearch;