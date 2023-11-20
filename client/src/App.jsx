import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import './styles.css'
import Create from "./components/Create/Create";


function App() {

  return (
    <>
          <Header />

            <div >
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
            </div>
    </>
  )
}

export default App
