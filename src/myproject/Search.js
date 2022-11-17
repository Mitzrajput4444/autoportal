import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { json } from 'react-router';

export default function Search() {
    const[user,setUser] = useState([]);
    const[found,setFound] = useState(user);
    const filter = (e) =>{
        const keyword = e.target.value;
        if(keyword !== ""){
            const results = user.filter((user) =>{
                return user.name.toLowerCase().startwith(keyword.toLowerCase());
            });
            console.log(results)
            setFound(results);
        }else{
            setFound(user);
        }
    };
    useEffect(()=>{
        fetch("http://localhost:3001/users")
        .then((response)=>response.json())
        .then((json)=>{
            setUser(json);
            setFound(json);
        });
    },[])
    const handleSearch = () => {
        {found && found.map((item)=><h1>{item.name}</h1>)}
    }
  return (
    <div>
        <input type="text" onChange={filter}/>
        <button onClick={handleSearch}></button>
    </div>
  )
}
