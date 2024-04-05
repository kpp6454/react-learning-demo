import React, { useState } from 'react';

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function submitData(e) {
    e.preventDefault();
    if (todo.trim() !== "") {        
      setTodoItems([{ text: todo, read: false }, ...todoItems]);
    }
    setTodo("");      
  }

  function removeTodo(index) {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  }

  function markAsRead(index) {
    setTodoItems(todoItems.map((item, i) => {
      if (i === index) {
        return { ...item, read: !item.read };
      }
      return item;
    }));
  }

  const sortedTodoItems = todoItems.sort((a, b) => {
    if (a.read !== b.read) {
      // If one todo is marked and the other is not, marked todo goes below
      return a.read ? 1 : -1;
    }
    // Otherwise, maintain original order
    return 0;
  });

  return (    
    <>
      <form onSubmit={submitData}>
          <input onChange={(e) => setTodo(e.target.value)} placeholder='Type here to add a text below' type="text" value={todo} />
          <button type='submit'>Submit</button>
      </form>      
      <ul className="display-todoitems">          
         {sortedTodoItems.map((item, index) => (          
            <li key={index} className={item.read ? 'read' : ''}>
              {item.text} 
              <span onClick={() => removeTodo(index)} className='del-todo'>&times;</span>
              <span onClick={() => markAsRead(index)} className='mark'>{item.read ? 'Unmark' : 'Mark'}</span>
            </li>          
         ))}                  
      </ul>
    </>
  )
}
