import { createContext, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

// Create a new context and export
export const EditTodo = createContext();

// Create a Context Provider
const EditTodoProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  return (
    <EditTodo.Provider value={{ text, setText, edit, setEdit, id, setId }}>
      {children}
    </EditTodo.Provider>
  );
};

function App() {
  return (
    <>
      <h1 className="text-white text-3xl font-semibold">Todo App</h1>
      <EditTodoProvider>
        <AddTodo />
        <Todos />
      </EditTodoProvider>
    </>
  );
}

export default App;
