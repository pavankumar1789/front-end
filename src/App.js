import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import Navigation from './Navigation';
import Home  from './Home';
import Register from './Register';
import {BrowserRouter, Route, Switch,Redirect, Link} from "react-router-dom";
import Landing from './Landing';
import Newregister from './Newregister';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Addsupplier from './Addsupplier';
import Viewdetails from './Viewdetails';
import Details from './Details';
import Delete from './Delete';
import Editsupplier from './Editsupplier';
import SupplierDetails from './SupplierDetails';
import AddDrugs from './AddDrugs';
import DrugsDetails from './DrugsDetails';
import Editdrugs from './Editdrugs';
import Orders from './Orders';
import UserOrders from './UserOrders';
import VerifyOrder from './VerifyOrder';
import Verify from "./Verify"
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return ( 
      <BrowserRouter>
       <div>  
      {/* <nav>
        <Link to="/home" > Home 
        </Link>
      </nav> */}

       <Switch>
       <Route path='/' component={Landing}exact/>
       <Route path='/login' component={Login}/>
       <Route path='/logout' component={Logout}/>
       <Route path='/adminlogin' component={AdminLogin}/>
       <Route path='/dashboard' component={Dashboard}/>
       <Route path='/home' component={Home}/>
       <Route path='/newregister' component={Newregister}/>
       <Route path='/addsupplier' component={Addsupplier}/>
       <Route path='/adddrugs' component={AddDrugs}/>
       <Route path='/details' component={SupplierDetails}/>
       <Route path='/drugdetails' component={DrugsDetails}/>
       <Route path='/edit/:supplierId/' component={Editsupplier} /> 
       <Route path='/dedit/:drugId' component={Editdrugs} /> 
       <Route path='/orders/:drugId/' component={Orders} /> 
       <Route path='/userorders/:supplierId/' component={UserOrders} /> 
       <Route path='/verifyOrder/' component={VerifyOrder} /> 
       <Route path='/verify/:orderId' component={Verify} />
       </Switch>
  </div>
  </BrowserRouter>
    );
}

export default App;