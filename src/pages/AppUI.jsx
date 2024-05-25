import TodoCounter from "../components/TodoCounter/index"
import TodoSearch from "../components/TodoSearch/index";
import TodoList from "../components/TodoList/index";
import TodoItem from "../components/TodoItem/index";
import CreateTodoButton from "../components/CreateTodoButton/index";

function AppUI({
    loading,
    error,
    completedTodos,
    allTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={allTodos}/>
    
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
    
            <TodoList>
                {loading && <p>Estamos cargando...</p>}

                {error && <p>Hubo un error en el sistema!</p>}

                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer todo!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}  onDelete={() => deleteTodo(todo.text)}/>
                ))}
            </TodoList>
    
            <CreateTodoButton/>
      </>
    )
}

export default AppUI