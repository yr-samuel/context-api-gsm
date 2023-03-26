import './App.css'
import TodoContextProvider from './src/contexts/Todo';
import { Form } from "./src/Form";
import { List } from "./src/List";
import { OtherComponent } from "./src/OtherComponent";


function App() {

  return (
    <div className="App">
    <TodoContextProvider>
      <Form />
      <List />
      <OtherComponent />  
    </TodoContextProvider>
  </div>
  )
}

export default App
