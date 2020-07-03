import React from 'react'
import './Buttons.css'


export const MainButton = (props) => <button className="btn primary hover:shadow-md" onClick={props.onClick} type={props.type} disabled={props.disabled} >{props.text}</button>
export const SecondaryButton = props => <button className="btn secondary" onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.text}</button>