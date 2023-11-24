import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import './styles.css'
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider }from './contexts/AuthContext'



function App() {

  return (
    <AuthProvider>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
