import React from 'react'
import './Structure.css'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/material'
function Structure() {
  return (
    <div>
        <NavBar />
        <div className='structurehero'>
            <Container>
                <span className='tranhead'>Structure</span>
            </Container>
        </div>
        <div>
            <Container >
                <p>Home > Structure</p>
            </Container>
        </div>
    </div>
  )
}

export default Structure