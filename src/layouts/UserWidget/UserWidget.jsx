import React, { useEffect, useState } from 'react'
import './UserWidget.css'

function UserWidget() {  
  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    document.addEventListener('click', handleOffClick)

    return () => {
      document.removeEventListener('click', handleOffClick)
    }
  }, [isOpen])

  const handleOffClick = () => {
    if (isOpen) {      
      setIsOpen(false)        
    }
  }


  return (
    <div className="dropdown-wrapper" >
      <div className="profile-avatar" id="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
      </div>

      <div className={`dropdown-menu shadow-lg ${isOpen ? "visible" : ""}`}>
        <a href="#" className="dropdown-item">Dashboard</a>
        <a href="#" className="dropdown-item">Projects</a>
        <a href="#" className="dropdown-item">Some 1</a>
        <a href="#" className="dropdown-item">Some 2</a>
        <a href="#" className="dropdown-item">Some 3</a>
      </div>
    </div>
  )
}

export default UserWidget
