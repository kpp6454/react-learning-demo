import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [countBy, setCountBy] = useState(1);
  const [message, setMessage] = useState('');
  
  const handleButtonClick = (action) => {
    if (action === 'increment') {
      setCount(count + countBy);
      setMessage('')
    } else if (action === 'decrement' && count > countBy) {      
      setCount(count - countBy);            
    }else {
      setCount(count); // Reset count to 0 if decrementing would result in negative value
      setMessage('Subtraction cannot be performed when the result is negative.');
    }
  };


  const countValueBy = (actionBy) => {
    if (actionBy === '+') {
      setCountBy(countBy + 1);      
    }else if (actionBy === '-' && countBy > 1){
      setCountBy(countBy - 1);      
    }
  };

  return (
    <>      
      <h3>Counter Value is: <strong>{count}</strong><br/>{message && <small className='errormsg'>{message}</small>}</h3>      
      <div>
          <button onClick={()=> handleButtonClick('decrement')}><strong>-</strong></button>          
          <button onClick={()=> handleButtonClick('increment')}><strong>+</strong></button>
      </div>
      <h3>Multuple state manage example:</h3>
      <h4>change increment value by: {countBy}</h4>
      <button onClick={()=> countValueBy('-')}><strong>-</strong></button>          
      <button onClick={()=> countValueBy('+')}><strong>+</strong></button>
    </>
  )
}
