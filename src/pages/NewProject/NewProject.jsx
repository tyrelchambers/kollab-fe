import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import { H1 } from '../../components/Headings/Headings'
import NewProjectForm from '../../components/Forms/NewProjectForm'

const NewProject = () => {
  return (
    <DisplayWrapper>
      <H1 className="text-center">Create a New Project</H1>

      <div className="flex justify-center">
        <NewProjectForm/>
      </div>
    </DisplayWrapper>
  )
}

export default NewProject
