import React,{useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Foot from "./Foot";
import './App.css';
import Tool from "./Tools"
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Tooltip,
} from "@material-ui/core";
import Suplier from './suplier.jpg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import logo from "./doctor.png"
import Toolbaradmin from "./Toolbaradmin";

const Addsupplier=()=>{
   const history=useHistory();
    const[state,setState]=useState({
        SupplierName:"",
        SupplierContact:"",
        SupplierEmail:"" 
    })
    const change=(e)=>{
        const{name,value}=e.target;
        setState({
          ...state,
          [name]:value
        })
    }
    const submit=()=>{

      
        if(state.SupplierName && state.SupplierEmail && state.SupplierContact)
        {
         axios.post("http://localhost:65313/api/Supplier",{
           SupplierName:state.SupplierName,
           SupplierContact:state.SupplierContact,
           SupplierEmail:state.SupplierEmail
           
           
       })
       history.push("/details")
        }
        else
        {
          if(!state.SupplierName)
          {
            alert("please enter name")
          }
          else if(!state.SupplierEmail)
          {
            alert("please enter email")
          }
          else if(!state.SupplierContact)
          {
            alert("please enter contact number")
          }
          
        }
      
     console.log(state.SupplierName,state.SupplierEmail,state.SupplierContact);
    
    }
    const paperStyle={padding :20,height:'75vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        
    <div class="bg_image">
      <div class="float-container">
        <Toolbaradmin/>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleIcon/>
            </Avatar>
            <h2>Add Supplier</h2>
          </Grid>

          <TextField
              label="Name"
              placeholder="Name"
              fullWidth
              name="SupplierName" onChange={change}
              required
            />

          <TextField
            label="Email"
            placeholder="Email"
            fullWidth
            name="SupplierEmail" onChange={change}
            required
          />
          <TextField
            label="Contact"
            placeholder="Contact"
            fullWidth
            required
            name="SupplierContact" onChange={change}
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
          <img src={Suplier} alt="Suplier-Image" className="doctorsss" />
        </Paper>
      </Grid>
    <Foot/>
    </div>
    </div>

    );
}

export default Addsupplier;