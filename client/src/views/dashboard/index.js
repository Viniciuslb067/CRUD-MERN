import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/superhero/bootstrap.min.css";
import React, { useState, useEffect } from 'react'
import { getToken, logout, getNameUser, getTypeUser}  from '../../services/auth'

import api from "../../services/api"

import DashboardAdmin from './admin'
import DashboardEmployee from './employee'

function getDashboard() {
    if(getTypeUser() === 'Administrador') {
        return <DashboardAdmin />
    } else {
        return <DashboardEmployee />
    }
}

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

    return (
    
     getDashboard() 

    )
}