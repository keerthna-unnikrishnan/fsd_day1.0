import { AppBar, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar
         sx={{
            background: 'rgb(2,0,36)',
            background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,116,1) 0%, rgba(214,255,147,1) 63%, rgba(0,212,255,1) 93%)'
        }}
        >
                
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        
          
          <Typography variant="h6">MY_app</Typography>
          <Link to='/sro'>
          <Button color="inherit" sx={{marginLeft:2}}>signup</Button>
          </Link>
          <Link to='/pro'>
          <Button color="inherit" sx={{marginLeft:2}}>Product</Button>
          </Link>
          <Link to='/gro'>
          <Button color="inherit" sx={{marginLeft:2}}>Gridchik</Button>
          </Link>
          
                    
                    
         </Toolbar>

        </AppBar>
    </div>
  )
}

export default Navbar