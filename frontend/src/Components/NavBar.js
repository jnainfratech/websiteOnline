import React from 'react'
import Container from '@mui/material/Container';
import './NavBar.css'
import { Button } from '@mui/material';
import Logo from '../Images/Logo.png'
function NavBar() {
  return (
    <div>
        <div className='navbar'>
            <Container>
                <div className='navCont'>
                    <div className='navLogo'>
                        <img src={Logo} alt="Error in logo"></img>
                    </div>
                    <div className='navItem'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Use US</p>
                        <p>Our Plans</p>
                        <p className='navbtn'>Login</p>
                        
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default NavBar