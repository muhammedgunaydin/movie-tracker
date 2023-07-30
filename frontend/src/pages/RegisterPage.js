import React, { useState } from 'react'
import '../styles/registerPage.css'
import Headernobut from '../components/headernobut'

const RegisterPage = () => {
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
        <h1>Create New Account</h1>
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
          <button onClick={handleLogin}>Create</button>
        </div>
      </div>
      <div className='signcont'>
        <a className='signupbutton' href='/signin'>Do yo have account? Sign in</a>
      </div>
      <div className='googlecont'>
        <a className='googlebutton' href='/signup'>Continue With Google</a>
      </div>
    </div>
  )
}

export default RegisterPage
