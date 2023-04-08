import "./App.css";
import ToDos from "./components/ToDos";
import ToDo from "./models/ToDo";

function App() {
  const todos = [new ToDo("1"), new ToDo("2")];
  return (
    <>
      <ToDos items={todos} />
    </>
  );
}

export default App;
