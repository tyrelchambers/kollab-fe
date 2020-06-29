import React from 'react'

export const H1 = (props) => <h1 className="text-4xl font-bold">{props.children}</h1>
export const H2 = props => <h2 className="text-2xl font-bold">{props.children}</h2>
export const H3 = props => <h3 className="text-lg font-bold flex items-center">{props.children}</h3>

export const H1Subtitle = props => <p className="text-2xl font-thin">{props.children}</p>
export const H2Subtitle = props => <p className="text-lg font-thin">{props.children}</p>
export const H3Subtitle = props => <p className="text-md font-thin">{props.children}</p>