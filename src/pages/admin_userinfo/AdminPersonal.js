import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, message } from 'antd'
import { getUserInfo, updateUserInfo } from '../../services/admin_userinfo.js'

const formItemLayout = {
  labelCol: {
    xxl: { span: 4 },
    xl: { span: 4 },
    lg: { span: 6 },
    md: { span: 6 },
    xs: { span: 6 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xxl: { span: 12 },
    xl: { span: 14 },
    lg: { span: 16 },
    md: { span: 18 },
    xs: { span: 18 },
    sm: { span: 16 }
  }
}
const githubLayout = {
  labelCol: {
    xxl: { span: 2 },
    xl: { span: 2 },
    lg: { span: 3 },
    md: { span: 3 },
    xs: { span: 3 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xxl: { span: 6 },
    xl: { span: 7 },
    lg: { span: 8 },
    md: { span: 21 },
    xs: { span: 21 },
    sm: { span: 20 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xxl: { span: 6, offset: 2 },
    xl: { span: 8, offset: 2 },
    lg: { span: 15, offset: 3 },
    md: { span: 12, offset: 3 },
    xs: { span: 14, offset: 3 },
    sm: { span: 16, offset: 4 },
  },
}

export default class AdminPersonal extends Component {
  formRef = React.createRef();
  
  state = {
    userInfo: {}
  }

  getUser = () => {
    getUserInfo().then(res => {
      this.setState({
        userInfo: res.data
      })
      message.success(res.msg)
      this.formRef.current.setFieldsValue(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getUser()
  }

  onFinish = values => {
    let user = Object.assign({}, values, { id: this.state.userInfo.id })
    updateUserInfo(user).then(res => {
      message.success(res.msg)
      if (res.data && res.data.isPassword) {
        this.props.router.push('/login')
      }
    })
  }



  render() {
    return (
      <Form
        {...formItemLayout}
        ref={this.formRef}
        name="submitForm"
        onFinish={this.onFinish}
        scrollToFirstError
      >

        <Row>
          <Col span={12}>
            <Form.Item name="name" label="姓名" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="phone" label="电话" >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item name="birthday" label="生日" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="wechat" label="微信" >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item name="nickname" label="昵称" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="qq" label="QQ" >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Form.Item name="address" label="地址" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="mail" label="邮箱" >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="github" label="github" {...githubLayout}>
          <Input />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Form.Item name="username" label="用户名" >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="password" label="密码">
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>

        {/* <Row>
          <Col span={12}>
            <Form.Item name="password" label="新密码">
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="confirm" label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    console.log(typeof value);
                    console.log(typeof getFieldValue('password'));
                    return Promise.reject('两次输入的密码必须一样！');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row> */}

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
}
