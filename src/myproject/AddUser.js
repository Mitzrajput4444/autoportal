import React, { useState } from "react";
import { useEffect } from "react";
import { json, useParams } from "react-router";
import { Navigate, useNavigate } from "react-router";
export default function Signup(){
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [role_id, setRoleid] = useState(2)
  const [user,setUser] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(()=>{
  if(id != undefined){
    fetch(`http://localhost:3001/users/${id}`)
    .then((result)=>result.json())
    .then((data)=>{
      setName(data.name)
      setEmail(data.email)
      setPassword(data.password)
      
    })
   }
  },[user])
 
 const handleUpdate = (e) =>{
    e.preventDefault()
    const data = {name,email,password}
    fetch(`http://localhost:3001/users/${id}`,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
            'content-type':'application/json; charset=UTF-8',
                   },
    }).then((response)=>response.json()).then((json)=>{
      console.log(json)
      navigate('/Crude')
    });
 }
 
const handleAdd = (e) =>{
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
    navigate('/Crude')
  });
}

   return (
    <>
    <div className="app">
      <div className="login-form">
        <div className="title"></div>
        <div className="form">
          <h1>{id == undefined?'add user':'update user'}</h1>
      <form onSubmit={id== undefined ? handleAdd : handleUpdate}>
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
          <input type="submit" value={id == undefined ? 'Add User':'Update User'} />
        </div>
      </form>
    </div>
    
      </div>
    </div>
    </>
  );
}

