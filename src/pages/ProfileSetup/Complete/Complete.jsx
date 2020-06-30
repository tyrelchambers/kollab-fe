import React from 'react'
import { H1 } from '../../../components/Headings/Headings'
import { MainButton } from '../../../components/Buttons/Buttons'
import SetupProgress from '../../../components/SetupProgress/SetupProgress'

function Complete() {
  return (
    <div className="container mx-auto">
      <H1 className="text-center">Congrats! Your profile is now all setup!</H1>
      <SetupProgress progress={3} />

      <div className="flex flex-col max-w-2xl bg justify-center shadow-lg mx-auto">
        <MainButton
          text="Take me to my dashboard!"
        />
        <hr/>
        <MainButton 
          text="Go back home!"
        />
      </div>
    </div>
  )
}

export default Complete
