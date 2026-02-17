import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import Authentication from './components/authentication/Authentication'
import Home from './components/home/Home'
import Confess from './components/Confess/Confess'
import History from './components/history/History'
import { AuthContext } from './context/AuthContext'

const App = () => {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route
          path="/login"
          element={!user ? <Authentication /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/confess/:category"
          element={user ? <Confess /> : <Navigate to="/login" />}
        />

        <Route
          path="/your-sins"
          element={user ? <History /> : <Navigate to="/login" />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App
