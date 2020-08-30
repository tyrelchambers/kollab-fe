import React, { useEffect, useState } from 'react'
import './UserWidget.css'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

function UserWidget({UserStore}) {  
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

      <div className={`dropdown-menu box-shadow  ${isOpen ? "visible" : ""}`}>
        <Link to={`/user/${UserStore.user.username}`} className="dropdown-item">Dashboard</Link>
        <details className="sub-list">
          <summary><i className="fas fa-long-arrow-alt-right mr-2"></i> Projects</summary>
          <div className="details-list">
            <Link to={`/user/${UserStore.user.username}/project/new`} className="dropdown-item">Create New</Link>
          </div>
        </details>
        <Link to="/profile/edit" className="dropdown-item">Profile</Link>
        <Link to="/signout" className="dropdown-item">Sign Out</Link>
      </div>
    </div>
  )
}

export default inject("UserStore")(observer(UserWidget))
