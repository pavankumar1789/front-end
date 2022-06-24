import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';


 const  Register=()=> {
      const [UserName, setName] = useState();
      const [email, setEmail] = useState();
      const [contact, setContact] = useState();
      const [UserAddress, setAddress] = useState();
      const [UserPassword, setPassword] = useState();
      const [redirect,setRedirect] =useState(false);
    const submit = async (e) =>{
        e.preventDefault();
         await fetch('http://localhost:65313/api/Auth/Register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                UserName,
                email,
                contact,
                UserAddress,
                UserPassword
            })
        });
        
       setRedirect(true) 
    }
    if(redirect)
    {
        return <Redirect to ="/login"/>
    }
    
    return (
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
          <input class="form-control"  placeholder="Name" required onChange={e=>setName(e.target.value)}/>
          <input class="form-control"  placeholder="Contact" required onChange={e=>setContact(e.target.value)}/>
            <input type="email" class="form-control"  placeholder="Email Address" required onChange={e=>setEmail(e.target.value)}/>
            <input class="form-control"  placeholder="Address" required onChange={e=>setAddress(e.target.value)}/>
            <input type="password" class="form-control" placeholder="Password"required onChange={e=>setPassword(e.target.value)}/>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          <p className="mt-5 mb-3 text-muted">&copy;2022</p>
        </form>
        
    )
}
export default Register