import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CreateMoviePage from './pages/CreateMoviePage'
import AllMoviePage from './pages/AllMoviePage'
import UserDashboard from './pages/UserDashboard'
import './App.css'

const App = () => {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="/create-movie" element={<CreateMoviePage/>}/>
          <Route path="/all-movies" element={<AllMoviePage/>}/>
          <Route path="/user-dashboard" element={<UserDashboard/>}/>
        </Routes>
      </div>
  )
}

export default App
