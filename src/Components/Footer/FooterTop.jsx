import React from 'react'
import './FooterTop.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const FooterTop = () => {
  return (
    <div className='FooterTop'>
      <div className='FooterTop1'>
        <div className='FooterSignInDiv'>
          <p>See personalized recommendations</p>
          <Link to="/login"><Button className='FooterTopButton' variant="contained">Login</Button> </Link> 
          
        </div>
        
        <div className='NewCus'>
            <p>New Customer ?</p>
            <Button className='FooterTopButton' variant="contained" color="success">Sign in</Button>
        </div>
      </div>

    </div>
  )
}

export default FooterTop
