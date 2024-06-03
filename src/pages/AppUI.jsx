import React from "react";
import TodoCounter from "../components/TodoCounter/index"
import TodoSearch from "../components/TodoSearch/index";
import TodoList from "../components/TodoList/index";
import TodoItem from "../components/TodoItem/index";
import CreateTodoButton from "../components/CreateTodoButton/index";
import TodosLoading from "../components/TodosLoading/index";
import TodosError from "../components/TodosError/index";
import EmptyTodos from "../components/EmptyTodos/index";
import {TodoContext} from "../components/TodoContext/index";
 
function AppUI() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
    } = React.useContext(TodoContext);
    
    return (
      <>
        <TodoCounter />

        <TodoSearch />
  
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
            </>
          )}

          {error && <TodosError/>}

          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </>
    );
  }

export default AppUI;