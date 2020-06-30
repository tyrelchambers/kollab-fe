import React from 'react'
import { H1 } from '../../../components/Headings/Headings'
import SetupProjectForm from '../../../components/Forms/SetupProjectForm'
import SetupProgress from '../../../components/SetupProgress/SetupProgress'
import './Projects.css'

function Projects() {
  return (
    <div className="container mx-auto">
      <H1 className="text-center">Import or create a project!</H1>
      <SetupProgress progress={2}/>

      <div className="flex justify-center">
        <SetupProjectForm />
      </div>
    </div>
  )
}

export default Projects
