import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import './styles.css'


function App() {

  return (
    <>
          <Header />

            <div >
          <Routes>

            <Route path='/' element={<Home/>}/>
          </Routes>
            </div>
    </>
  )
}

export default App
