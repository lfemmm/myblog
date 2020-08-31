import React, { Component } from 'react'
import { Row, Col, Tag, Button } from 'antd'
import '../../assets/styles/blogItem.less'
import '../../assets/font/iconfont.css'
import { Link } from 'react-router'

import { TagOutlined, CommentOutlined, EyeOutlined } from '@ant-design/icons';

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
  bottom: 45,
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
    const {
      commentsNum,
      cover,
      date,
      describe,
      importance,
      key,
      original,
      title,
      type,
      viewsNum
    } = this.props.data

    const [year, month, day] = (date.split(" ")[0]).split('-')

    return (
      <Row className='blog-item'>
        <div style={blogDateStyle}>
          <span style={blogDayStyle}>{day}</span>
          <span style={blogMYStyle}>{month}</span>
          <span style={blogMYStyle}>{year}</span>
        </div>
        <Row className='blog-title'>
          {
            importance > 0 ?
              <h3 className='blog-importance' >【置顶】</h3> : ''
          }
          <h3 className='blog-original'>【{original}】</h3>
          <Link>
            <h3 onClick={() => this.props.onClick(key)}>
              {title}
            </h3>
          </Link>
        </Row>
        <Row className='blog-content'>
          <Col span={6}>
            <img src={cover} alt={'cover'} width="100%" />
          </Col>
          <Col span={18} style={{ padding: '0 20px' }}>
            <span dangerouslySetInnerHTML={{ __html: describe }} />
          </Col>
        </Row>
        <div style={readMoreStyle}>
          <Button type='link' style={{ padding: 0 }} onClick={() => this.props.onClick(key)}>继续阅读</Button>
        </div>
        <Row className='blog-footer'>
          <Col span={18}>
            <Tag color="magenta" icon={<TagOutlined />}>{type}</Tag>
          </Col>
          <Col span={6}>
            <EyeOutlined />
            <span>{viewsNum}</span>
            <CommentOutlined />
            <span>{commentsNum}</span>
          </Col>
        </Row>
      </Row>
    )
  }
}
