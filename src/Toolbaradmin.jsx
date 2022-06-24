import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

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
  const logout=()=>{
    localStorage.setItem("admin",0)
    window.location.href="/adminlogin"
  }
  const { classes } = props;
  const toolStyle = { justifyContent: 'left' }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.typography}>
           <center><strong>Admin Dashboard</strong></center>
           <Link to="/dashboard"><button class="btn btn-primary">Back</button></Link>
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