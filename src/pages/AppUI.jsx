import React from "react";
import TodoCounter from "../components/TodoCounter/index"
import TodoSearch from "../components/TodoSearch/index";
import TodoList from "../components/TodoList/index";
import TodoItem from "../components/TodoItem/index";
import CreateTodoButton from "../components/CreateTodoButton/index";
import TodosLoading from "../components/TodosLoading/index";
import TodosError from "../components/TodosError/index";
import EmptyTodos from "../components/EmptyTodos/index";
import Modal from "../Modal";
import {TodoContext} from "../components/TodoContext/index";
import TodoForm from "../components/TodoForm/index";
import TodoHeader from "../components/TodoHeader";
 
function AppUI() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      completedTodos,
      allTodos,
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);
    
    return (
    <>
      <TodoHeader>
        <TodoCounter 
          allTodos={allTodos}
          completedTodos={completedTodos}
        />

        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      
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

      {openModal && (
        <Modal>
            <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export default AppUI;