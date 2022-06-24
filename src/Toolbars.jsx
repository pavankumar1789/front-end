import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cookies from "js-cookie";


const styles = {
  root: {
    flexGrow: 1,

  },
  typography: {
    flexGrow: 1,
        align: "center"
      }

};

function SimpleAppBar(props) {
  
    const [redirect,setRedirect] =useState(false);
    
  
      const logout = async()=>{
          await fetch('http://localhost:65313/api/Auth/logout',{
                  method:'POST',
                  headers:{'Content-Type':'application/json'},
                  credentials:'include',
              });
              setRedirect(true);
              Cookies.remove('jwt');
              
        }
        if(redirect)
        {
          
          
          return <Redirect to ="/"/>
        }
  const { classes } = props;
  const toolStyle = { justifyContent: 'left' }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.typography}>
           <center><strong>User Dashboard</strong></center>
           <div class="logout"><button class="btn btn-primary"  onClick={logout}>Logout</button></div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
        classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);