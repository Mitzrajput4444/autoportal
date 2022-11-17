import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
export default function Signup(){
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role_id, setRoleid] = useState(2)
  const navigate = useNavigate()
const handleSignup = (e) =>{
  e.preventDefault()
  const data = {name,email,password,role_id}
  fetch('http://localhost:3001/users',{
    method: "post",
    body:JSON.stringify(data),
    headers:{
      'content-type':'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => {
    // console.log(json)
    navigate('/Login')
  })
}

   return (
    <>
    <div className="app">
      <div className="login-form">
        <div className="title">Sign Up</div>
        <div className="form">
      <form onSubmit={handleSignup}>
      <div className="input-container">
          <label>Name </label>
          <input type="text" name="name" onChange={(e)=>setName(e.target.value)} required />
         
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password"onChange={(e)=>setPassword(e.target.value)} required />
         
        </div>
        <div className="button-container">
          <input type="submit" value="SignUp" />
        </div>
      </form>
    </div>
    <div className="already">
        <p >Already have an Account ?<a href="/Login">Login</a></p>
    </div>
      </div>
    </div>
    </>
  );
}

