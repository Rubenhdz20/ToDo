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
import TodoForm from "../components/TodoForm/index";
import TodoHeader from "../components/TodoHeader";
import { useTodos } from "./useTodos";

function App() {
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
    newTodoValue,
    setNewTodoValue,
    addTodo,
    setOpenModal,
    validInputData,
    validSatus,
  } = useTodos();

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

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
        
      <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
            <TodoForm
              newTodoValue={newTodoValue}
              setNewTodoValue={setNewTodoValue}
              addTodo={addTodo}
              setOpenModal={setOpenModal}
              validInputData={validInputData}
              validSatus={validSatus}
            />
        </Modal>
      )}
    </>
  );
}


export default App;

// function App() {
//   const [state, setState] = React.setState(initialState);

//   return (
//     <TodoHeader>
//       <TodoCounter state={state} setState={setState} />
//     </TodoHeader>
//   );
// }