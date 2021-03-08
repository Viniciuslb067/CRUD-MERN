import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Login from './views/login/index'
import Register from './views/register/index'
import Index from './views/index/index'
import Dashboard from './views/dashboard/index'
import Edit from './views/edit/index'


import PrivateRoute from './services/wAuth'

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path='/users/editar/:id' component={Edit} />
        <Route path="/" component={Index} />
    </Switch>
    </BrowserRouter>
  )
}