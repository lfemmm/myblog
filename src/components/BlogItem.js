import React, { Component } from 'react'
import { Row, Col } from 'antd'
import '../assets/styles/blogItem.less'
import '../assets/font/iconfont.css'

const blogDateStyle = { 
  width: 120, 
  height: 70, 
  lineHeight: '35px', 
  position: 'absolute', 
  right: 10, 
  top: 20, 
  padding: '0 20px 5px 20px', 
  backgroundColor: '#fff' 
}
const blogDayStyle = { 
  display: 'block', 
  textAlign: 'center', 
  color: '#6BC30D', 
  fontSize: '40px', 
  fontWeight: 700, 
  position: 'relative', 
  top: '2px' 
}
const blogMYStyle = { 
  textAlign: 'center', 
  fontSize: "18px", 
  marginRight: 10 
}
const readMoreStyle = { 
  width: 80, 
  height: 40, 
  position: 'absolute', 
  left: 20, 
  bottom: 40, 
  padding: '0', 
  backgroundColor: '#fff' 
}

export default class BlogItem extends Component {
  state = {
    data: this.props.data,
    year: '',
    month: '',
    day: ''
  }

  dealDate() {
    let date = this.state.data.date.split(" ")[0]
    let arr = date.split("-")
    this.setState({
      year: arr[0],
      month: arr[1],
      day: arr[2]
    })
  }

  componentDidMount() {
    this.dealDate()
  }

  render() {
    return (
      <Row className='blog-item'>
        <div style={blogDateStyle}>
          <span style={blogDayStyle}>{this.state.day}</span>
          <span style={blogMYStyle}>{this.state.month}</span>
          <span style={blogMYStyle}>{this.state.year}</span>
        </div>
        <Row className='blog-title'>
          <h3 className='blog-original'>【{this.state.data.original}】</h3><h3>{this.state.data.title}</h3>
        </Row>
        <Row className='blog-content'>
          <Col span={8}>
            <img src={require('../assets/imgs/' + this.state.data.src)} alt={this.state.data.src} width="100%" />
          </Col>
          <Col span={16} style={{ padding: '0 20px' }}>
            <p>{this.state.data.content}</p>
          </Col>
        </Row>
        <div style={readMoreStyle}>
          <a href="###">继续阅读</a>
        </div>
        <Row className='blog-footer'>
          <Col span={18}>
            <i className='iconfont icon-biaoqian'/>
            <span style={{backgroundColor:'#f1f2f0'}}>{this.state.data.type}</span>
          </Col>
          <Col span={6}>
            <i className='iconfont icon-chakan'/>
            <span>234</span>
            <i className='iconfont icon-pinglun'/>
            <span>2</span>
          </Col>
        </Row>
      </Row>
    )
  }
}
