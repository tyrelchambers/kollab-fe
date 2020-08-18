import React from 'react'
import { H2 } from '../Headings/Headings'
import './ProjectWidget.css'
import {concat} from '../../helpers/concatString'
import { Link } from 'react-router-dom'

function ProjectWidget({project}) {
  return (
    <div className="flex widget-wrapper">
      <div className="widget-thumbnail-wrapper ">
        <img src={project.thumbnailUrl} alt="" className="widget-thumbnail"/>
      </div>

      <div className="widget-body flex flex-1 justify-between ">
        <div className="flex flex-col justify-between">
          <div className="widget-body-header">
            <H2>
              <Link to={`/project/${project.uuid}`}>{project.title}</Link>
            </H2>
            
            <p className="text-sm text-blue-700 mt-1 mr-2 break-all">{concat(project.description, 100)}</p>

          </div>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <i className="fas fa-user-astronaut mr-2 text-gray-700 text-sm"></i>
              <p className="text-gray-600">{project.collaborators.length}</p>
            </div>

            <div className="flex items-center">
              <i className="fas fa-comment-alt mr-2 text-gray-700 text-sm"></i>
              <p className="text-gray-600">{project.Comments.length}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {project.openPositions &&
            <i className="fas fa-handshake text-2xl mr-2 ml-2 text-gray-700"></i>
          }

          <div className="flex flex-col items-center" style={{width:'50px'}}>
            <i className="fas fa-fire text-2xl text-red-500"></i>
            <p className="text-red-500 mt-2">{project.likers.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWidget
