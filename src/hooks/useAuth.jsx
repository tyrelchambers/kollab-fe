import React from 'react'

function useAuth() {
  const state = React.useContext(AuthContext)
  const isPending = state.status === "pending"
  const isError = state.status === "error"
  const isSuccess = state.status === "success"
  const isAuthenticated = state.user && isSuccess

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated
  }
}

export default useAuth
