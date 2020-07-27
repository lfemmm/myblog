import React from 'react'
import { Route, Router, hashHistory, IndexRedirect } from 'react-router'

import Home from '../pages/Home'

import OtherPages from '../pages/OtherPages'
import Resume from '../pages/Resume'
import Blog from '../pages/Blog'
import Diary from '../pages/Diary'
import MessageBoard from '../pages/MessageBoard'

import Login from '../pages/Login'

import Administration from '../pages/Administration'
import AdminResume from '../pages/AdminResume'
import AdminBlog from '../pages/AdminBlog'
import AdminDiary from '../pages/AdminDiary'
import AdminMsg from '../pages/AdminMsg'


const routes =
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <IndexRedirect to="home" />
    </Route>
    <Route path='/home' component={Home} />
    <Route path='/middle' component={Home} />

    <Route path='/other' component={OtherPages} >
      <Route path='resume' component={Resume} />
      <Route path='blog' component={Blog} />
      <Route path='diary' component={Diary} />
      <Route path='messageboard' component={MessageBoard} />
    </Route>

    <Route path='/login' component={Login} />

    <Route path='/admin' component={Administration}>
      <IndexRedirect to="/admin/resume" />
      <Route path='resume' component={AdminResume} />
      <Route path='blog' component={AdminBlog} />
      <Route path='diary' component={AdminDiary} />
      <Route path='message' component={AdminMsg} />
    </Route>
  </Router>


export default routes;