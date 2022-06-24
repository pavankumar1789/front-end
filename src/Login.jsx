import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Checkbox } from '@material-ui/core';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import logo from "./doctorlogo.png";
import Tool from "./Tools"
import Foot from './Foot'

 const Login=(props)=> {
     
    const [email, setEmail] = useState();
    const [UserPassword, setPassword] = useState();
    const [redirect,setRedirect] =useState(false);
    // const [loading, setLoading] = useState(false);
    // const [message, setMessage] = useState("");

    const submit = async (e) =>{
        e.preventDefault();
        // setMessage("");
        // setLoading(true);

        await fetch('http://localhost:65313/api/Auth/Login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                email,
                UserPassword
            })
        });
        
        setRedirect(true);
        
    }
    
    if(redirect)
    {
        return <Redirect to ="/home"/>
    }
    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return (
    <div class="bg_image">
      <div class="float-container">
          <Tool/>
     <Grid>
     <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
             <h2>Sign In</h2>
         </Grid>
         <TextField label='Email' placeholder='Enter Email' fullWidth required name="email"
                onChange={e=>setEmail(e.target.value)}/>
         <TextField label='Password' placeholder='Enter password' type='password' fullWidth required name="UserPassword"
                onChange={e=>setPassword(e.target.value)}
                 />
         <FormControlLabel
             control={
             <Checkbox
                 name="checkedB"
                 color="primary"
             />
             } 
              label="Remember me"
          />
         <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick = {submit}>Sign in</Button>
         <Link to ="/newregister"><Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button></Link>
         
         <img src={logo} alt="" className="doctor" />
     </Paper>
     
     </Grid>
     <Foot/>
     </div>
     </div>
        
    )

}
export default Login