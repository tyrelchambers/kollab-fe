import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import UserWidget from '../UserWidget/UserWidget';
import { useAuthState } from '../../Providers/AuthProvider';


function Navbar() {
  const {isAuthenticated} = useAuthState();

  return (
    <nav>
      <ul className="flex items-center">
        <li>
          <Link to="/" className="nav-item" >Home</Link> 
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
{console.log(isAuthenticated)}
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
