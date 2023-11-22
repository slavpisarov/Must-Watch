import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import './styles.css'
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthContext from "./contexts/authContext";


function App() {

  const navigate = useNavigate()

  const loginSubmitHandler = async (values) => {
    console.log(values);
    navigate('/')

    // await fetch
  }

  const registerSubmitHandler = async (values) => {
    console.log(values);
    navigate('/')

    // await fetch
  }
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    // logoutHandler,
    // email: auth.email,
    // isAuthenticated: !!auth.accessToken,
  }

  return (
    <AuthContext.Provider value={values}>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
