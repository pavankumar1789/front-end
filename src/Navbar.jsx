import React,{useState} from 'react';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

const Navbar= () => {

    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar color="Secondary" position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1}}>
                    cPharma
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                {/* <Button color="inherit" component={Link} to="/contact">Contact</Button> */}
                {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to ="/login"><MenuItem onClick={handleClose}>Login</MenuItem></Link>
                <Link to ="/login"><MenuItem onClick={handleClose}>Admin Login</MenuItem></Link>
                
              </Menu>
            </div>
          )}
            </Toolbar>
        </AppBar>
        </Box>
    );

};

export default Navbar;