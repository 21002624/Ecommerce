import React from 'react'
import './LogIn.css';
import user from './img/userr.png'
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div className='LogIn'>
        <h1>Login</h1>
        <div className='LogInBox'>
            <div className='LogInLeft'>
                <h1>left</h1>
                <img className='userImg' src={user} />
            </div>
            <div className='LogInRight'>
                <div className='LogInRightDetails'>
                    <h1>feve</h1>
                    <div className='LogInFild'>
                        <TextField helperText="Please enter your name" id="userIdInput" label="User Id" />
                        <TextField helperText="Please Enter your Password" id="userPasswordInput"label="Password"/>
                        <div className='ButtonFiled'>
                            <Button variant="contained">Log In</Button>
                            <Link to='/signin'><Button variant="contained">Sign in</Button></Link>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LogIn
