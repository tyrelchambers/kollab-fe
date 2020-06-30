import React from 'react'
import './Buttons.css'

const sharedProps = {
  onClick: {},
  disabled: "props.disabled"
}

export const MainButton = (props) => <button className="btn primary hover:shadow-md" onClick={props.onClick} disabled={props.disabled} >{props.text}</button>
export const SecondaryButton = props => <button className="btn secondary" onClick={props.onClick} disabled={props.disabled}>{props.text}</button>