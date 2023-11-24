import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePersistedState";

import * as authService from '../services/authService'

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}) =>{
 
    const navigate = useNavigate() 
    const [auth, setAuth] = usePersistedState('auth',{})
  
    const loginSubmitHandler = async ({email,password}) => {
      const result = await authService.login(email,password)
      setAuth(result);
      localStorage.setItem('accessToken',result.accessToken)
      navigate('/');
    }
  
    
    const registerSubmitHandler = async ({username,email,password}) => {

      const result = await authService.register(username,email,password)
      localStorage.setItem('accessToken',result.accessToken)
      
      navigate('/')
    }
    const logoutHandler = () =>{
      setAuth({});
      localStorage.removeItem('accessToken')
  
    }
    
    const values = {
      logoutHandler,
      registerSubmitHandler,
      loginSubmitHandler,
      email: auth.email,
      username:auth.username,
      isAuthenticated: !!auth.accessToken,
    }
  

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;