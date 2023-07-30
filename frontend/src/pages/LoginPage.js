import React, { useState } from 'react'
import '../styles/loginPage.css'
import Headernobut from '../components/headernobut'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div>
      <Headernobut></Headernobut>
      <div className="login-page">
        <h1>Sign In</h1>
        <div className="form">
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
      <div className='signcont'>
        <a className='signupbutton' href='/signup'>Create New Account</a>
      </div>
      <div className='googlecont'>
        <a className='googlebutton' href='/signup'>Continue With Google</a>
      </div>
    </div>
  )
}

export default LoginPage
