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
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthState() {
  const state = React.useContext(AuthContext)
  const isPending = state.status === 'pending'
  const isError = state.status === 'error'
  const isSuccess = state.status === 'success'
  const isAuthenticated = state.user && isSuccess
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  }
}

export default AuthProvider
