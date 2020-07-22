import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../assets/styles/homeItem.less'

export default class HomeItem extends Component {
  render() {
    return (
      <Col
        className='home-item'
        span={8}
        align='middle'
        justify='center'
      >
        <Row className='item-img'>
          <img src={require('../assets/imgs/'+this.props.val.src)} alt={this.props.alt} />
        </Row>
        <Row className='item-content'>
          <Col span={24} align='left'><h2>{this.props.val.title}</h2></Col>
          <Col span={24} align='left'><p>{this.props.val.date}</p></Col>
          <Col span={24} align='left'><p>{this.props.val.des}</p></Col>
          <Col span={24} align='left'><a href="###">阅读更多</a></Col>
        </Row>
      </Col>
    )
  }
}
