import React, { Component } from 'react'
import { Button, message } from 'antd'
import 'react-quill/dist/quill.snow.css';
import '../../assets/styles/adminBlog.less'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import {updateBlog} from '../../services/admin_blog.js'
import BlogDetail from './BlogDetail'
import AdminBlogList from './AdminBlogList'


export default class AdminBlogDetail extends Component {
  state = {
    blogDetail: {}
  }

  static contextTypes = {
    changePanes: PropTypes.func
  }

  onClick = () => {
    hashHistory.goBack()
    this.context.changePanes('blog_list', <AdminBlogList />)
  }

  onFinish = data => {
    console.log(data);
    data.cover = data.cover.split('/').pop()
    updateBlog(data).then(res=>{
      message.success(res.msg)
      this.onClick()
    }).catch(err =>{
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <Button type='link' onClick={this.onClick}>返回</Button>
        <BlogDetail  onFinish={this.onFinish} blogDetail={this.props.data} />
      </>
    )
  }
}
