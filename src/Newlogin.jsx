import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import logo from "./doctorlogo.png"

const Newlogin=()=>{
   const history=useHistory();
//   if(localStorage.getItem("admin")==0)
//   {
//     history.push("/")
//   }

//   const[state1,setState1]=useState({
//     doctor:[]
//   })
//  useEffect(()=>{
//     axios.get("http://localhost:4000/doctor").then(res=>{
//       const doctors=res.data.map(data=>({
//         "regno":data.regno
//       }))
//       setState1({
//         ...state1,
//         doctor:doctors
//       })
//     })
//  })



  // const paperStyle = {
  //   padding: 20,
  //   height: "70vh",
  //   width: 600,
  //   margin: "20px auto",
    
  // };
  
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  // const btnstyle = { margin: "30px 0" };
    const[state,setState]=useState({
        Email:"",
        UserPassword:"",
    })
    const change=(e)=>{
        const{name,value}=e.target;
        setState({
          ...state,
          [name]:value
        })
    }
    const submit=()=>{

      
        if(state.Email && state.UserPassword)
        {
         axios.post("http://localhost:65313/api/Auth/Login",{
           Email:state.Email,
           UserPassword:state.UserPassword
       })
       history.push("/home")
        }
        else
        {
          
           if(!state.Email)
          {
            alert("please enter email")
          }
          else if(!state.UserPassword)
          {
            alert("please enter the password")
          }
        }
      
     console.log(state.Email,state.UserPassword);
    
    }
    const paperStyle={padding :20,height:'75vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <>
    <div class="bg_image">
      <div class="container">
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>SignIn</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Email"
            fullWidth
            name="Email" onChange={change}
            required
          />
          <TextField
            label="Password"
            placeholder="Password"
            fullWidth
            type='password'
            required
            name="UserPassword"
            onChange={change}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={submit}
          >
            Submit
          </Button>
          <img src={logo} alt="" className="doctor" />
        </Paper>
      </Grid>
    </div>
    </div>
    </>
    )
}

export default Newlogin;
