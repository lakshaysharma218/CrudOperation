import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser  = async () =>{
        const result=await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }

    const deleteuser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUser();

    }

    return (
    <div>
        <h1>Home</h1>
        <table className="table" >
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,index)=>(
                <tr>
                    <th scope="row"> {index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn btn-primary m-2" ><i class="fa fa-eye" aria-hidden="true"></i></Link>
                        <Link className="btn btn-outline-primary m-2 " to={`/user/edit/${user.id}`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                        <Link className="btn btn-danger m-2" onClick={()=>deleteuser(user.id)}><i class="fa fa-trash" aria-hidden="true"></i></Link>
                    </td>
                </tr>
            )
            )
            }
        </tbody>
      </table>

    </div>
    )
}

export default Home ;