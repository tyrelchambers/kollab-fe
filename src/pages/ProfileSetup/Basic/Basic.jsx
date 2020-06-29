import React from 'react'
import { H1 } from '../../../components/Headings/Headings'
import SetupProgress from '../../../components/SetupProgress/SetupProgress'
import SetupBasicForm from '../../../components/Forms/SetupBasicForm'

function Basic() {
  return (
    <div className="container mx-auto">
      <section className="mt-16">
        <H1 className="text-center">Hey! Welcome to Kollab! Let’s go ahead and setup your profile...</H1>
        <SetupProgress progress={0} />
      </section>
      <div className="flex justify-center">
        
        <SetupBasicForm />
      </div>  
    </div>
  )
}

export default Basic
