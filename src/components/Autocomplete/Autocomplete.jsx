import React from 'react'
import './Autocomplete.css'

const Autocomplete = ({list, clickHandler}) => {
  return (
    <div className="autocomplete-wrapper">
      {list.map(item => (
        <p key={item.uuid} className="autocomplete-item" onClick={(e) => clickHandler(e, item)}>{item.email}</p>
      ))}
    </div>
  )
}

export default Autocomplete
