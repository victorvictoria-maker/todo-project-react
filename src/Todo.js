export const Todo = (props) => {
  return <ul>
      <li style={{textDecoration: props.completed ? "line-through" : "none"}}>
          <input className="checkbox" type="checkbox" name="checkbox" onChange={() => props.completeTodo(props.todoId)}/>
          <span className="todo">{props.todoName}</span>
          <button className="delete" onClick={() => props.deleteTodo(props.todoId)}>Del</button>
      </li>
  </ul>
};