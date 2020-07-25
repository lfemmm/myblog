import React from 'react'
import { Route, Router, hashHistory,IndexRedirect } from 'react-router'

import Home from '../pages/Home'
import OtherPages from '../pages/OtherPages'
import Resume from '../pages/Resume'
import Blog from '../pages/Blog'
import Diary from '../pages/Diary'
import MessageBoard from '../pages/MessageBoard'


const routes =
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRedirect to="home" />
    </Route>
    <Route path='/home' component={Home} />
    <Route path='/middle' component={Home} />
    <Route path='/other' component={OtherPages} >
      <Route path='resume' component={Resume}/>
      <Route path='blog' component={Blog}/>
      <Route path='diary' component={Diary}/>
      <Route path='messageboard' component={MessageBoard}/>
    </Route>
  </Router>


export default routes;