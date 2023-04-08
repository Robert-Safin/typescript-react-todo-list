import ToDoModel from "../models/ToDo"
import ToDo from "./ToDo"
import classes from "./ToDos.module.css"

const ToDos: React.FC<{ items: ToDoModel[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <ToDo text={item.text} key={item.id}/>
      ))}
    </ul>
  )
}

export default ToDos
