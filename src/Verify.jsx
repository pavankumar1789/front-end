import React,{useState,useEffect} from "react";
import {BrowserRouter,Route,Link,useHistory} from "react-router-dom";
import axios from "axios";
import Toolbars from "./Toolbars";
import Card from "./card_image.png";
import './App.css';
import Foot from "./Foot";



const Verify=(props)=>{
  console.log(props.match.params.orderId);
    const history=useHistory();
    // console.log(props.match.params.drugId)
    // console.log(props.match.params.userName)
    const [userId,setId] = useState('');
      const[state,setState]=useState({
        s:{
            orderId:"",
            

        },
        
      });

      
      useEffect(() =>{
        (
        async () =>{
          const response =  await fetch('http://localhost:65313/api/Auth/User',{
                    method:'GET',
                         headers:{'Content-Type':'application/json'},
                        credentials:'include',
                        
                     });
                     const content = await response.json();
                     // console.log(content.name);
                     console.log(content.userName);
                     console.log(content.userId);
                     
                     setId(content.userId)
                 }
            )();
        },[]);
  
     useEffect(()=>{
        axios.get("http://localhost:65313/api/Order/"+props.match.params.orderId).then(res=>{
              setState({
                ...state,
                s:{
                    orderId:res.data.orderId,
                },
              })   
        }) 
    },[])
    console.log(state)
    
    const submit=(e)=>{
        console.log(state.s)
        
          axios.post("http://localhost:65313/api/Orders",{
            orderId:state.s.orderId,
            userId:userId,
            
        })
        alert("successfully Order Placed")
        history.push("/verifyOrder")
      }

     console.log(userId)
   
    return(
        <div class="bg_image">
        <Toolbars/>
       
        
        <div class="container">
    <h2 class="text-primary">Order Details:</h2>
    <div class="cardd">
      
      <div class="card-body">
      <img class="card-img-topp" src={Card} alt="Card image"></img>
      <h4 class="text-dark">OrderId:{state.s.orderId} </h4>
     <h4 class="text-dark">UserId:{userId} </h4> 
        
        <h5 class="text-success">Sure you want to Proceed</h5>
        <button class="btn btn-danger" onClick={submit} >Confirm</button>
      </div>
   </div>
  </div>
  <Foot/>
  </div>
  
        
    )
}
export default Verify;