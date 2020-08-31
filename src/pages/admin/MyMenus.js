import React, { Component } from 'react'

import { Menu } from 'antd';
import {
  UserOutlined,
  AuditOutlined,
  ScheduleOutlined,
  ProfileOutlined,
  CommentOutlined
} from '@ant-design/icons';
import '../../assets/styles/administration.less'
const { SubMenu } = Menu;

const menus = [
  {
    key: 'resume', icon: <AuditOutlined />, title: '个人简历', children: [
      { key: 'resume_add', title: '新增简历' },
      { key: 'resume_list', title: '简历列表', routes: ['resume_list', 'resume_list/detail'] }
    ]
  },
  {
    key: 'blog', icon: <ProfileOutlined />, title: '个人博客', children: [
      { key: 'blog_add', title: '新增博客' },
      { key: 'blog_list', title: '博客列表' }
    ]
  },
  {
    key: 'diary', icon: <ScheduleOutlined />, title: '个人日记', children: [
      { key: 'diary_add', title: '新增日记' },
      { key: 'diary_list', title: '日记列表' }
     
    ]
  },
  { key: 'message', icon: <CommentOutlined />, title: '留言管理', children: [] },
  { key: 'personal', icon: <UserOutlined />, title: '个人信息', children: [] }
]

export default class MyMenus extends Component {
  state = {
    initSelectKey: ''
  }

  UNSAFE_componentWillMount() {
    this.props.add('博客列表', 'blog_list')
  }

  selectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    this.props.add(item.props.title, key)
  }

  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={[this.state.initSelectKey]} mode="inline" onSelect={this.selectMenu}>
        {menus.map(val => {
          return (
            val.children.length > 0
              ? <SubMenu key={val.key} icon={val.icon} title={val.title}>
                {val.children.map(val => {
                  return <Menu.Item key={val.key} title={val.title}>{val.title}</Menu.Item>
                })}
              </SubMenu>
              : <Menu.Item key={val.key} icon={val.icon} title={val.title}>{val.title}</Menu.Item>
          )
        })}
      </Menu>
    )
  }
}
