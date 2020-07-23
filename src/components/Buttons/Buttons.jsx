import React from 'react'
import './Buttons.css'


export const MainButton = (props) => <button className={`btn primary hover:shadow-md ${props.className ? props.className : ""}`} onClick={props.onClick} type={props.type || "button"} disabled={props.disabled} >{props.text}</button>
export const SecondaryButton = props => <button className={`btn secondary ${props.className ? props.className : ""}`} onClick={props.onClick} type={props.type || "button"} disabled={props.disabled}>{props.text}</button>
export const ThirdButton = props => <button className={`btn btn-third ${props.className ? props.className : ""}`} onClick={props.onClick} type={props.type || "button"} disabled={props.disabled} >{props.text}</button>

export const NoStyleButton = props => <button className={`btn-no-style ${props.className ? props.className : ""}`} onClick={props.onClick} type={props.type || "button"} disabled={props.disabled} >{props.text}</button>