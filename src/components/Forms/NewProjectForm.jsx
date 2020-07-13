import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import ImageUploader from '../ImageUploader/ImageUploader';
import { SecondaryButton, MainButton } from '../Buttons/Buttons';
import SmallCard from '../SmallCard/SmallCard';
import { useForm } from 'react-hook-form';
import FormError from '../FormError/FormError';
import getApi from '../../api/getApi';
import Autocomplete from '../Autocomplete/Autocomplete';
import { toast } from 'react-toastify';

function NewProjectForm({
  autocomplete,
  setAutocomplete,
  state,
  projectLinks,
  collaborators,
  inputHandler,
  addProjectLink,
  addContributorHandler,
  removeItemHandler,
  removeContributorHandler
}) {


  const history = useHistory();

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

  const submitHandler = async e => {
    const payload = {
      ...state,
      collaborators: [...collaborators]
    }
    
    const projectId = await getApi({
      url: '/projects/new',
      method: 'post',
      data: payload
    }).then(res => {
      if( res ) {
        toast.success(res.message)
        return res.project.uuid
      }
    })

    getApi({
      url: '/projectLinks/',
      method: 'post',
      data: {
        projectLinks,
        projectId
      }
    }).then(console.log)
    // history.push('/dashboard')

  }

  return (
    <form className="form shadow-lg " onSubmit={handleSubmit(submitHandler)}>

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
        <label htmlFor="collaborators" className="form-label">Collaborators</label>

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
      <div className="mt-2 mb-2">
        <Autocomplete 
          list={autocomplete}
          clickHandler={(e, user) => addContributorHandler(e, user)}
        />
      </div>
      <div className="collaborator-list mt-2 mb-8">
        {collaborators.map((person, id) => (
          <SmallCard key={id} text={person.email} removeItem={e => removeContributorHandler(id)}/>
        ))}
      </div>

      <div className="field-group">
        <label htmlFor="projectLinks" className="form-label">Project Links</label>

        <div className="flex">
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

      <div className="collaborator-list mt-2">
        {projectLinks.map((link, id) => (
          <SmallCard key={id} text={link.link} removeItem={() => removeItemHandler(id)}/>
        ))}
      </div>

      <div className="mt-6">
        <MainButton
          text="Create Project"
          type="submit"
        />
      </div>
    </form>

  )
}

export default NewProjectForm
