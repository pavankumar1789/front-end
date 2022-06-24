import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react' 
import Foot from './Foot';
import Toolbaradmin from './Toolbaradmin';
function SupplierList(props) {  
  const [data, setData] = useState([]);  
  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('http://localhost:65313/api/Supplier');  
      setData(result.data);  
    };  
  
    GetData();  
  }, []);  
  const deleteeployee = (supplierId) => {  
    axios.delete('http://localhost:65313/api/Supplier/' +supplierId)  
      .then((result) => {  
        props.history.push('/dashboard')  
      });  
  };  
  const editemployee = (supplierId) => {  
    props.history.push({  
      pathname: '/edit/' + supplierId
    });  
  };  
  
  return (  
    <div class="bg_image">
   <Toolbaradmin/>
        <div class="container"> 
      <Row>  
        <Col>  
         
            <CardHeader class="text-dark">  
              <i className="fa fa-align-justify"></i> Supplier List  
              </CardHeader>  
             
              <table class="table table-success table-striped">  
                <thead>  
                  <tr>  
                  
                    <th scope="col">Supplier Id</th>
                    <th scope="col">Supplier Name</th>
                    <th scope="col">Supplier Email</th>
                    <th scope="col">Suplier Contact</th>
                    <th scope="col">Action</th>
                  
                  </tr>  
                </thead>  
                <tbody>  
                    {data.map(emp=>
                             <tr>
                             <th scope="row">{emp.supplierId}</th>
                             <td>{emp.supplierName}</td>
                             <td>{emp.supplierContact}</td>
                             <td>{emp.supplierEmail}</td>
                             <td>
                             <button className="btn btn-warning" onClick={() => { editemployee(emp.supplierId) }}>Edit</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={() => { deleteeployee(emp.supplierId) }}>Delete</button> 
         
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
  
export default SupplierList  