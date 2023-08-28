import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios'
import '../styles/loginPage.css'
import Headernobut from '../components/headernobut'
import { getUser } from '../context/userSlice'
import { useNavigate } from "react-router-dom";
import decoder from 'jwt-decode'


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch((state) => state.User);
  const {isLoggedIn} = useSelector(state =>state.User)
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
    const res = await axios.post('http://localhost:9000/auth/login',{email, password})
      if(res.data){
      console.log('Logged user:', res.data);
      setErrorMessage('');
      const setCookie = (name, value, days) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        const cookieValue = encodeURIComponent(value) + (days ? '; expires=' + expirationDate.toUTCString() : '');
        document.cookie = name + '=' + cookieValue + '; path=/';
      };
      setCookie('myCookie', res.data, 7);
      const data = decoder(res.data)
      console.log(data)
      dispatch(getUser({
        isLoggedIn: true,
        email:email,
        userId:data.userId
      }))
      }
      navigate("/user-dashboard")
    }
    catch(error) {
      console.error('Error while log in:', error);
      setErrorMessage(error.message);
    };
  }
  return (
    <div>
      <Headernobut></Headernobut>
      <div className="login-page">
        <h1>Sign In</h1>
        <h2>{`${isLoggedIn}`}</h2>
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
          {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>Invalid e-mail or password</p>}
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
