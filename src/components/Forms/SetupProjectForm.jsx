import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { H2, H2Subtitle } from '../Headings/Headings';
import ImageUploader from '../ImageUploader/ImageUploader';
import { SecondaryButton, MainButton } from '../Buttons/Buttons';

const sampleCollab = [
  {
    email: "tychambers3@gmail.com"
  }
]

const sampleGithubLinks = [
  {
    url: "https://github.com/tyrelchambers/reddex-frontend"
  }
]

function SetupProjectForm() {
  const history = useHistory();
  const ref = useRef(null);
  const supportingRef = useRef(null);

  const submitHandler = e => {
    e.preventDefault();
    history.push('/setup/complete')
  }

  return (
    <form className="form shadow-lg">
      <H2>Projects</H2>
      <H2Subtitle>Create your first project or wait until later.</H2Subtitle>

      <div className="field-group">
        <label htmlFor="title" className="form-label">Title - <span className="italic text-sm text-gray-500">Required</span></label>
        <input type="text" className="form-input" name="title" placeholder="Super Cool Project"/>
      </div>

      <div className="field-group">
        <label htmlFor="headline" className="form-label">Headline - <span className="italic text-sm text-gray-500">Required</span></label>
        <input type="text" className="form-input" name="headline" placeholder="The Elon Musk of projects"/>
      </div>

      <div className="field-group">
        <label htmlFor="description" className="form-label">Short Description - <span className="italic text-sm text-gray-500">Required</span></label>
        <textarea type="text" className="form-textarea" name="description" placeholder="A basic introduction of your project..."/>
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
        <input type="text" name="topics" className="form-input" placeholder="comma separated topics (eg: productivity, health, awesome)"/>
      </div>

      <div className="field-group">
        <label htmlFor="collaborators" className="form-label">Collaborators</label>

        <div className="flex">
          <input type="text" name="collaborators" className="form-input flex-auto" placeholder="user's email"/>
          <div className="w-20 ml-4">
            <SecondaryButton
              text="Add"
            />
          </div>
        </div>
      </div>
      <div className="collaborator-list mt-2">
        {sampleCollab.map(person => (
          <span className="flex justify-between items-center">
          <p className="italic">{person.email}</p>
          <i className="fas fa-times text-red-500"></i>
          </span>
        ))}
      </div>

      <div className="field-group">
        <label htmlFor="githubLinks" className="form-label">Github Links</label>

        <div className="flex">
          <input type="text" name="collaborators" className="form-input flex-auto" placeholder="user's email"/>
          <div className="w-20 ml-4">
            <SecondaryButton
              text="Add"
            />
          </div>
        </div>
      </div>

      <div className="collaborator-list mt-2">
        {sampleGithubLinks.map(link => (
          <span className="flex justify-between items-center">
          <p className="italic">{link.url}</p>
          <i className="fas fa-times text-red-500"></i>
          </span>
        ))}
      </div>

      <div className="mt-6 mb-6">
        <MainButton
          text="Save & Continue"
          onClick={e => submitHandler(e)}
        />
      </div>

      <a href="#" className="text-center text-gray-500 font-thin underline">Skip</a>
    </form>

  )
}

export default SetupProjectForm
