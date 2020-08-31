import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Button, Row, Col } from 'antd'
import { ArrowLeftOutlined, ClockCircleOutlined, TagOutlined /*, CommentOutlined, EyeOutlined*/ } from '@ant-design/icons';
import { getOneBlog } from '../../services/blog.js'

export default class BlogDetail extends Component {

  state = {
    blogDetail: {}
  }

  handleGetOneBlog() {
    getOneBlog(this.props.params.key).then(res => {
      this.setState({
        blogDetail: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handleGetOneBlog()
  }


  onClick() {
    hashHistory.goBack()
  }

  render() {
    const {
      // key, importance, commentsNum, viewsNum,
      title, original, type, cover, content, date, describe
    } = this.state.blogDetail

    return (
      <Row style={{ backgroundColor: '#fff', boxShadow: "2px 2px 2px #7c484833" }}>
        <Col span={24}>
          <Button style={{ fontSize: '20px' }} type='link' icon={<ArrowLeftOutlined />} onClick={this.onClick}>返回</Button>
        </Col>
        <Col span={24} style={{ marginTop: '10px', padding: '10px 50px 50px' }}>
          <Row justify='center' align='middle'>
            <h2>【{original}】{title}</h2>
          </Row>
          <Row justify='center' align='middle' style={{ marginTop: '10px' }}>
            <span style={{ marginRight: '20px' }} >
              <TagOutlined /> {type}
            </span>
            <span style={{ marginRight: '20px' }}>
              <ClockCircleOutlined /> {date}
            </span>
            {/* <span style={{ marginRight: '20px' }} >
              <CommentOutlined /> {commentsNum}
            </span>
            <span>
              <EyeOutlined /> {viewsNum}
            </span> */}
          </Row>
          <Row justify='center' align='middle' style={{ marginTop: '10px' }}>
            <img src={cover} alt="cover" width={200} />
          </Row>
          <Row style={{ backgroundColor: '#f8f9f7', marginTop: '10px', textIndent: '2em', padding: '10px', borderLeft: '3px solid #6bc30d' }}>
            <span>
              <strong>文章概述：</strong>
              {describe}
            </span>
          </Row>
          <Row style={{ marginTop: '10px', textIndent: '2em', padding: '10px' }}>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </Row>
          <Row style={{ backgroundColor: '#f8f9f7', marginTop: '10px', padding: '10px', borderLeft: '3px solid #6bc30d' }}>
            <Col span={24}>非特殊说明：本文版权归 LF 个人博客所有，转载请注明出处。</Col>
            <Col span={24}>本文标题：{title}</Col>
            <Col span={24}>本文网址：https://www.lifeng.space</Col>
          </Row>
        </Col>
        {/* <Col span={24}>
          评论
        </Col> */}
      </Row>
    )
  }
}
