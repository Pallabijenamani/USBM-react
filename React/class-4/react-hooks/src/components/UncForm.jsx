/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

const UncForm = () => {
    const [name, setName] = useState("");
    const nameRef= useRef(null);
    const showName =  () => {
        // setName(nameRef.current.value);
        alert(nameRef.current.value);
        nameRef.current.value="";
    }
    console.log(name);
    console.log(nameRef);
    
  return (  
    <div>
        <label htmlFor="">Name :</label>
       <input  className='border-2 m-2' type="text"  placeholder='Enter your Name' ref={nameRef}/>
       <button onClick={showName} className='border-2'>Show Name</button>
    </div>
  )
}

export default UncForm
