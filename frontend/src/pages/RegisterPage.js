import React, { useState } from 'react'
import axios from 'axios'
import '../styles/registerPage.css'
import Headernobut from '../components/headernobut'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:9000/auth/signup',{email , password}).then(response => {
      console.log('New User:', response.data);
      setErrorMessage('');
      window.location.href = '/signin';
    })
    .catch(error => {
      console.error('Error while creating account:', error);
      setErrorMessage(error.message);
    });
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
          {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>E-mail is already taken</p>}
          <button onClick={handleRegister}>Create</button>
        </div>
      </div>
      <div className='signcont'>
        <a className='signupbutton' href='/signin'>Do yo have account? Sign in</a>
      </div>
    </div>
  )
}

export default RegisterPage
