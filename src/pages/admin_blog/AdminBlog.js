import React, { Component } from 'react'
import { message } from 'antd'
import 'react-quill/dist/quill.snow.css';
import '../../assets/styles/adminBlog.less'
import { addBlog } from '../../services/admin_blog.js'
import BlogDetail from './BlogDetail'

export default class AdminBlog extends Component {
  state = {
    formData: {},
    content: '',
    cover: ''
  }


  changeCover = filename => {
    this.setState({
      cover: filename
    })
  }

  changeContent = content => {
    this.setState({ content })
  }

  onFinish = data => {
    addBlog(data).then(res => {
      console.log(res)
      message.success(res.msg)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return <BlogDetail onFinish={this.onFinish} />
  }
}
