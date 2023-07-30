import React from 'react'
import '../styles/header.css'

const Headernobut = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={require('../img/logo.png')} alt="Logo" className="logo" />
        <a href='/' className="lefthead">MovieTracker</a>
      </div>
    </div>
  )
}

export default Headernobut
