import React from 'react'
import './LoginPage.css'
import LoginImg from '../Images/LoginPage.png'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function LoginPage() {
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const status =  useSelector((state)=>state.user.status);
  const navigate =  useNavigate()
  const handleRegister = ()=>{
    navigate("/register")
  }

  return (
    <div className='loginContainer'>
      <div className='loginimgcontainer'>
        <img src={LoginImg} className='loginimg' />
      </div>
      <div className='loginform'>
          <div className='containerlogin'>
              <div>
                <p className='logintypo1'>HEY,LOOK WHO'S HERE!</p>
                <p className='logintypo2'>LOGIN</p>
              </div>
              <div>
                  <p className='loginusername'>Username</p>
                  <input className='logininput'></input>
              </div>
              <div>
                  <p className='loginusername'>Password</p>
                  <input className='logininput' type='password'></input>
              </div>
              <div>
                  <button className='loginbtn' >LOGIN</button>
              </div>
              <div>
                <p className='loginfp'>FORGOT PASSWORD?</p>
                <p className='loginfp' onClick={handleRegister} >WANT TO REGISTER WITH US?</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LoginPage