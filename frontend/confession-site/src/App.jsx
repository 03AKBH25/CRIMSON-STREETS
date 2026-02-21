import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import Authentication from './components/authentication/Authentication'
import Home from './components/home/Home'
import Confess from './components/Confess/Confess'
import History from './components/history/History'
import ProtectedRoute from './components/protectedroutes/ProtectedRoute'
import Layout from './components/layout/Layout'
import { AuthContext } from './context/AuthContext'

const App = () => {

  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route
          path="/login"
          element={!user ? <Authentication /> : <Navigate to="/" />}
        />

        {/* Protected Layout */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="/confess/:category" element={<Confess />} />
          <Route path="/your-sins" element={<History />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import React from 'react'
// import Authentication from './components/authentication/Authentication'
// import Home from './components/home/Home'
// import Confess from './components/Confess/Confess'
// import History from './components/history/History'
// import Layout from './components/layout/Layout'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//       <Route path="/login" element = {<Authentication/>} />

//       <Route path="/" element = {<Layout/>}>

//         <Route index element={<Home/>} />
//         <Route path="confess/:category" element={<Confess/>}/>
//         <Route path="your-sins" element={<History />} />

//       </Route>

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
