export const Todo = (props) => {
  return <ul>
      <li style={{textDecoration: props.completed ? "line-through" : "none"}}>
          <input type="checkbox" name="checkbox" onChange={() => props.completeTodo(props.todoId)}/>
          <span>{props.todoName}</span>
          <button onClick={() => props.deleteTodo(props.todoId)}>Del</button>
      </li>
  </ul>
};