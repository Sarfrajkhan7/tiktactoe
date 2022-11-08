import React from 'react'

function Square(props) {
  return (
    <div
    style={{display:"flex"}}  
    className='square'    onClick={props.onClick}>
   
      <h1 style={{color:"tomato"}}>{props.value}</h1>

    </div>
  )
}

export default Square;