import React from 'react'
import './ProjectPosition.css'

const ProjectPosition = ({position, removePositionHandler, id}) => {
  return (
    <div className="project-position">
      <div className="flex items-center mb-4">
        <i className="fas fa-times-circle text-sm text-red-500 mr-4" onClick={() => removePositionHandler(id)}></i>
        <h4>{position.title}</h4>
      </div>

      <h4 className="mt-4">Summary</h4>
      <p>{position.summary}</p>

      <h4 className="mt-4">Experience</h4>
      <p>{position.experience}</p>
    </div>
  )
}

export default ProjectPosition
