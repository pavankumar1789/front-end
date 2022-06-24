import React,{useState} from "react";
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Checkbox } from '@material-ui/core';
import Cookies from "js-cookie";

const Logout = () =>{
  const [redirect,setRedirect] =useState(false);
  

    const logout = async()=>{
        await fetch('http://localhost:62078/api/Auth/logout',{
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
      return(
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
     <li className="nav-item">
     <Button type='submit' color='primary' variant="contained" fullWidth onClick = {logout}>Logout</Button>
     </li>
   </ul>
)

}
export default Logout