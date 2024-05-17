import React from 'react'
import Review from './Review';

const TwoWayBinding = () => {

  const [textAreaInput, setTextAreaInput] = React.useState("");
    
    const [textInput, setTextInput] = React.useState("")
    
    function handleChangeInput(event, inputType){
       const value = event.target.value;
        if (inputType === 'textAreaBox') {
            setTextAreaInput(value);
        }
        if (inputType === "inputBox") {
            setTextInput(value);
        }
    }

  return (
    <>
      <section id="feedback">
        <h3>Please share some feedback</h3>
        <p>
          <label>Your Feedback</label>
          <textarea value={textAreaInput} onChange={(e) => handleChangeInput(e, 'textAreaBox')} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={textInput} onChange={(e) => handleChangeInput(e, 'inputBox')}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        <Review feedback={textAreaInput} student={textInput} />          
      </section>
    </>
  )
}

export default TwoWayBinding