import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'
import './styles.css'

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Movies from "./components/Catalog/Movies/Movies";
import TvSeries from "./components/Catalog/TvSeries/TvSeries";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import PageNotFound from "./components/404/404";
import ErrorBoundary from './components/ErrorBoundary'


function App() {

  return (
    <ErrorBoundary>
    <AuthProvider>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/media/:mediaId' element={<Details />} />

        <Route element={<GuestGuard />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route path='/create' element={<Create />} />
          <Route path='/catalog/tv-series' element={<TvSeries />} />
          <Route path='/catalog/movies' element={<Movies />} />
          <Route path='/media/:mediaId/edit' element={<Edit />} />
          <Route path='/logout' element={<Logout />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
