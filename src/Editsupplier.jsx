import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Toolbaradmin from './Toolbaradmin';
import './App.css';
import Foot from './Foot';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function Editsupplier(props) {  
    console.log(props.match.params.supplierId)
        const [supplier, setsupplier]= useState({
            supplierId:'',
            supplierName: '', 
            supplierContact: '',
             supplierEmail: ''
         });  
        const Url = "http://localhost:65313/api/Supplier/" +props.match.params.supplierId;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setsupplier(result.data);  
            
          };  
        
          GetData();  
        }, []);  
        
        const UpdateSupplier = (e) => {  
          e.preventDefault();  
          const data = {supplierId:supplier.supplierId, supplierName:supplier.supplierName, supplierContact: supplier.supplierContact, supplierEmail: supplier.supplierEmail};  
          axios.put('http://localhost:65313/api/Supplier/'+props.match.params.supplierId, data)  
            .then((result) => {  
              props.history.push('/details')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setsupplier({...supplier, [e.target.name]: e.target.value});  
        }  
        
        return (  
            <div class="bg_image">
      
        <Toolbaradmin/>
        <div class="float-container">
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateSupplier}>  
                            <h1 class="head">Update Spplier</h1>  
                            <InputGroup className="mb-3">  
            
                              <Input type="text" name=" supplierId" id=" supplierId" placeholder=" supplierId" value={supplier.supplierId} onChange={ onChange } readOnly />  
                            </InputGroup> 
                        
                            <InputGroup className="mb-3">  
            
                              <Input type="text" name="supplierName" id="supplierName" placeholder="supplierName" value={supplier.supplierName} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="supplierContact" name="supplierContact" id="supplierContact" value={supplier.supplierContact} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="supplierEmail" name="supplierEmail" id="supplierEmail"  value={supplier.supplierEmail} onChange={ onChange }  />  
                            </InputGroup>   
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container> 
                </div> 
              </div>  
              <Foot/>
              </div>
        )  
}  
  
export default Editsupplier 