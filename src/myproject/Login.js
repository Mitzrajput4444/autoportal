import React, { useState } from "react";
import { json, Navigate, useNavigate } from "react-router";



export default function Login(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [users,setUsers] = useState()
    const navigate = useNavigate()
    const loginHandle = (e) =>{
      e.preventDefault()
      const data = {email,password}
      fetch("http://localhost:3001/users").then((response) => response.json()).then((result) => {
        result.filter((item)=>{
          if (item.email === email){
            if(item.password === password){
              if(item.role_id === 1){
                localStorage.setItem('admin',JSON.stringify(item))
                navigate('/')
                
              }else{
                localStorage.setItem('user',JSON.stringify(item))
                navigate('/')
              }
            }
            else{
              console.log("password not match")
              return false
            }
          }
          else{
            console.log("email not exist")
          }
        })
      })
    }

   return (
    <>
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
      <form onSubmit={loginHandle}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required />
         
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} required />
         
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
      </div>
    </div>
    </>
  );
}

