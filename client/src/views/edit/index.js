import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'  
import api from '../../services/api'

export default function Edit() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [level, setLevel] = useState("")
    const [acess, setAcess] = useState("")

    const { id } = useParams()

    useEffect(() => {
      async function getUser(){
        var response = await api.get('/users/editar/'+id)
        setName(response.data.name)
        setEmail(response.data.email)
        setLevel(response.data.level)
        setAcess(response.data.acess)
      }
      getUser()
    },[id])
    
    async function submit(){
      const data = {
        name:name,
        email:email,
        level:level,
        acess: acess,
        _id:id  
      }
        await api.put('/users/editar',data)
        .then(res => {
          if(res.data.status === 1) {
            Swal.fire({
              icon: 'success',
              title: '' +res.data.success ,
              showConfirmButton: false,
              timer: 1500
            })
            setInterval(function() { window.location.href='/dashboard' }, 1000);
          } else if(res.data.status === 2){
            Swal.fire({
              icon: 'error',
              title: '' +res.data.error ,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch(err => {
          console.log(err)
        })         
      }
 
    return (
        
<div className="row mt-5">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h1 className="text-center mb-3">
          <i className="fas fa-user-plus"></i> Editar   
        </h1>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
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
            <label>Nível</label>
            <select 
            id="level"
            name="level"
            className="form-control"
            value={level}
            onChange={e => setLevel(e.target.value)}
            >
            <option>Sem nível</option>
            <option>Estagiário</option>
            <option>Atendente</option>
            <option>Vendedor</option>
            <option>Gerente de vendas</option>
            <option>Administrador</option>
            </select>
          </div>
          <div className="form-group">
            <label>Acesso</label>
            <select 
            id="level"
            name="level"
            className="form-control"
            value={acess}
            onChange={e => setAcess(e.target.value)}
            >
            <option>Bloqueado</option>
            <option>Liberado</option>
            </select>
          </div>
          <button onClick={submit} className="btn btn-primary btn-block">
            Editar
          </button>
      </div>
    </div>
  </div>
    );
}