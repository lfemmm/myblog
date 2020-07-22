import React, { Component } from 'react'
import '../assets/styles/homeFoot.less'
import { Row, Col, Button } from 'antd'
import '../assets/font/iconfont.css'

export default class HomeFoot extends Component {
  render() {
    return (
      <>
        <Row className='foot-header'>
          <Col span={8}>
            <h2>终是双曲线</h2>
            <p>hahahahahahaha</p>
            <Button type='primary' size='large'>About Me</Button>
          </Col>
          <Col span={8}>
            <h2>相关链接</h2>
            <Row>
              <Col span={12}>
                <p><i className='iconfont icon-toujianli' /><span>简历</span></p>
                <p><i className='iconfont icon-bokexinwen' /><span>博文</span></p>
                <p><i className='iconfont icon-github' /><span>github</span></p>
              </Col>
              <Col span={12}>
                <p><i className='iconfont icon-liuyan' /><span>留言</span></p>
                <p><i className='iconfont icon-miao' /><span>日志</span></p>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <h2>联系我</h2>
            <p><i className='iconfont icon-qq' /><span>783898950</span></p>
            <p><i className='iconfont icon-youxiang' /><span>783898950@qq.com</span></p>
            <p><i className='iconfont icon-dizhi' /><span>西南石油大学</span></p>
          </Col>
        </Row>
        <Row className='foot-foot' justify='center' align='middle'>
          Copyright © 2019-2020 LF个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号
        </Row>
      </>
    )
  }
}
