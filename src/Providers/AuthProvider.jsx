import React, { useState, useEffect } from 'react'
import getApi from '../api/getApi';
import { inject, observer } from 'mobx-react';

const AuthContext = React.createContext();

const getUserOnLoad = async () => {
  return await getApi({
    url:'/user/me'
  }).then(res => {
   if (res) {
     return res
   }
  })
}

function AuthProvider({children, UserStore}) {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null
  })
  const token = window.localStorage.getItem("token") || window.sessionStorage.getItem('token')

  useEffect(() => {
    if (UserStore.user) {
      setState({
        ...state, 
        user: UserStore.user,
        status: "success"
      })

    }
  }, [UserStore.user])

  useEffect(() => {
    const fn = async () => {
      if (token) {
        const user = await getUserOnLoad()
        
        UserStore.setUser(user)
      }

      setState({
        status: 'success'
      })
    }

    fn()
  }, [])

  if(state.status === "pending") return null;

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

export default inject("UserStore")(observer(AuthProvider))
