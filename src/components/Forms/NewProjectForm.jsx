import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { H2, H2Subtitle } from '../Headings/Headings';
import ImageUploader from '../ImageUploader/ImageUploader';
import { SecondaryButton, MainButton } from '../Buttons/Buttons';
import SmallCard from '../SmallCard/SmallCard';
import { useForm } from 'react-hook-form';
import FormError from '../FormError/FormError';

function NewProjectForm() {
  const [ state, setState ] = useState({
    title: "",
    headline: "",
    description: "",
    thumbnail: "",
    supportingImgs: [],
    topics: "",
    collaborators: [],
    githubLinks: []
  })
  const [ githubLinks, setGithubLinks ] = useState([])
  const [ contributors, setContributors ] = useState([])
  const history = useHistory();
  const ref = useRef(null);
  const supportingRef = useRef(null);
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = e => {

    
  }

  const inputHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const addGithubLink = (e) => {
    e.preventDefault()
    const input = document.querySelector("#addGithubLinkInput");
    const newLink = {
      url: input.value
    }
    setGithubLinks([...githubLinks, newLink])
    input.value = ""

  }

  const addContributorHandler = (e) => {
    e.preventDefault()
    const input = document.querySelector("#addContributorInput");
    const newContributor = {
      email: input.value
    }
    setContributors([...contributors, newContributor])
    input.value = ""
  }

  const removeItemHandler = id => {
    const clone = githubLinks
    clone.splice(id, 1)

    setGithubLinks([...clone])
  }

  const removeContributorHandler = id => {
    const clone = contributors
    clone.splice(id, 1)

    setContributors([...clone])
  }

  return (
    <form className="form shadow-lg " onSubmit={handleSubmit(submitHandler)}>

      <div className="field-group">
        <label htmlFor="title" className="form-label">Title - <span className="italic text-sm text-gray-500">Required</span></label>
        <input type="text" className="form-input" name="title" placeholder="Super Cool Project" name="title" value={state.title} onChange={e => inputHandler(e)} ref={
          register({
            required: true
          })
        }/>
        {errors.title && <FormError error="Title is required" />}
      </div>

      <div className="field-group">
        <label htmlFor="headline" className="form-label">Headline - <span className="italic text-sm text-gray-500">Required</span></label>
        <input type="text" className="form-input" name="headline" placeholder="The Elon Musk of projects" name="headline" value={state.headline} onChange={e => inputHandler(e)} ref={
          register({
            required: true
          })
        }/>
        {errors.headline && <FormError error="Headline is required" />}

      </div>

      <div className="field-group">
        <label htmlFor="description" className="form-label">Short Description - <span className="italic text-sm text-gray-500">Required</span></label>
        <textarea type="text" className="form-textarea" name="description" placeholder="A basic introduction of your project..." name="description" value={state.description} onChange={e => inputHandler(e)} ref={
          register({
            required: true
          })
        }/>
        {errors.description && <FormError error="Description is required" />}
      </div>
      <div className="flex justify-end">
        <p className="text-gray-500">0/500</p>
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
        <input type="text" name="topics" className="form-input" placeholder="comma separated topics (eg: productivity, health, awesome)" name="topics" value={state.topics} onChange={e => inputHandler(e)}/>
      </div>

      <div className="field-group">
        <label htmlFor="collaborators" className="form-label">Collaborators</label>

        <div className="flex">
          <input 
            type="text" 
            name="collaborators" 
            className="form-input flex-auto" 
            placeholder="user's email" 
            id="addContributorInput" 
            onKeyPress={(e) => {
              if (e.which === 13) {
                addContributorHandler(e)
              }
            }}
            ref={
              register({
                min: 0
              })
            }
          />
          <div className="w-20 ml-4">
            <SecondaryButton
              text="Add"
              onClick={e => addContributorHandler(e)}
            />
          </div>
        </div>


      </div>
      <div className="collaborator-list mt-2 mb-8">
        {contributors.map((person, id) => (
          <SmallCard key={id} text={person.email} removeItem={e => removeContributorHandler(id)}/>
        ))}
      </div>

      <div className="field-group">
        <label htmlFor="githubLinks" className="form-label">Github Links</label>

        <div className="flex">
          <input type="text" name="githubLink" className="form-input flex-auto" id="addGithubLinkInput" placeholder="add a github url" onKeyPress={(e) => {
            if (e.which === 13) {
              addGithubLink(e)
            }
          }}/>
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
          <SmallCard key={id} text={link.url} removeItem={() => removeItemHandler(id)}/>
        ))}
      </div>

      <div className="mt-6">
        <MainButton
          text="Create Project"
          onClick={e => submitHandler(e)}
          type="submit"
        />
      </div>
    </form>

  )
}

export default NewProjectForm
