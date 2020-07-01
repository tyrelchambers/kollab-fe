import React from 'react'
import './MainCol.css'

function MainCol(props) {
  return (
    <div className="w-full flex flex-col">
      {props.children}
    </div>
  )
}

export default MainCol
