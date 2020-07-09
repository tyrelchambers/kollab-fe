import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import { H1 } from '../../components/Headings/Headings'
import EditProjectForm from '../../components/Forms/EditProjectForm'

const EditProject = () => {
  return (
    <DisplayWrapper>
      <H1 className="text-center">Edit Project</H1>

      <section className="flex justify-center">
        <EditProjectForm/>
      </section>
    </DisplayWrapper>
  )
}

export default EditProject
