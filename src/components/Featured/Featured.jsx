import React from 'react'
import { H1 } from '../Headings/Headings'
import './Featured.css'
import { Link } from 'react-router-dom'

function Featured({project}) {
  return (
    <div className="featured-wrapper p-10 mt-8 ">
      <div className="featured-title">
        <H1>
          <Link to={`/project/${project.uuid}`} className="hover:underline">{project.title}</Link>
        </H1>
        <p className="featured-description">{project.description}</p>
      </div>
      <img src={project.thumbnailUrl} alt="" className="featured-thumbnail"/>
    </div>
  )
}

export default Featured
