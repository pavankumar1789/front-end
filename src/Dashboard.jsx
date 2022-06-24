   
import React, { useState } from 'react'
import { Grid, Paper, Avatar, Button, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import Suplier from './suplier.jpg'
import Drugs from './drug.jpg';
import Order from './order.png';
import { BrowserRouter, Link } from "react-router-dom";
import Toolbar from './Toolbar';
import Foot from './Foot';
import Toolbars from './Toolbaradmin';
import Toolbaradmin from './Toolbaradmin';
const Dashboard = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    });
    let users = '';
    const change = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#3B5FA5' }
    const textStyle = { borderBottom: '5px solid #3B5FA5', paddingBottom: 10 }
    const formStyle = { paddingBottom: 15 }
    const spacing = { marginBottom: 50 }
    return (
        <div>
            <Toolbaradmin/>
        <div class="bg_image">
        
       <div class="conatiner">
       
    <div class="left">
        <Grid align='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
                    <br />
                    <h2 style={textStyle} >Supplier's Portal</h2>
                </Grid>
                <FormControl style={formStyle}>
                    <InputLabel htmlFor="grouped-select">Supplier</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                        <ListSubheader>Select</ListSubheader>
                       <Link to="/addsupplier"> <MenuItem value={1}><PersonAddIcon />&nbsp;&nbsp;Add New Suplier</MenuItem></Link>
                        <Link to="/details"><MenuItem value={2}><UpdateIcon />&nbsp;&nbsp;Update Details & Delete</MenuItem></Link>
                       
                    </Select>
                    <FormHelperText style={spacing}>Select Operation to make changes</FormHelperText>
                </FormControl>
                <img src={Suplier} alt="Suplier-Image" className="doctorss" />
            </Paper>
        </Grid>   
    </div>
    <div class="middle">
    <Grid align='center'>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
                <br />
                <h2 style={textStyle} >Drug's Portal</h2>
            </Grid>
            <FormControl style={formStyle}>
                <InputLabel htmlFor="grouped-select">Drugs</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <ListSubheader>Select</ListSubheader>
                   <Link to="/adddrugs"> <MenuItem value={1}><PersonAddIcon />&nbsp;&nbsp;Add New Drugs</MenuItem></Link>
                    <Link to="/drugdetails"><MenuItem value={2}><UpdateIcon />&nbsp;&nbsp;Update Details & Delete</MenuItem></Link>
                   
                </Select>
                <FormHelperText style={spacing}>Select Operation to make changes</FormHelperText>
            </FormControl>
            <img src={Drugs} alt="Drugs-Image" className="doctorssss" />
        </Paper>
        </Grid>
    </div>
</div>
    <div class="right">
        <Grid align='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
                    <br />
                    <h2 style={textStyle} >Order's Portal</h2>
                </Grid>
                <FormControl style={formStyle}>
                    <InputLabel htmlFor="grouped-select">Orders</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                        <ListSubheader>Select</ListSubheader>
                       <Link to="/userorders/:supplierId/"> <MenuItem value={1}><UpdateIcon />&nbsp;&nbsp;View Orders</MenuItem></Link>
                        <Link to="/verifyOrder"><MenuItem value={2}><UpdateIcon />&nbsp;&nbsp;Verify Orders</MenuItem></Link>
                       
                    </Select>
                    <FormHelperText style={spacing}>Select Operation to make changes</FormHelperText>
                </FormControl>
                <img src={Order} alt="Order-Image" className="order" />
            </Paper>
        </Grid>   
    </div>
    
<Foot/>
</div>
</div>
    )
}
export default Dashboard;