import classes from "./ToDo.module.css";

const ToDo: React.FC<{ text: string; onRemoveToDo: () => void }> = (props) => {
  return (
    <>
      <li className={classes.item} onClick={props.onRemoveToDo}>
        {props.text}
      </li>
    </>
  );
};

export default ToDo;
