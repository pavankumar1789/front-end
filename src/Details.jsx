// import React,{Component} from 'react';
// import {Link} from "react-router-dom";
// import Foot from './Foot';
// import axios from 'axios';
// import Addsupplier from './Addsupplier';
// import Toolbaradmin from './Toolbaradmin';

//  class Details extends Component{

//     constructor(props){
//         super(props);
//         this.state={libs:[]}
//     }

//     refreshList(){
//         fetch('http://localhost:12831/api/Supplier')
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({libs:data});
//         });
//     }

//     componentDidMount(){
//         this.refreshList();
//     }

//     componentDidUpdate(){
//         this.refreshList();
//     }
//     deleteSupplier(supplierId){
//         if(window.confirm('Are you sure?'))
//         {
//             fetch('http://localhost:12831/api/Supplier/'+this.props.supplierId,{
//                 method:'DELETE',
//                 header:{'Accept':'application/json',
//                 'Content-type':'application/json'}
//             })
//         }
//     } 
//     editSupplier(supplierId){
//         console.log(supplierId);
//     }
//     render(){
//         const {libs}=this.state;
//         console.log(this.state);
//         return(
//             <div class="bg_image">
//             <Toolbaradmin/>
//                 <div class="container">
                    
//                  <table class="table table-success table-striped">
//                  <thead>
//                   <tr>
//                     <th scope="col">Supplier Id</th>
//                     <th scope="col">Supplier Name</th>
//                     <th scope="col">Supplier Email</th>
//                     <th scope="col">Suplier Contact</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                     <tbody>
//                         {libs.map(emp=>
//                              <tr>
//                              <th scope="row">{emp.supplierId}</th>
//                              <td>{emp.supplierName}</td>
//                              <td>{emp.supplierContact}</td>
//                              <td>{emp.supplierEmail}</td>
//                              <td>
//                               <button class="btn btn-danger" onClick={()=>this.deleteSupplier(emp.supplierId)}>Delete</button>&nbsp;&nbsp;&nbsp;
//                               <Link to={"/edit/"+emp.supplierId}><button class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp;</Link>
         
//                              </td>
//                            </tr>
//                         )}
//                     </tbody>
//                  </table>
//             </div>
//             <Foot/>
//             </div>
            
                    
//         )
//     }
// }
// export default Details;