export const Todo = (props) => {
    return (
        <div className='todo' style={{textDecoration: props.completed ? "line-through" : "none"}}>
          <h3>{props.todoName}</h3>
          <button onClick={() => props.completeTodo(props.todoId)}>Completed</button>
          <button onClick={() => props.deleteTodo(props.todoId)}>X</button>
        </div>
      );
};