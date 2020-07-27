import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import Logo from '../assets/imgs/admin_logo1.png'
import TouXiang from '../assets/imgs/touxiang.jpg'
import '../assets/styles/myHeader.less'


export default class MyHeader extends Component {
  state = {
    current: '',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };


  componentDidMount() {
    let routesArr = this.props.route
    this.setState({
      current: routesArr[routesArr.length - 1].path
    })
  }



  render() {
    const { current } = this.state;
    return (
      <Row className='my-header'>
        <Col span={4} offset={4} justify='center' align='middle' className='my-header-logo'>
          <img src={Logo} alt="" height={40} />
        </Col>
        <Col span={8} offset={2} className='my-header-menu'>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home">
              <a href="#/home">首页</a>
            </Menu.Item>
            <Menu.Item key="resume">
              <a href="#/other/resume">简历</a>
            </Menu.Item>
            <Menu.Item key="blog">
              <a href="#/other/blog">博客</a>
            </Menu.Item>
            <Menu.Item key="diary">
              <a href="#/other/diary">日记</a>
            </Menu.Item>
            <Menu.Item key="messageboard">
              <a href="#/other/messageboard">留言</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={2} className='my-header-touxiang'>
          <a href="#/login">
            <img src={TouXiang} alt="" height={40} width={40}/>
          </a>
        </Col>
      </Row>
    )
  }
}
