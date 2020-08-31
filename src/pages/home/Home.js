import React, { Component } from 'react'
import '../../assets/styles/home.less'
import { Row, Col, Button } from 'antd'
import HomeMenu from './HomeMenu'
import '../../assets/font/iconfont.css'
import { hashHistory} from 'react-router'

export default class Home extends Component {

  render() {
    return (
      <Row className="home">
        <HomeMenu />
        <Col span={24} className="top">
          <Row className='top-header'>
            <Col className='top-header-title' span={24} align='middle' justify='center'>LF</Col>
            <Col className='top-header-des' span={24} align='middle' justify='center'>只要朝着一个方向努力，一切都会变得得心应手。</Col>
            <Col span={24} align='middle' justify='center'>
              {/* <Button type='primary' style={{ marginRight: 20 }} onClick={()=> hashHistory.push('/other/resume')}>个人简历</Button> */}
              <Button type='primary' onClick={()=> hashHistory.push('/other/blog')}>进入博客</Button>
            </Col>
          </Row>
        </Col>
      </Row >
    )
  }
}
