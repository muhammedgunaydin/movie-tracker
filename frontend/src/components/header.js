import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { outUser } from '../context/userSlice'
import { persistor } from '../context/store'
import '../styles/header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.User)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(outUser())
    persistor.purge()
    navigate("/")
  }

  return (
    <div className="header">
      <div className="logo-container">
        <img src={require('../img/logo.png')} alt="Logo" className="logo" />
        <a href='/' className="lefthead">MovieTracker</a>
      </div>
      <div>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link className="login-button" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
