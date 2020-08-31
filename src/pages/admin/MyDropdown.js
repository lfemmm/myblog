import React, { Component } from 'react'
import { Menu, message, Avatar, Dropdown, Badge, Button } from 'antd';
import cookie from 'react-cookies'
import AvatarPhoto from '../../assets/imgs/touxiang.jpg'
import { hashHistory, Link} from 'react-router'


export default class MyDropdown extends Component {
  state = {
    collapsed: false,
    activeKey: '',
    panes: [],
    initSelectKey: ''
  }

  handleClickDownMenu(page, title='') {
    if (page === 'logout') {
      cookie.remove('myblog_token')
      hashHistory.push('/login')
      message.success('退出成功')
    } else {
      this.props.add(title, page)
    }
  }


  render() {
    const avatarMenus = (
      <Menu>
        <Menu.Item key="blog_list">
          <Button type='link' onClick={this.handleClickDownMenu.bind(this, 'blog_list', '博客列表')}>
            博客列表
            <Badge count={55} overflowCount={99} offset={[2, -20]}></Badge>
          </Button>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="message">
          <Button type='link' onClick={this.handleClickDownMenu.bind(this, 'message', '留言管理')}>
            留言板
            <Badge count={45} overflowCount={99} offset={[2, -20]}></Badge>
          </Button>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Button type='link' onClick={this.handleClickDownMenu.bind(this, 'logout')}>注销</Button>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={avatarMenus} trigger={['click']} arrow>
        <Badge count={100} overflowCount={99}>
          <Link className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar src={AvatarPhoto} size={50} />
          </Link>
        </Badge>
      </Dropdown>
    )
  }
}
