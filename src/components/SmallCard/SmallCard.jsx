import React from 'react'
import './SmallCard.css'

const SmallCard = ({text, removeItem}) => {
  return (
    <div className="small-card-wrapper flex items-center justify-between">
      {console.log(text)}
      <p>{text}</p>
      <i className="fas fa-times text-red-500 shadow-md" onClick={removeItem}></i>
    </div>
  )
}

export default SmallCard
