
import { useRef } from "react";
import classes from "./NewToDo.module.css";

const NewToDo: React.FC<{onAddToDo: (text: string) => void}> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredInput = textInputRef.current!.value
    if (enteredInput.trim().length === 0) {
      return;
    }
    props.onAddToDo(enteredInput)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">To do</label>
      <input type="text" id="text" ref={textInputRef}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewToDo;
