import React from 'react'
import { H1 } from '../../../components/Headings/Headings'
import SetupProgress from '../../../components/SetupProgress/SetupProgress'
import SetupSocialForm from '../../../components/Forms/SetupSocialForm'

function Social() {
  return (
    <div className="container mx-auto">
      <section className="mt-16">
        <H1 className="text-center">Hey! Welcome to Kollab! Let’s go ahead and setup your profile...</H1>
        <SetupProgress progress={1} />
      </section>
      <div className="flex justify-center">
        <SetupSocialForm/>
      </div>  
    </div>
  )
}

export default Social
