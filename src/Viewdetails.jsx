// import React, {Component, useContext} from 'react'
// import axios from 'axios'
// import {Link} from "react-router-dom";
// import  Tool from './Tools';
// import Foot from './Foot';



// export default class Students extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           s:[]
//       };
//   }
//   gettodosData() {
//       axios.get("http://localhost:12831/api/Supplier").then(res => {
//               res.data.map(data=>{
//                 this.setState({
//                   ...this.state,
//                   s:[
//                     ...this.state.s,
//                     data
//                   ]
//                 })
//               })
//               console.log(res.data)   
                 
//           })
//      console.log(this.state.s)     

//   }
//   confirmdelte(supplierId){
//     axios.delete(`http://localhost:12831/api/Supplier/${supplierId}`)
//   }
//   componentDidMount(){
//       this.gettodosData()
//   }
//   render() {
    
//       return (
        
//         <div class="bg_image">
//             <Tool/>
//       <div class="container">
        
//           <div>
//                <table class="table table-success table-striped">
//                 <thead>
//                   <tr>
//                     <th scope="col">Supplier Id</th>
//                     <th scope="col">Supplier Name</th>
//                     <th scope="col">Supplier Email</th>
//                     <th scope="col">Suplier Contact</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {this.state.s.map(u =>
                
//                 <tr>
//                     <th scope="row">{u.supplierId}</th>
//                     <td>{u.supplierName}</td>
//                     <td>{u.supplierContact}</td>
//                     <td>{u.supplierEmail}</td>
//                     <td>
//                     <Link to={`/student/${u.supplierId}`}><button class="btn btn-info">View</button></Link>&nbsp;&nbsp;&nbsp;
//                      <Link to={`/delete/${u.supplierId}`}><button class="btn btn-warning" onClick={confirmdelte}>Delete</button></Link>&nbsp;&nbsp;&nbsp;
//                      <Link to={`/edit/${u.supplierId}`}><button class="btn btn-outline-secondary">Edit</button></Link>

//                     </td>
//                   </tr>
                 
//                 )}
//                 </tbody>
//               </table>
//           </div>
//           </div>
//           <Foot/>
//           </div>
          
        
//       )
//   }
// }