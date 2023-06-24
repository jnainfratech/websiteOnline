import React from 'react'
import './LoginPage.css'
import LoginImg from '../Images/LoginPage.png'
function LoginPage() {
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
                  <input className='logininput'></input>
              </div>
              <div>
                  <button className='loginbtn' >LOGIN</button>
              </div>
              <div>
                <p className='loginfp'>Forgot Password?</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LoginPage