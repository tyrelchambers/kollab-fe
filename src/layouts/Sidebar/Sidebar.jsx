import React from 'react'
import './Sidebar.css'

function Sidebar(props) {
  return (
    <div className="sidebar">
      {props.children}
    </div>
  )
}

export default Sidebar
