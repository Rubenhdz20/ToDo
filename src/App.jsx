import React from "react";
import { useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

const defaultTodos = [
  { text: 'Sacar a canelo', completed: false },
  { text: 'Cocinar', completed: true },
  { text: 'Terminar mis pendientes', completed: false },
  { text: 'Lavar los platos', completed: true },
  { text: 'Lavar los regadera', completed: true }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; // el doble !! convierte un valor a booleano 
  const allTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })

  console.log(`Los usuarios buscan todos de ${searchValue}`);

  return (
    <>
      <TodoCounter completed={completedTodos} total={allTodos}/>

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}


export default App