import React, { useEffect, useState } from 'react'
import { logout, getToken } from './auth'
import { Route, Redirect } from 'react-router-dom'
import api from './api'

export default function WAtuh ({ component: Component, ...rest  }){
    const [ redirect, setRedirect ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function verify(){
            var res = await api.get('/users/login/check/', {params:{token: getToken()}})

            if(res.data.status === 200) {
                setLoading(false)
                setRedirect(false)
            } else {
                setLoading(false)
                setRedirect(true)
            }
        }   
        verify()
    }, [])

    return (
        loading?"Carregando":<Route { ...rest}
        render={props => !redirect?(
            <Component {...props } />
        ):<Redirect to={{pathname: "/users/login",state:{ from: props.location}}} />
        } />
    )

}
