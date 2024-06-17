import React, { useState } from 'react';

export const StateLifting = () => {
  const [count, setcount] = useState(0);
  const countValue = ()=> setcount(prev=> prev + 1) 

  function CounterIncrement({counterClick}) {
    return <button type="button" className='btn' onClick={counterClick}>Add</button>
  }

  function CounterDisplay(){
    return <h3>Counter Display:- {count}</h3>
  }

  function HandleButtonClick(){

  }

  return (
    <>
      <h3>Click button to display count number</h3>
      <CounterIncrement counterClick={countValue}/>
      <CounterDisplay />
    </>
  );
};