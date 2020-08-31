import React from 'react'
import { Route, Router, hashHistory, IndexRedirect/*, browserHistory*/ } from 'react-router'

import Home from '../pages/home/Home'

import OtherPages from '../pages/home/OtherPages'
import Resume from '../pages/resume/Resume'
import Blog from '../pages/blog/Blog'
import BlogList from '../pages/blog/BlogList'
import BlogDetail from '../pages/blog/BlogDetail'
import Diary from '../pages/diary/Diary'
import MessageBoard from '../pages/msg_board/MessageBoard'

import Login from '../pages/admin_login/Login'

import Administration from '../pages/admin/Administration'

import AdminResume from '../pages/admin_resume/AdminResume'
import AdminResumeList from '../pages/admin_resume/AdminResumeList'
import AdminResumeDetail from '../pages/admin_resume/AdminResumeDetail'

import AdminBlog from '../pages/admin_blog/AdminBlog'
import AdminBlogList from '../pages/admin_blog/AdminBlogList'
import AdminBlogDetail from '../pages/admin_blog/AdminBlogDetail'

import AdminDiary from '../pages/admin_diary/AdminDiary'
import AdminDiaryList from '../pages/admin_diary/AdminDiaryList'

import AdminMsg from '../pages/admin_msg/AdminMsg'

import AdminPersonal from '../pages/admin_userinfo/AdminPersonal'


const routes =
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRedirect to="home" />
      <Route path='/home' component={Home} />
    </Route>



    <Route path='/other' component={OtherPages} >
      <Route path='/other/resume' component={Resume} />
      <Route path='/other/blog' component={Blog} >
        <IndexRedirect to="/other/blog/list" />
        <Route path='/other/blog/list' component={BlogList} />
        <Route path='/other/blog/:key' component={BlogDetail} />
      </Route>

      <Route path='/other/diary' component={Diary} />
      <Route path='/other/messageboard' component={MessageBoard} />
    </Route>

    <Route path='/login' component={Login} />

    <Route path='/admin' component={Administration}>
      <IndexRedirect to="/login" />
      <Route path='/admin/resume_add' component={AdminResume} />
      <Route path='/admin/resume_list' component={AdminResumeList} />
      <Route path='/admin/resume_list/:key' component={AdminResumeDetail} />

      <Route path='/admin/blog_add' component={AdminBlog} />
      <Route path='/admin/blog_list' component={AdminBlogList} />
      <Route path='/admin/blog_list/:key' component={AdminBlogDetail} />

      <Route path='/admin/diary_list' component={AdminDiaryList} />
      <Route path='/admin/diary_add' component={AdminDiary} />
      <Route path='/admin/message' component={AdminMsg} />
      <Route path='/admin/personal' component={AdminPersonal} />
    </Route>
  </Router>


export default routes;