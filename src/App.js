import './App.css';
import { useState } from 'react';

function App() {

  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodo = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, todoValue]);
  };

  const deleteTodo = (todo) => {
    // const updatedTodoList = todos.filter((name) => {
      // if(name === todo) {
      //   return false;
      // } else {
      //   return true;
      // }
    // });
    // setTodos(updatedTodoList);


    setTodos(todos.filter((name) => name !== todo));
  };


  return (
    <div className="App">
      <div className='addTodo'>
        <input onChange={getTodo}/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className='todoList'>
        {todos.map((todo, key) => {
          return <div key={key}>
                    <h3>{todo}</h3>
                    <button onClick={() => deleteTodo(todo)}>X</button>
                 </div>;
        })}
      </div>
    </div>
  );
}

export default App;
