import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import getApi from '../../api/getApi'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import isEmpty from '../../helpers/objIsEmpty'
import { H1, H3 } from '../../components/Headings/Headings'
import './Project.css'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { ThirdButton, SecondaryButton } from '../../components/Buttons/Buttons'
import { toast } from 'react-toastify'
import ProfileMini from '../../components/ProfileMini/ProfileMini'

const Project = ({UserStore}) => {
  const history = useHistory()
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

  const deleteHandler = () => {
    const answer = window.confirm("Are you sure you want to delete this project?")

    if (answer) {
      getApi({
        url: `/projects/${projectId}`,
        method: 'delete'
      }).then(res => {
        if (res) {
          
          history.push('/dashboard')
        }
      })
    }
  }

  const likeHandler = () => {
    getApi({
      url: `/projects/${projectId}/like`,
      method: 'put'
    })
  }

  const dislikeHandler = () => {
    getApi({
      url: `/projects/${projectId}/dislike`,
      method: 'put'
    })
  }

  const likeDislikeRatio = () => {
    const likes = project.likers.length;
    const dislikes = project.dislikers.length;
    const ratio = (likes / (likes + dislikes) * 100).toFixed(2)

    if (likes === 0 && dislikes === 0) {
      return <p className="font-bold">No Ratings</p>
    } else {
      return <p className={`${ratio <= 30 ? "text-red-500" : (ratio >= 31 && ratio <= 49) ? "text-yellow-500" : "text-green-500"} font-bold`}>{ratio}%</p>
    }
  }
  
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
            <div className="flex items-center mt-6">
              <Link to={`/dashboard/project/${project.uuid}/edit`} className="btn-third btn green text-center mr-4">Edit project</Link>
              <ThirdButton
                text="Delete Project"
                className="danger"
                onClick={deleteHandler}
              />
            </div>
          }
        </div>
      </div>

      <div className="w-full project-share-bar mt-8 mb-8 flex items-center pl-4 pr-4 justify-between">
        <div className="flex items-center">
          <div className="fb-share-button mr-4" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large">
            <a target="_blank" href={window.location.href} className="fb-xfbml-parse-ignore">Share</a>
          </div>

          <a className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=Hello%20world"
            data-size="large">
            Tweet</a>
        </div>
        {likeDislikeRatio()}
      </div>

      <div className="flex">
        <div className="w-3/5 mr-4">
          <div className="flex flex-col mt-4">
            <H3>Introduction</H3>
            <InfoBlock>
              <p className="break-all">{project.description}</p>
            </InfoBlock>
          </div>
          <hr/>
          <div className="flex flex-col mt-4">
            <InfoBlock>
              <div className="flex">
                <p className="font-bold mr-8">Does this project sound interesting?</p>
                <ThirdButton
                  text="Yes"
                  className="green mr-2 ml-2"
                  onClick={likeHandler}
                />

                <ThirdButton
                  text="No"
                  className="danger mr-2 ml-2"
                  onClick={dislikeHandler}
                />
              </div>
            </InfoBlock>
          </div>
        </div>

        <div className="w-2/5 mt-4">
          <div className="flex flex-col">
            <H3>Helpful Links</H3>
            {project.ProjectLinks && project.ProjectLinks.map((link, id) => (
              <InfoBlock key={id}>
                <div className="flex items-center">
                  <i className="fas fa-hashtag text-2xl text-blue-600 mr-4"></i>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">{link.link}</a>
                </div>
              </InfoBlock>
            ))}
            {!project.ProjectLinks.length &&
              <InfoBlock>
                <p>No links provided</p>
              </InfoBlock>
            }
          </div>

          <div className="flex flex-col mt-4">
            <H3>The Creator</H3>

            <InfoBlock>
              <ProfileMini user={project.owner} />
            </InfoBlock>
          </div>

          <div className="flex flex-col mt-4">
            <H3>Open Positions</H3>

            <InfoBlock>
              {project.ProjectRoles.length &&
                <>
                  {project.ProjectRoles.map((role, id) => (
                    <p key={id} className="mt-2 mb-6 font-medium">{role.title}</p>
                  ))}

                  <SecondaryButton
                    text="Contact creator"
                  />
                </>
              }

              {!project.ProjectRoles.length &&
                <p>No open positions</p>
              }
            </InfoBlock>
          </div>

          <div className="flex flex-col mt-4">
            <H3>Collaborators</H3>

            <InfoBlock>
              {project.collaborators.length > 0 &&
                project.collaborators.map((person, id) => (
                  <ProfileMini key={id} user={person}/>
                ))
              }

              {!project.collaborators.length && <p>No collaborators on this project</p>}
            </InfoBlock>
          </div>
        </div>
      </div>
    </DisplayWrapper>
  )
}

export default inject("UserStore")(observer(Project))
