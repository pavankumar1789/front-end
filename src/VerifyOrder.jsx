import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react' 
import Foot from './Foot';
import Toolbaradmin from './Toolbaradmin';
function VerifyOrder(props) {  
   const [data, setData] = useState([]); 
   const[state,setState]=useState({
    s:{
        orderId:"",
        userId:"",
        userName:"",
        quantity:"",
        expiryDate:"",
        price:"",

    },
    
  }); 
  
  

  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:65313/api/Orders');  
      setData(result.data);  
    };  
  
    GetData();  
  }, []);  
  console.log(data)
  
  
  return (  
    <div class="bg_image">
   <Toolbaradmin/>
        <div class="container"> 
        <h2 class="text-primary">Verify Order Details:</h2>
      <Row>  
        <Col>  
           
              <table class="table table-success table-striped">  
                <thead>  
                  <tr>  
                  
                    <th scope="col">Order Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Address</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Action</th>
                  
                  </tr>  
                </thead>  
                <tbody>  
                    {data.map(emp=>
                             <tr>
                             <th scope="row">{emp.orderId}</th>
                             <td>{emp.userId}</td>
                             <td>{emp.user.userName}</td>
                             <td>{emp.user.userAddress}</td>
                             <td>{emp.user.email}</td>
                             <td>
                            <button className="btn btn-danger">PLace Order</button> 
         
                             </td>
                           </tr>
                     )}    
                </tbody>  
              </table>  
            
        </Col>  
      </Row>  
      </div>
    <Foot/>
    </div> 
  )  
}  
  
export default VerifyOrder; 