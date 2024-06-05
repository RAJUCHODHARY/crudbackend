import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setuseers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setuseers(result.data))
            .catch(err => console.log(err))
    }, [])
    const handledelete=(id)=>{
        axios.delete('http://localhost:3001/deleteuser/'+id)
        .then(res=>{console.log(res)
            window.location.reload()
        })
        .catch(errr=>console.log(errr))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-80 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td><Link to={`/update/${user._id}`} className='btn btn-success'>update</Link><button className='btn btn-danger'
                                    onClick={(e)=>handledelete(user._id)}
                                    >Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Users;
