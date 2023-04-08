import ToDoModel from "../models/ToDo";
import ToDo from "./ToDo";
import classes from "./ToDos.module.css";

const ToDos: React.FC<{ items: ToDoModel[]; onRemoveToDo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <ToDo
          text={item.text}
          key={item.id}
          onRemoveToDo={() => props.onRemoveToDo(item.id)}
        />
      ))}
    </ul>
  );
};

export default ToDos;
