import React from 'react'
import { H1 } from '../Headings/Headings'
import './Featured.css'

function Featured({project}) {
  return (
    <div className="featured-wrapper p-10 mt-8 ">
      <div className="featured-title">
        <H1>{project.title}</H1>
        <p className="featured-description">{project.description}</p>
      </div>
      <img src={project.thumbnailUrl} alt="" className="featured-thumbnail"/>
    </div>
  )
}

export default Featured
