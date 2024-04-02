import React, { useState } from 'react'

export const AiTodo = () => {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');  

  const addTodo = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    const newTodo = { text: input, isMarked: false };
    setTodos([newTodo, ...todos]); // Adds the new todo at the top
    setInput(''); // Clears the input field
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  const toggleMarkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isMarked = !newTodos[index].isMarked; // Toggles the marked status
    // Separate marked and unmarked todos
    const markedTodos = newTodos.filter(todo => todo.isMarked);
    const unmarkedTodos = newTodos.filter(todo => !todo.isMarked);
    setTodos([...unmarkedTodos, ...markedTodos]); // Unmarked todos first, then marked todos
  };


  return (
    <div className="App">
    <h1>ToDo App</h1>
    <form onSubmit={addTodo}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add Todo</button>
    </form>
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.isMarked ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => toggleMarkTodo(index)}>
            {todo.isMarked ? 'Unmark' : 'Mark'}
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}
