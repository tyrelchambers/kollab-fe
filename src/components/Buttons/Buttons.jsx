import React from 'react'
import './Buttons.css'

const sharedProps = {
  onClick: "props.onClick",
  disabled: "props.disabled"
}

export const MainButton = (props) => <button className="btn primary hover:shadow-md" {...sharedProps} >{props.text}</button>
export const SecondaryButton = props => <button className="btn secondary" {...sharedProps}>{props.text}</button>