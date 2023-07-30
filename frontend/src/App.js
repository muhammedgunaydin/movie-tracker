import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'

const App = () => {
  return (
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<LoginPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
