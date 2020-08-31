import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import BlogMenu from './BlogMenu'
import '../../assets/styles/blog.less'
import { getBlogList, getBlogTypes, getLastThreeBlogs } from '../../services/blog.js'
import { hashHistory } from 'react-router'

export default class Blog extends Component {
  state = {
    blogList: this.context.blogList || [],
    blogTypes: [],
    lastThreeBlogs: [],
    keyWord: '',
    type: '',
    blogDetail: {}
  }

  static childContextTypes = {
    blogList: PropTypes.array,
    blogDetail: PropTypes.object
  }

  getChildContext() {
    return {
      blogList: this.state.blogList,
      blogDetail: this.state.blogDetail
    }
  }


  handleGetBlogList(query) {
    let queryData = Object.assign({}, { keyWord: '', type: '' }, query)
    getBlogList(queryData).then(res => {
      this.setState({
        blogList: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleGetBlogTypes() {
    getBlogTypes().then(res => {
      this.setState({
        blogTypes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  handleGetLastThreeBlogs() {
    getLastThreeBlogs().then(res => {
      this.setState({
        lastThreeBlogs: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.handleGetBlogList()
    this.handleGetBlogTypes()
    this.handleGetLastThreeBlogs()
  }

  onSearch = (keyWord) => {
    const pathname = this.props.location.pathname
    if (pathname.endsWith('list')) {
      this.handleGetBlogList({ keyWord })
    } else {
      this.handleGetBlogList({ keyWord })
      hashHistory.push('/other/blog/list')
    }
  }

  onClickMenu = (type) => {
    const pathname = this.props.location.pathname
    if (pathname.endsWith('list')) {
      this.handleGetBlogList({ type })
    } else {
      this.handleGetBlogList({ type })
      hashHistory.push('/other/blog/list')
    }
  }

  render() {
    return (
      <Row className='blog' justify='center'>
        <Col className='blog-list' span={12}>
          {this.props.children}
        </Col>
        <Col className='blog-other' span={4} style={{ marginLeft: '30px' }}>
          <BlogMenu
            types={this.state.blogTypes}
            lastThree={this.state.lastThreeBlogs}
            onSearch={this.onSearch}
            onClick={this.onClickMenu}
          />
        </Col>
      </Row>
    )
  }
}
