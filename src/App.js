import './App.css';
import { useEffect, useState } from 'react';
import { Todo } from './Todo';



function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodoAmount, setCompletedTodoAmount] = useState(0);
  const [allCompleted, setAllCompleted] = useState(false);

  let todoLength = todos.length;
  
  useEffect(() => {
    if(todoLength > 0) {
      const allCompleted = todos.every((todo) => {
        return todo.completed === true;
      });
      
      if(allCompleted) {
        setAllCompleted(true);
      } else {
        setAllCompleted(false);
      };
    };
    
    setCompletedTodoAmount(todos.filter((todo) => todo.completed).length);

  }, [todos]);

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

  const setNewTodos = () => {
    setTodos([]);
    setAllCompleted(false);
  };

  return (
    <div className="wrapper">
      <div className='input'>
        <input className='createtodo' onChange={getInputValue} placeholder='Create new todo...'/>
        <button className='addbtn' onClick={addTodo}>Add</button>
      </div>

      {todoLength > 0 && 
        <div className='head'>
          {allCompleted === true ? <p>All todo completed</p> : <p>{completedTodoAmount} completed</p>}
          {todoLength > 1 ? <p>{todoLength} todos</p> : <p>{todoLength} todo</p>}
        </div>
      }
      
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
      
      {allCompleted && 
        <button className='setNew' onClick={setNewTodos}>Set new Todos</button>
      }
    </div>
  );
}

export default App;
