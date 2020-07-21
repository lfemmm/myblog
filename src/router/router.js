import React from 'react'
import { Route, Router, hashHistory } from 'react-router'

import Home from '../pages/home/Home'


const routes =
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
  </Router>


export default routes;