import React from 'react'
import './Inputs.css'

export const Search = props => {
  return (
    <div className={`input-wrapper w-full max-w-lg ${props.withIcon ? `with-icon` : ""}`}>
      <i className="fas fa-search"></i>
      <input type="text" placeholder={props.placeholder || "Search..."} className="form-input"/>    
    </div>
  )
}