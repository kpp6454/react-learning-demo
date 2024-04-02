import React, { useState } from 'react'

export const Todo = () => {

  const [todo, setTodo] = useState("");
  const [todoItems, settodoItems] = useState([])

  function submitData(e){
      e.preventDefault();      
      settodoItems([todo, ...todoItems]);
      setTodo("");      
  }

  function removeTodo(e){
    e.target.parentElement.remove() 
  }

  return (    
    <>
      <form onSubmit={submitData}>
          <input onChange={(e) => setTodo(e.target.value)} placeholder='Type here to add a text below' type="text" value={todo} />
          <button type='submit'>Submit</button>
      </form>      
      <ul className="display-todoitems">
         {todoItems.map((items) => (
            <li key={{items}}>{items} <span onClick={(e) => removeTodo(e)} className='del-todo'>&times;</span></li>
         ))}
      </ul>
    </>
  )
}
