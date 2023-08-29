import React, { useState, useEffect } from 'react'
import '../styles/UserDashboard.css'
import axios from 'axios'
import Header from '../components/header'
import {useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [user, setUser] = useState([])
  const {userId} = useSelector(state =>state.User)
  const navigate = useNavigate();
  const navigateMainPage = async(e)=>{
    e.preventDefault()
    navigate("/")
  }
  useEffect(() => {
    axios
      .get(`http://localhost:9000/auth/getUser/${userId}`, {})
      .then((response) => {
        setUser(response.data.user)
      })
      .catch((error) => console.error('Veri çekme hatası:', error))
      // eslint-disable-next-line
  }, [])
  return (
    <div>
      <Header></Header>
      <div className="user-dashboard">
        <h1 className="dashboard-heading">Welcome</h1>
        <div className="user-info">
          <div className="user-details">
            <p className="user-email">{user.email}</p>
          </div>
        </div>
        <ul className="menu-list">
          <button onClick={navigateMainPage}> Watchlist </button>
          <button onClick={navigateMainPage}> Favorites </button>
        </ul>
      </div>
    </div>
  )
}

export default UserDashboard
