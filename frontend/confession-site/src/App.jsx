import {BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Authentication from './components/authentication/Authentication'
import Home from './components/home/Home'
import Confess from './components/Confess/Confess'
import History from './components/history/History'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path='/' element={<Home/>} />
        <Route path='/confess/:category' element={<Confess/>} />
        <Route path='/your-sins' element={<History/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
