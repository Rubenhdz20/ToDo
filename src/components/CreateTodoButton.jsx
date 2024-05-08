
function CreateTodoButton() {
    return(
        <>
            <div className="mt-8 flex justify-center">
                <button className="w-[13rem] h-[3rem] text-center" onClick={(event) => console.log(event.target)}>Agregar Tarea</button>
            </div>  
        </>
    )
}

export default CreateTodoButton;