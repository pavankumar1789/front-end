import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react' 
import Foot from './Foot';
import Toolbaradmin from './Toolbaradmin';


function DrugList(props) {  
  const [data, setData] = useState([]);  
  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:65313/api/Drug');  
      setData(result.data);  
    };  
  
    GetData();  
  }, []);  
  
  const deletedrug = (drugId) => {  
    axios.delete('http://localhost:65313/api/Drug/' +drugId)  
      .then((result) => {  
        props.history.push('/dashboard')  
      });  
  };  
  const editdrug = (drugId) => {  
    props.history.push({  
      pathname: '/dedit/' + drugId
    });  
  };  
  
  return (  
    <div class="bg_image">
   <Toolbaradmin/>
        <div class="container"> 
      <Row>  
        <Col>  
          
            <CardHeader class="text-dark">  
              <i className="fa fa-align-justify"></i> Drugs List  
              </CardHeader>  
            
              <table class="table table-success table-striped">  
                <thead>  
                  <tr>  
                  
                    <th scope="col">Drug Id</th>
                    <th scope="col">Drug Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Expiry Date</th>
                    <th scope="col">Supplier Id</th>
                    <th scope="col">Action</th>
                  
                  </tr>  
                </thead>  
                <tbody>  
                  
                    {data.map(emp=>
                             <tr>
                             <th scope="row">{emp.drugId}</th>
                             <td>{emp.drugName}</td>
                             <td>{emp.quantity}</td>
                             <td>{emp.price}</td>
                             <td>{emp.expiryDate}</td>
                             <td>{emp.supplierId}</td>
                             <td>
                             <button className="btn btn-warning" onClick={() => { editdrug(emp.drugId) }}>Edit</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => { deletedrug(emp.drugId) }}>Delete</button> 
         
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
  
export default DrugList 