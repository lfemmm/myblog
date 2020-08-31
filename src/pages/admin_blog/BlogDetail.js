import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Radio } from 'antd'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../assets/styles/adminBlog.less'
import MyUpload from '../../components/MyUpload'

const { TextArea } = Input;

export default class BlogDetail extends Component {
  state = {
    formData: this.props.blogDetail,
    content: '',
    cover: ''
  }

  changeCover = cover => {
    let formData = Object.assign({},this.state.formData,{cover})
    this.setState({ formData })
  }

  changeContent = content => {
    let formData = Object.assign({},this.state.formData,{content})
    this.setState({ formData })
  }

  onFinish = data => {
    let formData = Object.assign({},this.state.formData,data)
    this.props.onFinish(formData)
  }

  render() {
    const {
      title='',
      cover='',
      describe='',
      content='',
      importance='',
      original='',
      type=''
    } = this.props.blogDetail || {}
    return (
      <Row>
        <Col xxl={16} xl={18} lg={20} md={22} xs={24}>
          <Form
            name="control-hooks"
            onFinish={this.onFinish}
            labelCol={{ xxl: 3, xl: 4, lg: 5, md: 5, xs: 6 }}
            wrapperCol={{ xxl: 12, xl: 14, lg: 16, md: 17, xs: 18 }}
            initialValues={{
              title,describe,importance,original,type
            }}
          >
            <Form.Item
              name="title"
              label="标题"
              rules={[{ required: true, message: '请输入标题！' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="original"
              label="原创"
              rules={[{ required: true, message: '请选择是否原创！' }]}
            >
              <Radio.Group>
                <Radio value='原创'>原创</Radio>
                <Radio value='转载'>转载</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="importance" label="置顶" >
              <Radio.Group>
                <Radio value={0}>0</Radio>
                <Radio value={1}>1</Radio>
                <Radio value={2}>2</Radio>
                <Radio value={3}>3</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="type"
              label="分类"
              rules={[{ required: true, message: '请选择分类！' }]}
            >
              <Radio.Group>
                <Radio value='Web'>Web</Radio>
                <Radio value='Java'>Java</Radio>
                <Radio value='Python'>Python</Radio>
                <Radio value='AutoML'>AutoML</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="封面" >
              <MyUpload action="/api/blog/upload" onChange={this.changeCover} imgUrl={cover}/>
            </Form.Item>
            <Form.Item label="描述" name="describe" rules={[{ required: true, message: '请填写文章描述！' }]}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="内容">
              <ReactQuill onChange={this.changeContent} defaultValue={content}/>
            </Form.Item>
            <Form.Item wrapperCol={{ xxl: { offset: 3 }, xl: { offset: 4 }, lg: { offset: 5 }, md: { offset: 5 }, xs: { offset: 6 } }}>
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}
