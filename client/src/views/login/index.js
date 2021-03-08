import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

import api from "../../services/api"
import Swal from 'sweetalert2'  
import {login, setIdUser, setNameUser, setTypeUser} from '../../services/auth'

export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleSubmit() {
    await api.post('/users/login',{email, password})
    .then(res => {
      if(res.status === 200) {
        if(res.data.status === 1) {
            login(res.data.token)
            setIdUser(res.data.id_user)
            setNameUser(res.data.user_name)
            setTypeUser(res.data.user_type)
            
            window.location.href = '/dashboard'

        }else if(res.data.status === 2){
          Swal.fire({
            icon: 'error',
            title: '' +res.data.error ,
            showConfirmButton: false,
            timer: 1500
          })
        }
      } else {
        Swal.fire({
          title: 'Erro no servidor!',
          icon: 'error'
        })
      }
    })
  }

  return (
<div className="row mt-5">
  <div className="col-md-6 m-auto">
    <div className="card card-body">
      <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Login</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-block">Login</button>
      <p className="lead mt-4">
        Não possui conta? <a href="/users/register">Cadastrar</a>
      </p>
    </div>
  </div>
</div>
  );
}