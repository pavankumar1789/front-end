import React,{useEffect,useState,useCallback,useMemo} from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import './App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';
import Tools from './Tools';
import Toolbars from './Toolbars';
import Foot from './Foot';
import { render } from 'react-dom';
import Pricevalue from './Pricevalue';
import Totalvalue from './Totalvalue';
import {Link} from "react-router-dom";


const SimpleComp =(p)  =>
{
  
  return (
    <>
     <Link to={"/orders/"+p.data.drugId}><AddShoppingCartIcon/></Link>
    </>

  );
 

  }

const Home = () =>{
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [userName,setName] = useState('');
  const[rowData,setRawdata] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'drugId' },
    { field: 'drugName' },
    { field: 'quantity'},
    { field: 'expiryDate'},
    { field: 'price'},
    { field: 'Add to Cart' ,cellRenderer:SimpleComp},
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
  }, []);
  

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
                 setName(content.userName);
             }
        )();
    },[]);
   const onGridReady = useCallback((params) => {
      axios.get('http://localhost:65313/api/Drug')
        .then(result => setRawdata(result.data));
    }, []);
    console.log(rowData);
    
    return(
      <div class="bg_image">
        <Toolbars/>
       <div class="float-container">
    
        <h5 class="change">Welcome To Pharmacy Mangement&nbsp;&nbsp;&nbsp;{ userName  ? 'Hi ' + userName: 'You are Not Logged In'}</h5>
    
      </div>
      <div class="float-container">
      <div className="ag-theme-alpine ag-style">
      <div style={containerStyle}>
      <div style={gridStyle}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
        {/* <AgGridReact
          defaultColDef={{ flex: 1 }}
          rowHeight={60}
          rowData={rowData} >
          <AgGridColumn field="drugId" headerName="Drug Id" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="drugName" headerName="Drug Name" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="quantity" headerName="Quantity" sortable={true} filter={true} cellClass="vertical-middle" />
          <AgGridColumn field="expiryDate" headerName="Expiry Date" sortable={true} filter={true}  cellClass="vertical-middle" />
          <AgGridColumn field="price" headerName="Price" sortable={true} filter={true}  cellClass="vertical-middle" />
        </AgGridReact> */}
      </div>
      </div>
      <Foot/>
      </div>
    );
};

export default Home;
    