import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom";
import axios from "axios";
import Toolbars from "./Toolbars";
import Card from "./card_image.png";
import './App.css';
import Foot from "./Foot";



const Orders=(props)=>{
  console.log(props.match.userName);
    const history=useHistory();
    // console.log(props.match.params.drugId)
    // console.log(props.match.params.userName)
      const[state,setState]=useState({
        s:{
            drugId:"",
            drugName:"",
            quantity:"",
            expiryDate:"",
            price:"",

        },
        
      });
  
     useEffect(()=>{
        axios.get("http://localhost:65313/api/Drug/"+props.match.params.drugId).then(res=>{
              setState({
                ...state,
                s:{
                    drugId:res.data.drugId,
                    drugName:res.data.drugName,
                    quantity:res.data.quantity,
                    expiryDate:res.data.expiryDate,
                    price:res.data.price
                },
              })   
        }) 
    },[])
    
    const submit=(e)=>{
        console.log(state.s)
        
          axios.post("http://localhost:65313/api/Order",{
            drugId:state.s.drugId,
            quantity:state.s.quantity,
            totalAmount:state.s.quantity*state.s.price,
            orderPrice:state.s.quantity*state.s.price,
        })
        alert("successfully Order Placed")
        history.push("/home")
      }

    console.log(state.s.quantity * state.s.price)
   
    return(
        <div class="bg_image">
        <Toolbars/>
       
        
        <div class="container">
    <h2 class="text-primary">Order Details:</h2>
    <div class="cardd">
      
      <div class="card-body">
      <img class="card-img-topp" src={Card} alt="Card image"></img>
      <h4 class="text-dark">DrugId:{state.s.drugId} </h4>
        <h4 class="text-dark">Drug Name:{state.s.drugName} </h4>
        <h4 class="text-dark">Quantity:{state.s.quantity}</h4>
        <h4 class="text-dark">Expirydate:{state.s.expiryDate}</h4>
        <h4 class="text-dark">Price:{state.s.price}</h4>
        <h4 class="text-dark">Total:{state.s.quantity*state.s.price}</h4>
        <h5 class="text-success">Sure you want to Proceed</h5>
        <button class="btn btn-danger" onClick={submit} >Confirm</button>
      </div>
   </div>
  </div>
  <Foot/>
  </div>
  
        
    )
}
export default Orders;