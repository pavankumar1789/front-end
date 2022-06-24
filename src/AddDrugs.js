import React,{useState,useEffect} from "react";
import axios from "axios";
import Foot from './Foot'
import Select from "react-select";
import Drugs from './drug.jpg';
import './App.css';
import moment from "moment";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  InputLabel,
  Typography,
  Link,
} from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Toolbaradmin from "./Toolbaradmin";





const AddDrugs=()=>{

    if(localStorage.getItem("admin")==0)
    {
      window.location.href="/"
    }
    const paperStyle={padding :20,height:'90vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const lableText = { marginTop:'20px',}

    const[state1,setState1]=useState({
      ids:[]
      
    })
  
    // useEffect(()=>{
    //   axios.get("http://localhost:4000/doctor").then(res=>{
    //     const arr=res.data.map(data=>({
    //       "label" : data.regno,
    //       "name":"regno"
    //     }))
    //     setState1({
    //       ids:arr
    //     })
    //     console.log(state1.ids)
    //   })
    // })

    useEffect(()=>{
      getOption()
    },[])
    async function getOption(){
      const res=await axios.get("http://localhost:65313/api/Supplier");
     const arr=res.data.map(data=>({
       "label":`${data.supplierName}(${data.supplierId})`,
       "supplierId":data.supplierId,
       "supplierName":"supplierId"
      
     }))
     setState1({
       ...state1,
       ids:arr
     })
     
    }
    
    const[state,setState]=useState({
        drugName:"",
        quantity:"",
        expiryDate:"",
        price:"",
        supplierId:"",
    })
    const change=(e)=>{
     
      const{name,value}=e.target
        setState({
            ...state,
            [name]:value,
        })
       

    }
    const date=(e)=>{
        const name=e.target.name;
        const value=moment(e.target.value).format()
       setState({
         ...state,
         [name]:value
       })
    }
    const supplier=(e)=>{
      const{supplierName,supplierId}=e;
      setState({
        ...state,
        [supplierName]:supplierId
      })
    
    }
    const submit=(e)=>{
      console.log(state)
      if( state.drugName && state.quantity && state.expiryDate &&state. price && state.supplierId)
      {
        axios.post("http://localhost:65313/api/Drug",{
          drugName:state.drugName,
          quantity:state.quantity,
          expiryDate:state.expiryDate,
          price:state.price,
          supplierId:state.supplierId,
      })
      alert("successfully data inserted")
      window.location.reload()
      }
      else
      {
        
          if(!state.drugName)
         {
           alert("please enter the Name")
         }
         else if(!state.quantity)
         {
           alert("please enter Quantity")
         }
         else if(!state.expiryDate)
         {
           alert("please enter Date")
         }
         else if(!state.price)
         {
           alert("please enter the Price")
         }
         else if(!state.supplierId)
         {
           alert("please select The supplier")
         }
         
         
      }
        
       
    }
    

    return(
      <>
      
      <div class="bg_image">
      <Toolbaradmin/>
        <div class="container">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineIcon />
              </Avatar>
              <h2>Add New Drugs</h2>
            </Grid>
      
              <TextField
                label="Name"
                placeholder="Name"
                fullWidth
                name="drugName" onChange={change}
                required
              />
            <TextField
              label="Quantity"
              placeholder="quantity"
              type="number"
              fullWidth
              required
              name="quantity" onChange={change}
            />
             <Typography style ={lableText}>
              <InputLabel id="demo-simple-select-helper-label">Expiry Date</InputLabel>
              <TextField
                id="date"
                type="date"
                name="expiryDate"
                fullWidth
                required
                onChange={date}

              />
               </Typography>
      
            <TextField label="Price" 
            placeholder="Price" 
            fullWidth 
            required
            name="price"
            onChange={change}
            
            />
            <Typography variant="body2" style={lableText} required>
            <InputLabel id="demo-simple-select-helper-label">Select Supplier</InputLabel>   
          <Select labelId="demo-simple-select-helper-label" options={state1.ids}  onChange={supplier}/>
            
          </Typography>
      
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
            <img src={Drugs} alt="Suplier-Image" className="doctorssss" />
          </Paper>
        </Grid>
        <Foot/>
      </div>
      </div>
      </>
    )
}
export default AddDrugs;