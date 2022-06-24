import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Toolbaradmin from './Toolbaradmin';
import './App.css';
import Foot from './Foot';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Editemployee(props) {  
    console.log(props.match.params.drugId)
        const [drug, setdrug]= useState({
            drugId:'',
            drugName: '', 
            quantity: '',
            price: '',
            expiryDate:'',
            supplierId:''

         });  
        const Url = "http://localhost:65313/api/Drug/" +props.match.params.drugId;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setdrug(result.data);  
            
          };  
        
          GetData();  
        }, []);  
        
        const UpdateDrug = (e) => {  
          e.preventDefault();  
          const data = {drugId:drug.drugId, drugName:drug.drugName, quantity: drug.quantity, expiryDate: drug.expiryDate, price: drug.price, supplierId: drug.supplierId};  
          axios.put('http://localhost:65313/api/Drug/'+props.match.params.drugId, data)  
            .then((result) => {  
              props.history.push('/drugdetails')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setdrug({...drug, [e.target.name]: e.target.value});  
        }  
        
        return (  
            <div class="bg_image">
      
        <Toolbaradmin/>
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateDrug}>  
                            <h1 class="head">Update Drug</h1>  
                            <InputGroup className="mb-3">  
            
                              <Input type="text" name=" drugId" id=" drugId" placeholder=" drugId" value={drug.drugId} onChange={ onChange } readOnly />  
                            </InputGroup> 
                        
                            <InputGroup className="mb-3">  
            
                              <Input type="text" name="drugName" id="drugName" placeholder="drugName" value={drug.drugName} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="quantity" name="quantity" id="quantity" value={drug.quantity} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="expiryDate" name="expiryDate" id="expiryDate" value={drug.expiryDate} onChange={ onChange }/>  
                            </InputGroup>   
                            <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="price" name="price" id="price" value={drug.price} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="supplierId" name="supplierId" id="supplierId"  value={drug.supplierId} onChange={ onChange }  />  
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
              <Foot/>
              </div>
        )  
}  
  
export default Editemployee 