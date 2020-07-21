import React, { Component } from 'react'
import '../../assets/styles/home.less'
import { Row, Col, Layout, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout className="home">
        <Header className="top">
          <Row className='top-title' align='middle' justify='center'>LF-Blog</Row>
          <Row className='top-des' align='middle' justify='center'>只要朝着一个方向努力，一切都会变得得心应手</Row>
          <Row className='top-link' align='middle' justify='center'>
            <Button type='primary' style={{ marginRight: 20 }}>个人简历</Button>
            <Button type='primary'>个人博客</Button>
          </Row>
          <Row className='top-btn' align='bottom' justify='center'>
            <div style={{ width: 60, height: 60, borderRadius: '50%', textAlign: "center", lineHeight: "60px", color: '#fff' }}>
              <a href="#ddd"><DownOutlined /></a>
            </div>
          </Row>
        </Header>
        <Content className='middle' id='ddd'>
          Content1111111111111
        </Content>
        <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}
