import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { hashHistory } from 'react-router'
import '../../assets/styles/login.less'
import Logo from '../../assets/imgs/admin_logo1.png'
import { login } from '../../services/admin_login.js'
import cookie from 'react-cookies'


export default class Login extends Component {
  state = {
    user: {}
  }

  onFinish(form) {
    let { username, password, remember } = form
    login({ username, password }).then(res => {
      cookie.save('myblog_token', res.data.token)
      if (remember) {
        localStorage.setItem('myblog', JSON.stringify({ username, password }))
      }
      message.success(res.msg)
      hashHistory.push('/admin/resume_list')
    }).catch(err => {
      console.log(err)
    })
  }

  onFinishFailed() {
    message.error('请检查用户名或密码！')
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('myblog')) || { username: '', password: '' }
    this.setState({
      user
    })
  }


  render() {
    return (
      <div className='login'>
        <Row className='out' justify='center' align='middle'>
          <Col flex={12} className='col-item' />
          <Col flex={2} className='col-item' justify='center' align='middle'>
            <div className='login-form'>

              {/* 标题 */}
              <p>
                <img src={Logo} alt="logo" />
                管理员登录
              </p>

              {/* 登录表单 */}
              <Form
                wrapperCol={24}
                name="loginForm"
                initialValues={{
                  username: this.state.user.username,
                  password: this.state.user.password,
                  remember: true
                }}
                onFinish={this.onFinish.bind(this)}
                onFinishFailed={this.onFinishFailed.bind(this)}
              >
                {/* 用户名 */}
                <Form.Item
                  name='username'
                  rules={[{ required: true, message: '请输入用户名！' }]}
                >
                  <Input
                    allowClear
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                  />
                </Form.Item>

                {/* 密码 */}
                <Form.Item
                  name='password'
                  rules={[{ required: true, message: '请输入密码！' }]}
                >
                  <Input.Password
                    allowClear
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="密码"
                  />
                </Form.Item>

                {/* 按钮 */}
                <Row>
                  <Col flex={1}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col flex={1}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col flex={2} className='col-item' />
        </Row>
      </div>
    )
  }
}
