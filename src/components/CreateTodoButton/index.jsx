import React from "react";

function CreateTodoButton({
    openModal,
    setOpenModal,
  }) {
    
    return(
        <>
            <div className="mt-8 flex justify-center self-end">
                <button className="w-[13rem] h-[3rem] text-center text-white bg-[#617AFA] rounded-xl z-10 hover:bg-[#91a3fb]" 
                onClick={() => {
                    console.log('Hiciste Click!');
                    if(!openModal) {
                        setOpenModal(true)
                    } else {
                        setOpenModal(false);
                    }
                }}>Agregar Tarea</button>
            </div>  
        </>
    )
}

export default CreateTodoButton;