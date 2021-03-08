import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons' 
import React, { useState, useEffect } from 'react'
import { getToken, logout, getNameUser, getTypeUser}  from '../../services/auth'

import api from "../../services/api"

export default function Dashboard() {

    const[userList, setUserList] = useState([])

    useEffect(() => {
    api.get('/dashboard') 
        .then((response) => {
            setUserList(response.data)
        })
        .catch((err) => {
            console.log(err)
        }) 
    }, [])

    async function handleDelete(id){
    await api.delete('/users/delete/'+id)    
    }

    async function confirmLogout(){
        await api.get('/users/logout',{headers: {token: getToken()}})

        logout()
        window.location.href = '/users/login'
    }

    return (
    
<div>
    <h1 className="mt-4">Dashboard</h1>
    <p className="lead mb-3">Bem-vindo, {getNameUser()}</p>
    <button onClick={confirmLogout} type="button" className="btn btn-secondary">Logout</button>
    <table className="table table-hover">
        <thead>
        <tr className="table-active">
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Nível</th>
            <th scope="col">Ação</th>
        </tr>
        </thead>
        <tbody>
        {userList.map((val) => {
         return (
            <tr>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.level}</td>
                <td><a href={'/users/editar/'+val._id} ><FontAwesomeIcon icon={faUserEdit}/></a>
                <a href="" onClick={() => handleDelete(val._id)}><FontAwesomeIcon icon={faUserMinus} /></a></td>
            </tr>  
            )
            })}  
        </tbody>
    </table>
    </div>
    );   
}