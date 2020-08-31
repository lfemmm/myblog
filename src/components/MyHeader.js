import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import Logo from '../assets/imgs/admin_logo1.png'
import TouXiang from '../assets/imgs/touxiang.jpg'
import '../assets/styles/myHeader.less'
import { Link } from 'react-router'


export default class MyHeader extends Component {
  state = {
    current: '',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const selectedKey = this.props.route.split('/').pop()
    return (
      <Row className='my-header'>
        <Col span={4} offset={4} justify='center' align='middle' className='my-header-logo'>
          <img src={Logo} alt="" height={40} />
        </Col>
        <Col span={8} offset={2} className='my-header-menu'>
          <Menu onClick={this.handleClick} selectedKeys={selectedKey} mode="horizontal">
            <Menu.Item key="home">
              <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/other/blog">博客</Link>
            </Menu.Item>
            <Menu.Item key="resume">
              <Link to="/other/resume">简历</Link>
            </Menu.Item>
            <Menu.Item key="diary">
              <Link to="/other/diary">日记</Link>
            </Menu.Item>
            <Menu.Item key="messageboard">
              <Link to="/other/messageboard">留言</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2} className='my-header-touxiang'>
          <Link to="/login">
            <img src={TouXiang} alt="" height={40} width={40}/>
          </Link>
        </Col>
      </Row>
    )
  }
}
