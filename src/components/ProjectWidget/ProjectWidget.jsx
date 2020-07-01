import React from 'react'
import { H2 } from '../Headings/Headings'
import './ProjectWidget.css'

function ProjectWidget({project}) {
  return (
    <div className="flex widget-wrapper">
      <div className="widget-thumbnail-wrapper">
        <img src={project.thumbnail} alt="" className="widget-thumbnail"/>
      </div>

      <div className="widget-body flex flex-1 justify-between ">
        <div className="flex flex-col justify-between">
          <div className="widget-body-header">
            <H2>{project.title}</H2>
            
            <div className="flex">
              {project.openPositions.map((x, id) => <p key={id} className="text-sm text-blue-700 mt-1 mr-2">{x}</p>)}
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <i className="fas fa-user-astronaut mr-2 text-gray-700 text-sm"></i>
              <p className="text-gray-600">{project.collaborators}</p>
            </div>

            <div className="flex items-center">
              <i className="fas fa-comment-alt mr-2 text-gray-700 text-sm"></i>
              <p className="text-gray-600">{project.comments}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {project.isAccepting &&
            <i className="fas fa-handshake text-2xl mr-8 text-gray-700"></i>
          }

          <div className="flex flex-col items-center">
            <i className="fas fa-fire text-2xl text-red-500"></i>
            <p className="text-red-500 mt-2">{project.likes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget
