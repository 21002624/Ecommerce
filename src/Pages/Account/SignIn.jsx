import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const SignIn = () => {
  return (
      <div className='SignInBox' >
        <div className='SignInField'>
          <TextField
            required
            className='SignInBtn'
            id="name"
            label="firstName"
          />
          <TextField
            required 
            className='SignInBtn'
            id="lastName"
            label="Lastname"
          />
        </div>
        <div className='SignInField'>
          <TextField
            required
            className='SignInBtn'
            id="primaryPhoneNumber"
            label="Primary Phone"
          />
          <TextField
            required
            className='SignInBtn'
            id="SecondaryPhoneNumber"
            label="Secondary Phone"
          />
        </div>
        <div className='SignInField'>
          <TextField
            required
            className='SignInBtn'
            id="street"
            label="Street"
          />
          <TextField
            required
            className='SignInBtn'
            id="district"
            label="District"
          />
        </div>
        <div className='SignInField'>
          <TextField
            required
            className='SignInBtn'
            id="pinCode"
            label="pinCode"
          />
          <TextField
            required
            className='SignInBtn'
            id="Country"
            label="Country"
          />
        </div>
        <div className='Signbtn'>
          <Link to='/signin'><Button variant="contained">Sign in</Button></Link>
        </div>
        
      </div>

  )
}

export default SignIn
