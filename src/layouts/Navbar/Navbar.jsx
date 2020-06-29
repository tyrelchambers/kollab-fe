import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link to="#" className="nav-item" >Home</Link> 
        </li>

        <li>
          <Link to="#" className="nav-item" >Projects</Link> 
        </li>

        <li>
          <Link to="#" className="nav-item" >Open Source</Link> 
        </li>

        <li>
          <Link to="#" className="nav-item" >Launch</Link> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
