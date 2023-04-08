import "./App.css";
import ToDos from "./components/ToDos";
import ToDoModel from "./models/ToDo";

function App() {
  const todos = [new ToDoModel("Walk the dog"), new ToDoModel("Hit the gym")];
  return (
    <>
      <ToDos items={todos} />
    </>
  );
}

export default App;
