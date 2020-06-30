import React from 'react'
import { H1 } from '../../../components/Headings/Headings'
import { MainButton } from '../../../components/Buttons/Buttons'
import SetupProgress from '../../../components/SetupProgress/SetupProgress'
import { useHistory } from 'react-router'

function Complete() {
  const history = useHistory();

  const routeHandler = (e, route) => {
    e.preventDefault()
    history.push(route)
  }


  return (
    <div className="container mx-auto">
      <H1 className="text-center">Congrats! Your profile is now all setup!</H1>
      <SetupProgress progress={3} />

      <div className="flex flex-col max-w-2xl bg justify-center shadow-lg mx-auto">
        <MainButton
          text="Take me to my dashboard!"
          onClick={e => routeHandler(e, "/me")}

        />
        <hr/>
        <MainButton 
          text="Go back home!"
          onClick={e => routeHandler(e, "/")}
        />
      </div>
    </div>
  )
}

export default Complete
