import React, { useEffect, useState } from 'react'
import './UserWidget.css'
import { Link } from 'react-router-dom'

function UserWidget() {  
  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleOffClick)

    return () => {
      document.removeEventListener('click', handleOffClick)
    }
  }, [isOpen])

  const handleOffClick = () => {
    // if (isOpen) {      
    //   setIsOpen(false)        
    // }
  }


  return (
    <div className="dropdown-wrapper" >
      <div className="profile-avatar" id="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
      </div>

      <div className={`dropdown-menu shadow-lg ${isOpen ? "visible" : ""}`}>
        <Link to="/dashboard" className="dropdown-item">Dashboard</Link>
        <details className="sub-list">
          <summary><i className="fas fa-long-arrow-alt-right mr-2"></i> Projects</summary>
          <div className="details-list">
            <Link to="/dashboard/project/new" className="dropdown-item">Create New</Link>
          </div>
        </details>
        <Link to="#" className="dropdown-item">Profile</Link>
        <Link to="#" className="dropdown-item">Account</Link>
        <Link to="/signout" className="dropdown-item">Sign Out</Link>
      </div>
    </div>
  )
}

export default UserWidget
