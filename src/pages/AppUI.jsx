import TodoCounter from "../components/TodoCounter/index"
import TodoSearch from "../components/TodoSearch/index";
import TodoList from "../components/TodoList/index";
import TodoItem from "../components/TodoItem/index";
import CreateTodoButton from "../components/CreateTodoButton/index";
import TodosLoading from "../components/TodosLoading/index";
import TodosError from "../components/TodosError/index";
import EmptyTodos from "../components/EmptyTodos";
import TodoContext from "../components/TodoContext";

function AppUI() {
    return (
        <>
            <TodoCounter/>
    
            <TodoSearch/>
    
            <TodoContext.Consumer>
               {({
                    loading,
                    error,
                    searchedTodos,
                    completedTodos,
                    deleteTodo
               }) => {
                     <TodoList>
                        {loading && <TodosLoading/>}
    
                        {error && <TodosError/>}
    
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
    
                        {searchedTodos.map(todo => (
                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)}  onDelete={() => deleteTodo(todo.text)}/>
                        ))}
                    </TodoList>
               }}
            </TodoContext.Consumer>
            
    
            <CreateTodoButton/>
      </>
    )
}

export default AppUI