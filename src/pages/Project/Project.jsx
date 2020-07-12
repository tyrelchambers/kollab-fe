import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getApi from '../../api/getApi'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import isEmpty from '../../helpers/objIsEmpty'
import { H1, H2 } from '../../components/Headings/Headings'
import './Project.css'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const Project = ({UserStore}) => {
  const { projectId } = useParams()
  const [ project, setProject ] = useState({})
  useEffect(() => {
    getApi({
      url: `/projects/${projectId}`
    }).then(res => {
      if (res) {
        setProject(res)
      }
    })
  }, [])

  if (isEmpty(project)) return null;

  return (
    <DisplayWrapper>
      <div className="project-header flex">
        <div className="project-thumbnail-wrapper">
          <img src={project.thumbnailUrl} alt="" className="project-thumbnail"/>
        </div>
        
        <div className="flex flex-col">
          <H1 className="mt-0 mb-2">{project.title}</H1>
          <p className="mt-2">{project.headline}</p>
          {(UserStore.user && project.userId === UserStore.user.uuid) && 
            <Link to={`/dashboard/project/${project.uuid}/edit`} className="text-blue-500 font-thin underline mt-6">Edit project</Link>
          }
        </div>
      </div>

      <div className="w-full project-share-bar mt-8 mb-8">

      </div>

      <div className="flex">
        <div className="w-3/5 mr-4">
          <div className="flex flex-col mt-4">
            <H2>Introduction</H2>
            <InfoBlock>
              <p className="break-all">{project.description}</p>
            </InfoBlock>
          </div>
        </div>

        <div className="w-2/5 mt-4">
          <div className="flex flex-col">
            <H2>Helpful Links</H2>
            {project.ProjectLinks && project.ProjectLinks.map((link, id) => (
              <InfoBlock key={id}>
                <div className="flex items-center">
                  <i className="fas fa-hashtag text-2xl text-blue-600 mr-4"></i>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">{link.link}</a>
                </div>
              </InfoBlock>
            ))}
          </div>

          <div className="flex flex-col mt-4">
            <H2>The Creator</H2>

            <InfoBlock>
              <div className="flex items-center">
                {project.User.avatar && <img src={project.User.avatar} />}

                <p className="font-bold">{project.User.username}</p>
              </div>
            </InfoBlock>
          </div>
        </div>
      </div>
    </DisplayWrapper>
  )
}

export default inject("UserStore")(observer(Project))
