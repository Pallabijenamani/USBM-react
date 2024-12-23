/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

function Todoinput(props) {
   // eslint-disable-next-line no-unused-vars
   const [inputText,setInputText] = useState('');
  return (
    <div className="input-container">
      <input type="text" className='input-box-todo' placeholder='Enter your todo'
      value={inputText}
      onChange={e=>{
          setInputText(e.target.value)
      }}
      />
      <button className='add-btn'
      onClick={()=>{
        props.addList(inputText)
        setInputText("");
      }}>+</button>
    </div>
  )
};

export default Todoinput
