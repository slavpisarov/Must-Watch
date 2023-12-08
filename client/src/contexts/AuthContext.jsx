import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePersistedState";

import * as authService from '../services/authService'

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}) =>{
 
    const navigate = useNavigate() 
    const [auth, setAuth] = usePersistedState('auth',{})
    const [registerErr,setRegisterErr] = useState(false)
    const [loginErr,setLoginErr] = useState(false)
  
    const loginSubmitHandler = async ({email,password}) => {
      setLoginErr(false)
      try {
        const result = await authService.login(email,password)
        setAuth(result);
        localStorage.setItem('accessToken',result.accessToken)
        navigate('/');
      } catch (error) {
        setLoginErr(true)
      }

    }
  
    const registerSubmitHandler = async ({username,email,password}) => {
      setRegisterErr(false)
      try {
        const result = await authService.register(username,email,password)
        setAuth(result);
        localStorage.setItem('accessToken',result.accessToken)
        
        navigate('/')
        
      } catch (error) {
        setRegisterErr(true)
      }
    }
    const logoutHandler = () =>{
      setAuth({});
      localStorage.removeItem('accessToken')
    }
    
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      loginErr:loginErr,
      registerErr: registerErr,
      email: auth.email,
      username:auth.username,
      userId:auth._id,
      isAuthenticated: !!auth.accessToken,
    }
  

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;