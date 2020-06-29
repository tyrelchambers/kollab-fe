import React from 'react'
import './Buttons.css'

export const MainButton = (props) => <button className="btn primary hover:shadow-md" onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
