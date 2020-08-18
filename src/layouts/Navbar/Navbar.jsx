import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import UserWidget from '../UserWidget/UserWidget';
import { useAuthState } from '../../Providers/AuthProvider';


function Navbar() {
  const {isAuthenticated} = useAuthState();

  return (
    <nav className="ml-4 mr-4">
      <ul className="flex items-center">
        <li>
          <Link to="/" className="nav-item" >Home</Link> 
        </li>

        <li>
          <Link to="#" className="nav-item">Explore</Link>
        </li>

        {isAuthenticated &&
          <li className="ml-4">
            <UserWidget />
          </li>
        }

        {!isAuthenticated &&
          <li>
            <Link to="/signup" className="nav-item">Sign Up / Login</Link>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar
