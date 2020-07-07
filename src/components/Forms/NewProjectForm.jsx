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

function NewProjectForm() {
  const [ state, setState ] = useState({
    title: "",
    headline: "",
    description: "",
    thumbnail: "",
    supportingImgs: [],
    topics: "",
    collaborators: "",
    githubLinks: ""
  })
  const [ githubLinks, setGithubLinks ] = useState([])
  const [ collaborators, setCollaborators ] = useState([])
  const [ autocomplete, setAutocomplete] = useState([])

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

  const submitHandler = e => {
    const payload = {
      ...state,
      githubLinks: [...githubLinks],
      collaborators: [...collaborators]
    }
    
    getApi({
      url: '/projects/new',
      method: 'post',
      data: payload
    }).then(res => {
      if( res ) {
        toast.success(res.message)
        history.push('/dashboard')
      }
    })
  }

  const inputHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const addGithubLink = (e) => {
    e.preventDefault()
    if (!state.githubLinks) return false;

    setGithubLinks([...githubLinks, state.githubLinks])
    setState({...state, githubLinks: ""})

  }

  const addContributorHandler = (e, user) => {
    e.preventDefault()
    if (!state.collaborators) return false;

    setCollaborators([...collaborators, user || state.collaborators])
    setState({...state, collaborators: ""})
    setAutocomplete([])
  }

  const removeItemHandler = id => {
    const clone = githubLinks
    clone.splice(id, 1)

    setGithubLinks([...clone])
  }

  const removeContributorHandler = id => {
    const clone = collaborators
    clone.splice(id, 1)

    setCollaborators([...clone])
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
        <label htmlFor="githubLinks" className="form-label">Github Links</label>

        <div className="flex">
          <input 
            type="text" 
            name="githubLinks" 
            className="form-input flex-auto" 
            id="addGithubLinkInput" 
            placeholder="add a github url" 
            value={state.githubLinks}
            onChange={e => inputHandler(e)}
            onKeyPress={(e) => {
              if (e.which === 13) {
                addGithubLink(e)
              }
            }}
          />
          <div className="w-20 ml-4">
            <SecondaryButton
              text="Add"
              onClick={(e) => addGithubLink(e)}
            />
          </div>
        </div>
      </div>

      <div className="collaborator-list mt-2">
        {githubLinks.map((link, id) => (
          <SmallCard key={id} text={link} removeItem={() => removeItemHandler(id)}/>
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
