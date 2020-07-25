import React from 'react'
import './GithubAuth.css'
import { inject, observer } from 'mobx-react'

const githubId = process.env.REACT_APP_GITHUB_ID

const GithubAuth = ({UserStore}) => {  
  return (
    <div className="github-authenticate p-3">
      {!UserStore.user.githubAccessToken ?
        <>
          <i className="fab fa-github"></i>
          <a href={`https://github.com/login/oauth/authorize?client_id=${githubId}&redirect_uri=http://localhost:3000/callback/github&state=c7tCRcuvb&scope=read:user,public_repo`}>Authenticate with GitHub</a>
        </> : 
        <>
          <i className="fas fa-check-circle text-green-500 mr-4"></i>
          <p>Authenticated with Github!</p>
        </>
      }
    </div>
  )
}

export default inject("UserStore")(observer(GithubAuth))
