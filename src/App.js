import './App.css';
import { useState } from 'react';
import {Todo} from './Todo';

function App() {

  let [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodo = (event) => {
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    const task = {
      id: todos.length === 0 ? 1 : todos[todos.length-1].id+1,
      todo: todoValue,
      completed: false
    };
    setTodos([...todos, task]);
    // alert('helo');
    // setTodos("");
  };

  const deleteTodo = (id) => {
    // const updatedTodoList = todos.filter((name) => {
      // if(name === todo) {
      //   return false;
      // } else {
      //   return true;
      // }
    // });
    // setTodos(updatedTodoList);

    // console.log(id);
    setTodos(todos.filter((name) => name.id !== id));
  };

  // const completeTodo = (id) => {
  //   setTodos(todos.map((todo) => {
  //     if(todo.id === id) {
  //       return {...todo, completed: true};
  //     } else {
  //       return todo;
  //     }
  //   });
  //   );
  // };


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
    <div className="App">
      <div className='addTodo'>
        <input onChange={getTodo} value={todoValue}/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className='todoList'>
        {todos.map((todo, key) => {
          return <Todo 
                  todoName={todo.todo} 
                  todoId={todo.id} key={key} 
                  completed={todo.completed}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
        })}
      </div>
    </div>
  );
}

export default App;
