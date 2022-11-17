import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json, Navigate, useNavigate } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

export default function Crude() {
    const navigate = useNavigate()
    const [users,setUsers] = useState()
    useEffect(()=>{
        getUsers()
    },[users])
    const getUsers = () =>{
        fetch('http://localhost:3001/users').then((result)=>result.json()).then((item)=>{
            setUsers(item)
        })
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/users/${id}`,{
            method:'DELETE',
        });
    }
    
    
  return (
   <div className='container'>
    <div className='row mt-4'>
        <div className='col-md-12'>
            <LinkContainer to="/AddUser">
                <a className='btn btn-primary my-4'>ADD</a>
            </LinkContainer>
           
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="row">Id</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((item) =>
                        item.role_id == 1 ? ''
                        :
                    
                    <>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>
                            <LinkContainer to={`/edituser/${item.id}`}>
                            <a className='btn btn-info mx-2'>Edit</a>
                            </LinkContainer>
                            <a className='btn btn-info mx-2' onClick={()=>handleDelete(item.id)}>Delete</a>
                        </td>
                    </tr>
                    </>
  )}
                </tbody>
            </table>
        </div>
    </div>

   </div>
  )
}
