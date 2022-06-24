import React,{useState,useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import {useHistory} from "react-router-dom";
import Dashboard from "./Dashboard";
import Toolbar from './Toolbar';
import Foot from './Foot';
import Tool from './Tools'
import logo from "./admin.jpg"

const AdminLogin=()=>{
    const history=useHistory()
    const[state,setState]=useState({
        email:"rashmi@gmail.com",
        password:"1234",
        email1:"rashmi@gmail.com",
        password1:"1234",
    })
    
    const change=(e)=>{
            const{name,value}=e.target;
            setState({
                ...state,
                [name]:value
            })
           
    }
    console.log(state.email);
    const submit=()=>{
        
      if(state.email && state.password)
      {
          
        if(state.email===state.email1 && state.password==state.password1)
        {
            localStorage.setItem("admin",1)
            history.push("/dashboard");
        }
        else{
            alert("invalid email or password")
        }
      }
      else
      {
          if(state.email)
          {
              alert("please enter the password")
          }
          else
          {
              alert("please enter the email")
          }
      }
            

    }

    const paperStyle={padding :20,height:'65vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <div class="bg_image">
      <div class="float-container">
        <Tool/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Admin Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter Email' fullWidth required name="email" onChange={change}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required  name="password" onChange={change}/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                  <Typography> <Link href={`/changeadmin`}>Change Password</Link></Typography>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={submit} fullWidth>Sign in</Button>
                <img src={logo} alt="" className="admin" />
                
                
            </Paper>
            <Foot/>
            </Grid> 
            </div>
            </div>      
    )
}
export default AdminLogin;