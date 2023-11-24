import { Routes, Route } from "react-router-dom";
import { AuthProvider }from './contexts/AuthContext'
import './styles.css'

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";




function App() {

  return (
    <AuthProvider>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
