import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Avatar, message, Popconfirm, Button } from 'antd';
import { getBlogList, deleteBlog } from '../../services/admin_blog.js'
import AvatarPhoto from '../../assets/imgs/touxiang.jpg'
import '../../assets/styles/adminBlogList.less'
import AdminBlogDetail from './AdminBlogDetail'
import { hashHistory } from 'react-router'

export default class AdminBlogList extends Component {
  state = {
    blogList: []
  }

  static contextTypes = {
    changePanes: PropTypes.func
  }

  handleGetBlogList() {
    getBlogList().then(res => {
      message.success(res.msg)
      this.setState({
        blogList: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handleGetBlogList()
  }

  confirmDeleteBlog = (key) => {
    console.log(key);
    deleteBlog(key).then(res => {
      console.log(res);
      message.success(res.msg)
      this.handleGetBlogList()
    }).catch(err => {
      console.log(err);
    })
  }


  onClick = (data) => {
    hashHistory.push(`/admin/blog_list/${data.key}`)
    setTimeout(() => {
      this.context.changePanes('blog_list', <AdminBlogDetail data={data} />)
    }, 1);
  }

  render() {
    return (
      <List
        className='admin-blog-list'
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={this.state.blogList}
        footer={
          <div>
            <strong>“深觉时光可惜，暮景可伤。”——— 陈模</strong>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.key}
            extra={
              <img
                width={200}
                alt="logo"
                src={item.cover}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={AvatarPhoto} />}
              title={
                <>
                  <span>
                    <h3>{item.title}</h3>
                    {item.date}
                  </span>
                  <Popconfirm placement="topLeft" title='真的要删除博客吗？真的吗？' onConfirm={() => this.confirmDeleteBlog(item.key)} okText="是的哟" cancelText="算了吧">
                    <Button type='link'>删除</Button>
                  </Popconfirm>
                  <Button type='link' onClick={() => this.onClick(item)}>查看</Button>
                </>
              }
            />
            <span className='admin-blog-list-describe' dangerouslySetInnerHTML={{ __html: item.describe }} />
          </List.Item>
        )}
      />
    )
  }
}
