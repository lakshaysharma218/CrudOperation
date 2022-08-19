import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory ,useParams} from 'react-router-dom'

const Edituser = () =>{
    let history=useHistory();
    const {id} = useParams();

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
    })
    const {name,username,email} = user
    const onInputChange= e =>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    useEffect(() =>  {
        loaduser();

    },[])
    const onSubmit = async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        history.push("/")
    }
    const loaduser = async () => {
    
        const result = await axios.get(`http://localhost:3001/users/${id}`,user);
        setUser(result.data);
    }

    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit User</h2>
            <form onSubmit={e=>onSubmit(e)}>    
        <div className="form-group">
            <input
            type ="text"
            className="form-control form-control-lg m-2"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
            />
        </div>
          <div className="form-group">
          <input
          type ="text"
          className="form-control form-control-lg m-2"
          placeholder="Enter your username"
          name="username"
          value={username}
          onChange={e => onInputChange(e)}
          />
      </div>
        <div className="form-group">
        <input
        type ="text"
        className="form-control form-control-lg m-2"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={e => onInputChange(e)}
        />
    </div>
    <button className="btn btn-warning btn block"> Edit User</button>
    </form>
    </div>
    </div>
    )
}


export default Edituser ;