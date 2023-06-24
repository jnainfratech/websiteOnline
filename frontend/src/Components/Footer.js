import React from 'react'
import { Box, Container } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.css'
function Footer() {
  return (
    <div>
    <Box sx={{ borderTop: 1 , borderColor: 'grey.500'}}></Box>
    <Container >
      <div className='footercont'>
      
      <div className='footContact'>
        <div>
          <EmailIcon></EmailIcon> <p>exmaple.@gmail.com</p>
        </div>
        <div>
          <PhoneIcon></PhoneIcon> <p>001-321421521</p>
        </div>
        
        
      </div>
      <div>
        <p>© 2020 All Rights Reserved</p>
      </div>
      <div>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
      </div>
     </div>   
    </Container>
  </div>
  )
}

export default Footer