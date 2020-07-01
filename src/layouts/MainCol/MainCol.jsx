import React from 'react'
import './MainCol.css'

function MainCol(props) {
  return (
    <div className="w-full flex flex-col mr-4">
      {props.children}
    </div>
  )
}

export default MainCol
