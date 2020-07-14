import React from 'react'
import './InfoBlock.css'

function InfoBlock(props) {
  return (
    <div className="info-block-wrapper ">
      {props.children}
    </div>
  )
}

export default InfoBlock
