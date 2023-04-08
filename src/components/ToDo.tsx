const ToDo: React.FC<{id: string, text: string}> = (props) => {
  return <>
  <li>{props.text}</li>
  </>;
};

export default ToDo;
