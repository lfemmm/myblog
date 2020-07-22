import React from 'react'
import { Route, Router, hashHistory } from 'react-router'

import Home from '../pages/Home'
import Resume from '../pages/Resume'


const routes =
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/middle' component={Home} />
    {/* <Route path='/' component={Resume} /> */}
  </Router>


export default routes;