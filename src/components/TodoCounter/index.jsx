import TodosLoading from "../TodosLoading";

function TodoCounter({ completed, total }) {
    return(
        total === completed ? 
        <h1 className="m-0 p-[5rem] text-center text-2xl text-white">Haz sido muy productivo hoy!</h1>
        :
        <h1 className="m-0 p-[5rem] text-center text-2xl text-white">Has completado {completed} de {total} Todos!</h1>
    )
}

export default TodoCounter;