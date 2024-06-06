import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue); // This state variable holds the actual data retrieved from or stored in local storage. It is initialized with the initialValue using useState.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
    
          if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
          } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
          }
    
          setLoading(false);
        } catch(error) {
            setLoading(false);
            setError(true);
        }
      }, 2000);
    }, []);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }; 
    // This function allows you to update the data stored in local storage and the component's state. It takes a newItem argument representing the new data you want to save.
    // It stringifies the newItem using JSON.stringify for compatibility with local storage, which can only store strings.
    // It saves the stringified data in local storage using localStorage.setItem(itemName, JSON.stringify(newItem)).
    // It then updates the item state variable with the new data using setItem(newItem).
  
    return {  
            item, // The current value of the data retrieved from or stored in local storage.
            saveItem, // The function to update the data in local storage and the component's state.
            loading, 
            error,
          };
}

export default useLocalStorage;

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');
