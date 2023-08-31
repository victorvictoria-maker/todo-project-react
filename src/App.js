import './App.css';
import { useState } from 'react';
import { Todo } from './Todo';



function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const getInputValue =(event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: todos.length === 0 ? 1 : todos[todos.length-1].id+1,
      todo: inputValue,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== id;     
    });

    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    // console.log(id);
    setTodos(todos.map((todo) => {
      if(todo.id === id) {
        if(todo.completed === false) {
          return {...todo, completed: true};
        } else {
          return {...todo, completed: false};
        }
      } else {
        return todo;
      };
    }));
  };

  return (
    <div className="wrapper">
      <div className='input'>
        <input onChange={getInputValue}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className='todoList'>
        {todos.map((todo, key) => {
          return <Todo 
                  key={key} 
                  todoName={todo.todo} 
                  todoId={todo.id} 
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                  completed={todo.completed}
                />
        })}
      </div>
    </div>
  );
}

export default App;
