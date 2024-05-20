import TodoCounter from "../components/TodoCounter/index"
import TodoSearch from "../components/TodoSearch/index";
import TodoList from "../components/TodoList/index";
import TodoItem from "../components/TodoItem/index";
import CreateTodoButton from "../components/CreateTodoButton/index";

function AppUI({
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
            {searchedTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}  onDelete={() => deleteTodo(todo.text)}/>
            ))}
            </TodoList>
    
            <CreateTodoButton/>
      </>
    )
}

export default AppUI