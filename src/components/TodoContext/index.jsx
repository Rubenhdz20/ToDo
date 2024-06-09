import { useState } from 'react';
import { createContext } from 'react';
import  useLocalStorage from '../../hooks/useLocalStorage.jsx';

const TodoContext = createContext();

function TodoProvider({children}) {
    const {  
        item: todos, 
        saveItem: saveTodos,
        loading, 
        error,
      } = useLocalStorage('TODOS_V1', []); //The code assumes the useLocalStorage function returns an object containing various properties related to local storage access for a specific key ('TODOS_V1').
      // Destructuring assignment unpacks these properties into separate variables with more descriptive names (todos, saveTodos, loading, and error) for easier use within your code.
    
      const [searchValue, setSearchValue] = useState('');

      const [newTodoValue, setNewTodoValue] = useState('');

      const [openModal, setOpenModal] = useState(false);

      const [validStatus, setValidStatus] = useState(false);
    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
    
      const allTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      };
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const validInputData = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        if(todoIndex !== -1) {
          setValidStatus(!validStatus);
          alert('Ya existe esa tarea');
          setNewTodoValue('');
        }
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            allTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            newTodoValue,
            setNewTodoValue,
            completeTodo,
            deleteTodo, 
            openModal,
            setOpenModal,
            addTodo,
            validStatus,
            setValidStatus,
            validInputData,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export  {TodoContext, TodoProvider};