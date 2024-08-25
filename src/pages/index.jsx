import React from "react";
import  AppUI   from "./AppUI";
import  {TodoProvider}  from "../components/TodoContext/index";

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
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