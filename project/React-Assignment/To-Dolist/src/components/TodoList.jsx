/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
        <span className='icons'>
      <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  )
}

export default TodoList
