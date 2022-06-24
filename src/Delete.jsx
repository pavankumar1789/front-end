import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import axios from "axios";




const Delete=(props)=>{
    const{id}=props;
      const[state,setState]=useState({
        s:{
          supplierId:"",
          supplierName:"",
          supplierEmail:"",
          supplierContact:""

        },
        id:""
      });
   console.log("id is",id)
     useEffect(()=>{
        axios.get(`http://localhost:65313/api/Supplier/${id}`).then(res=>{
              setState({
                ...state,
                s:{
                  supplierId:res.data.supplierId,
                  supplierName:res.data.supplierName,
                  supplierEmail:res.data.supplierEmail,
                  supplierContact:res.data.supplierContact
                },
                id:res.data._id
              })
             
        })
        console.log(state.s)
    },[])

    
    const confirm=(id)=>{
      axios.delete(`http://localhost:65313/api/Supplier/${state.id}`)
    }
    return(
        <>
       
           <div class="container">
    
    <h2>Student Details:</h2>
    <div class="card">
      <div class="card-body">
      <h4 class="card-text">SupplierId:{state.s.supplierId} </h4>
        <h4 class="card-text">SupplierName:{state.s.supplierName} </h4>
        <h4 class="card-texte">SupplierEmail:{state.s.supplierEmail}</h4>
        <h4 class="card-text">SupplierContact:{state.s.supplierContact}</h4>
        <h5 class="card-text">Sure you want to delete</h5>
        <Link to="/details"><button class="btn btn-outline-danger" onClick={confirm}>Confirm</button></Link>
      </div>
    </div>
  </div>
        </>
    )
}
export default Delete;