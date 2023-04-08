import ToDo from "../models/ToDo"

const ToDos: React.FC<{ items: ToDo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default ToDos
