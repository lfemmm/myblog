import React, { Component } from 'react'
import { Row, Col, Form, Button, message, Radio } from 'antd'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addDiary } from '../../services/admin_diary.js'
import MyUpload from '../../components/MyUpload'

export default class AdminDiary extends Component {
  state = {
    formData: {
      cover: 'this is diary cover',
      content: 'this is diary content'
    },
    cover: '',
    content: '',
  }

  changeCover = filename => {
    this.setState({
      cover: filename
    })
  }

  changeContent = content => {
    this.setState({ content })
  }

  onFinish = (data) => {
    let formData = Object.assign({}, data, { content: this.state.content, cover: this.state.cover })
    addDiary(formData).then(res => {
      message.success(res.msg)
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Row>
        <Col xxl={16} xl={18} lg={20} md={22} xs={24}>
          <Form
            name="control-hooks"
            onFinish={this.onFinish}
            labelCol={{ xxl: 3, xl: 4, lg: 5, md: 5, xs: 6 }}
            wrapperCol={{ xxl: 12, xl: 14, lg: 16, md: 17, xs: 18 }}
          >
            <Form.Item label="封面">
              <MyUpload action="/api/diary/upload" onChange={this.changeCover} />
            </Form.Item>
            <Form.Item
              name="show"
              label="展示"
              rules={[{ required: true, message: '请选择是否展示出去！' }]}
            >
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="内容">
              <ReactQuill onChange={this.changeContent} />
            </Form.Item>
            <Form.Item wrapperCol={{ xxl: { offset: 3 }, xl: { offset: 4 }, lg: { offset: 5 }, md: { offset: 5 }, xs: { offset: 6 } }}>
              <Button type="primary" htmlType="submit">发表日记</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}
