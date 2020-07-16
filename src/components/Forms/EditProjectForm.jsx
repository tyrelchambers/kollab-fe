import React, { useState, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import getApi from '../../api/getApi'
import { toast } from 'react-toastify'
import FormError from '../FormError/FormError'
import ImageUploader from '../ImageUploader/ImageUploader'
import SmallCard from '../SmallCard/SmallCard'
import { SecondaryButton, MainButton } from '../Buttons/Buttons'
import Autocomplete from '../Autocomplete/Autocomplete'
import { H3 } from '../Headings/Headings'
import ProjectPosition from '../ProjectPosition/ProjectPosition'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'

const EditProjectForm = ({
  autocomplete,
  setAutocomplete,
  state,
  setState,
  projectLinks,
  setProjectLinks,
  collaborators,
  setCollaborators,
  inputHandler,
  addProjectLink,
  addContributorHandler,
  removeItemHandler,
  removeContributorHandler,
  positions,
  setPositions,
  positionState,
  setPositionState,
  addPositionHandler,
  removePositionHandler
}) => {
  const history = useHistory();
  const { projectId } = useParams()

  const ref = useRef(null);
  const supportingRef = useRef(null);

  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onBlur'
  });

  useEffect(() => {
    if ( state.collaborators.length > 3 ) {
      getApi({
        url: `/user/${state.collaborators}`,
      }).then(res => {
        setAutocomplete([...res])
      })
    }
  }, [state.collaborators])

  useEffect(() => {
    const fn = async () => {
      await getApi({
        url: `/projects/${projectId}/edit`
      }).then(res => {
        if (res) {
          const {
            collaborators,
            ProjectLinks,
            ProjectRoles,
            ...rest
          } = res

          setState({...state, ...rest})
          
          if (ProjectLinks) {
            setProjectLinks([...ProjectLinks])
          }

          if (collaborators.length) {
            setCollaborators([...collaborators])
          }

          if (ProjectRoles.length) {
            setPositions([...ProjectRoles])
          }
        }
      })
    }

    fn()
  }, [])

  const submitHandler = async e => {
    const payload = {
      ...state,
      collaborators: [...collaborators]
    }
    
    await getApi({
      url: `/projects/${state.uuid}/edit`,
      method: 'put',
      data: payload
    }).then(res => {
      if( res ) {
        
      }
    })

    getApi({
      url: '/projectLinks/',
      method: "post",
      data: {
        projectId,
        projectLinks: [...projectLinks]
      }
    })

    getApi({
      url: '/projectRoles/',
      method: 'post',
      data: {
        projectId,
        positions: [...positions]
      }
    })

    getApi({
      url: '/collaborators/',
      method: 'post',
      data:{
        projectId,
        collaborators: [...collaborators]
      }
    })

            //history.push('/dashboard')

  }
  
  return (
    <form className="flex flex-col container" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex">
        <div className="form w-1/2 mr-2" >
          <H3 className="mb-4 mt-2">Basics</H3>

          <div className="field-group">
            <label htmlFor="title" className="form-label">Title - <span className="italic text-sm text-gray-500">Required</span></label>
            <input type="text" className="form-input" placeholder="Super Cool Project" name="title" value={state.title} onChange={e => inputHandler(e)} ref={
              register({
                required: true
              })
            }/>
            {errors.title && <FormError error="Title is required" />}
          </div>

          <div className="field-group">
            <label htmlFor="headline" className="form-label">Headline - <span className="italic text-sm text-gray-500">Required</span></label>
            <input type="text" className="form-input" placeholder="The Elon Musk of projects" name="headline" value={state.headline} onChange={e => inputHandler(e)} ref={
              register({
                required: true
              })
            }/>
            {errors.headline && <FormError error="Headline is required" />}

          </div>

          <div className="field-group">
            <label htmlFor="description" className="form-label">Short Description - <span className="italic text-sm text-gray-500">Required</span></label>
            <textarea type="text" className="form-textarea" placeholder="A basic introduction of your project..." name="description" value={state.description} onChange={e => inputHandler(e)} ref={
              register({
                required: true,
                maxLength: 500
              })
            }/>
            {(errors.description && errors.description.type === "required") && <FormError error="Description is required" />}
            {(errors.description && errors.description.type === "maxLength") && <FormError error="Description is too long" />}

          </div>
          <div className="flex justify-end">
            <p className="text-gray-500">{state.description.length}/500 <span className={`${state.description.length > 500 ? "text-red-500" : ""}`}>{state.description.length > 500 ? `+${state.description.length - 500}` : ""}</span></p>
          </div>

          <div className="field-group">
            <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
            <p className="mb-4">For the best results, upload an image that is 500 x 500. Thumbnails are squares with rounded corners.</p>
            <ImageUploader
              imageRef={ref}
              maxFiles={1}
            />
          </div>

          <div className="field-group">
            <label htmlFor="supportingImages" className="form-label">Supporting Images</label>
            <p className="mb-4">Recommended size: 1280 x 720</p>
            <ImageUploader
              imageRef={supportingRef}
              maxFiles={6}
            />
          </div>

          <div className="field-group">
            <label htmlFor="topics" className="form-label">Topics</label>
            <input type="text" className="form-input" placeholder="comma separated topics (eg: productivity, health, awesome)" name="topics" value={state.topics} onChange={e => inputHandler(e)}/>
          </div>

          <div className="field-group">
            <label htmlFor="projectLinks" className="form-label">Project Links</label>

            <div className="flex mb-2">
              <input 
                type="text" 
                name="projectLinks" 
                className="form-input flex-auto" 
                placeholder="Add a project link" 
                value={state.projectLinks}
                onChange={e => inputHandler(e)}
                onKeyPress={(e) => {
                  if (e.which === 13) {
                    addProjectLink(e)
                  }
                }}
              />
              <div className="w-20 ml-4">
                <SecondaryButton
                  text="Add"
                  onClick={(e) => addProjectLink(e)}
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            {projectLinks.map((item, id) => (
              <SmallCard key={id} text={item.link} removeItem={() => removeItemHandler(item, id)}/>
            ))}
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <InfoBlock>
            <H3 className="mb-4">Open Positions</H3>

            <div className="field-group">
              <label htmlFor="positionTitle" className="form-label">Position title</label>
              <input
                type="text"
                className="form-input"
                name="positionTitle"
                placeholder="Chief Bagel Officer"
                onChange={e => setPositionState({ ...positionState, title: e.target.value })}
                value={positionState.title}
              />
            </div>

            <div className="field-group">
              <label htmlFor="positionDescription" className="form-label">Position description</label>
              <textarea
                type="text"
                className="form-textarea"
                name="positionDescription"
                placeholder="Describe what this position would help you with..."
                onChange={e => setPositionState({ ...positionState, description: e.target.value })}
                value={positionState.description}
              />
            </div>

            <div className="field-group">
              <label htmlFor="positionExperience" className="form-label">Experience</label>
              <input
                type="text"
                className="form-input"
                name="positionExperience"
                placeholder="Does this require any experience?"
                onChange={e => setPositionState({ ...positionState, experience: e.target.value })}
                value={positionState.experience}
              />
            </div>

            <div className="h-10 mt-4">
              <SecondaryButton
                text="Save position"
                onClick={addPositionHandler}
              />
            </div>
            {positions.length > 0 &&
              positions.map((pos, id) => <ProjectPosition position={pos} key={id} id={id} removePositionHandler={() => removePositionHandler(pos, id)} />)
            }
          </InfoBlock>

          <InfoBlock>
            <div className="field-group">
              <H3 className="mb-4">Collaborators</H3>
              <p className="italic text-sm mt-2 mb-4">Collaborators are people who can help in more ways than one. Rather than adding someone to a position, add them as a collaborator in order to show them as a helper in more than just a singular role.</p>

              <p className="italic text-sm mt-2 mb-4">Collaborators will be emailed to let them know they've been added to your project.</p>

              <div className="flex">
                <input
                  type="text"
                  name="collaborators"
                  className="form-input flex-auto"
                  placeholder="Search for a user via email"
                  id="addContributorInput"
                  value={state.collaborators}
                  onChange={e => inputHandler(e)}
                />
              </div>
            </div>
            <div className=" mb-2">
              <Autocomplete
                list={autocomplete}
                clickHandler={(e, user) => addContributorHandler(e, user)}
              />
            </div>
            {collaborators.length > 0 &&
              <div className="mt-8">
                {collaborators.map((person, id) => (
                  <SmallCard key={id} text={person.email} removeItem={e => removeContributorHandler(person, id)} />
                ))}
              </div>
            }
          </InfoBlock>
        </div>
      </div>

      <div className="mt-6 mb-6 w-1/4 mx-auto">
        <MainButton
          text="Save Changes"
          type="submit"
        />
      </div>
    </form>
  )
}

export default EditProjectForm
