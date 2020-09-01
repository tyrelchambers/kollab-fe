import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import UserWidget from "../UserWidget/UserWidget";
import { useAuthState } from "../../Providers/AuthProvider";

function Navbar() {
  const { isAuthenticated } = useAuthState();

  return (
    <nav>
      <ul className="flex-col w-full navbar">
        <li>
          <Link to="/" className="nav-item flex justify-center">
            <i className="fas fa-home text-white text-xl"></i>
          </Link>
        </li>

        <li>
          <Link to="/explore" className="nav-item flex justify-center">
            <i class="fas fa-compass text-white text-xl"></i>
          </Link>
        </li>

        <li>
          <Link to="/about" className="nav-item flex justify-center">
            <i className="fas fa-question-circle text-white text-xl"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
