import  AppUI   from "./AppUI";
import  {TodoProvider}  from "../components/TodoContext/index"

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}


export default App;