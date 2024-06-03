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
    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
    
      const allTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    
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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            allTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export  {TodoContext, TodoProvider};