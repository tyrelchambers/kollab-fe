import React, { useState, useEffect } from 'react'
import getApi from '../api/getApi';

const AuthContext = React.createContext();
const getUser = () => {
  // execute GET
}

const logout = () => {

}

function AuthProvider({children}) {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null
  })

  useEffect(() => {
    setState({status: "success"})
  }, [])

  return (
    <AuthContext.Provider value={state}>
      {state.status === "pending" &&
        <p>Loading...</p>
      }

      {state.status === "error" &&
        <p>{state.error.message}</p>
      }

      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
