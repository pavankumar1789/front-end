import React from 'react';
import './App.css';
// import background from './background.jpg'
// import neback from './neback.jpg';
import {Link} from 'react-router-dom'
import Foot from './Foot';
import Toolbar from './Toolbar';
// import Navbar from './Navbar';
import Card from './doctors.png'
import Med from './medicine.png'
import NewMed from './pharmacist.png'
 
// import  Toolbar  from './Toolbar';
 function Landing() {
    return (
        <div class="float-container">
       <Toolbar/>
        <div class="bg_image">
        <div class="container">
       <div class="left">
       <div class="carddl" >
       <img class="card-img-top" src={Card} alt="Card image"></img>
    <div class="card-body">
    <h5 class="card-title">Contact Us</h5>
    <p class="card-text">For queries related to Online orders
Please contact us at: cpharma@gmail.community</p>
    <a href="/contact" class="btn btn-primary">Know More</a>

    </div>
        </div>
        </div>
        <div class="left">
        <div class="carddl" >
       <img class="card-img-top" src={Med} alt="Card image"></img>
    <div class="card-body">
    <h5 class="card-title">Quality-checked Medicines</h5>
    <p class="card-text">Cpharma is a one-stop-shop for all your healthcare needs, We have a range of categories and products</p>
    <a href="#" class="btn btn-primary">Know More</a>
    </div>
        </div>
        </div>
        <div class="left">
        <div class="carddl" >
       <img class="card-img-top" src={NewMed} alt="Card image"></img>
    <div class="card-body">
    <h5 class="card-title">Online Medicine</h5>
    <p class="card-text"> Order medicines online at Cpharma, India’s trusted online medicine app.</p>
    <a href="#" class="btn btn-primary">Know More</a>
    </div>
        </div>
        </div>
        </div>
       
       
       
   
    <Foot/>
    </div>
    </div>
       
    )
}
export default Landing