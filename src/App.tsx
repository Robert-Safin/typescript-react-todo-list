import "./App.css";
import ToDos from "./components/ToDos";
import ToDoModel from "./models/ToDo";
import NewToDo from "./components/NewToDo";
import { useState } from "react";

function App() {

  const [todos, setTodos] = useState<ToDoModel[]>([]);

  const addToDoHandler = (text: string) => {
    const newToDo = new ToDoModel(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newToDo);
    });
  };

  const removeToDoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewToDo onAddToDo={addToDoHandler}/>
      <ToDos items={todos} onRemoveToDo={removeToDoHandler}/>
    </>
  );
}

export default App;
