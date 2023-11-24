import { createContext } from "react";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}) =>{
 
    const navigate = useNavigate() 
    // const [auth, setAuth] = usePersistedState('auth',{})
  
    const loginSubmitHandler = async (values) => {
    //   const result = await authService.login(values.email, values.password)
  
    //   setAuth(result);
    //   localStorage.setItem('accessToken',result.accessToken)
    //   navigate('/');
    }
  
    
    const registerSubmitHandler = async (values) => {

        console.log(values);
    //   const result = await authService.register(values.email,values.password)
    //   setAuth(result);
    //   localStorage.setItem('accessToken',result.accessToken)
      
      navigate('/')
    }
    // const logoutHandler = () =>{
    //   setAuth({});
    //   localStorage.removeItem('accessToken')
  
    // }
    
    const values = {
    //   logoutHandler,
      registerSubmitHandler,
      loginSubmitHandler,
    //   email: auth.email,
    //   username:auth.username,
    //   isAuthenticated: !!auth.accessToken,
    }
  

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;