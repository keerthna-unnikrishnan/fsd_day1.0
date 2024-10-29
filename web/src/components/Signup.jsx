import {  TextField } from '@mui/material'
import React from 'react'
import './signup.css'
const Signup = () => {
  return (
    <div className='signup'>
        <h1 className="signup-header">Sign up</h1>
        
        <TextField id='name'    label="name" variant="filled" /> <br /> <br />
        <TextField className="signup-input" label="age" variant="filled" /><br /> <br />
        <TextField className="signup-input" label="phone number" variant="filled" /><br /> <br />
        <TextField className="signup-input" label="password" variant="filled" /><br /><br />
        <button type="submit" className="signup-button">Sign Up</button>
        
    </div>
   
  )
}

export default Signup