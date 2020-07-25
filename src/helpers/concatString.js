import React from 'react'

export const concat = (title, endNum) => {
  if (!title) return false;
  console.log(title)
  const str = title.length < endNum ? title : title.slice(0,endNum) + "...";
  return str; 
}

export const concatElem = (state, limit) => {
  return <p className="text-gray-500">{state.length}/{limit} <span className={`${state.length > limit ? "text-red-500" : ""}`}>{state.length > limit ? `+${state.length - limit}` : ""}</span></p>
}