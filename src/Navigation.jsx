import React,{useState} from 'react'
import { Link } from 'react-router-dom'

 const  Navigation=(props) => {
  //  const {name} = props;
  
  
   


    
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <Link to ="/home"className="navbar-brand" >Home</Link>
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to ="/login" className="nav-link active" >Login</Link>
        </li>
      </ul>
     <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <Link to="/newregister" className="nav-link active">Register</Link>
        </li>
   </ul>
   
    <div> 
   
    </div>
  </div>
</nav>


  )
}
export default Navigation