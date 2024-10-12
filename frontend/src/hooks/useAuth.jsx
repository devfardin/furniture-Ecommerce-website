import React, { useContext } from 'react'
import { authProvider } from '../providers/AuthProviders'



const useAuth = () => {
  const auth = useContext( authProvider )
  return auth  
}

export default useAuth
