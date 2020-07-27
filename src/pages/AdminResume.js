import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Upload, Collapse, message, Slider, InputNumber, Checkbox } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import '../assets/styles/adminResume.less'

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


export default class AdminResume extends Component {
  state = {
    inputValue: 0,
    loading: false,
    // 基本信息
    photo: '....',
    birthday: '1993-10-10',
    phone: '18080046421',
    mail: '783898950@qq.com',
    address: '西南石油大学',
    skill: [
      { type: 'html', score: 0.8 },
      { type: 'css', score: 0.6 },
      { type: 'js', score: 0.6 },
    ],
    language: 'CET-4',
    habits: ['篮球', '乒乓球'],

    name: '黎峰',
    job: '前端开发工程师',

    // 教育经历
    education: [
      { school: '', college: "", major: '', schoolTime: "", eduDes: "" }
    ],

    // 项目经历
    project: [
      { proName: '', proTime: "", proRole: "", skillStack: "", proDes: "", proRes: "" }
    ],

    // 工作经历 
    work: [
      { company: '', workDepart: "", workPosition: "", workTime: "", workDes: "" }
    ],

    // 个人总结
    skillSummary: [
      '熟悉Javasript，HTML，CSS，Vue，React，ECharts，Element-ui，Antd等前端技术，有大型后台管理系统的开发经验。',
    ],
    characterSummary: [
      '热爱互联网行业，有较丰富的项目经验。',
    ]
  }

  // 上传图片函数 - 基本信息
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }

  // 滑动输入条 - 基本技能
  onChange = (num, value) => {
    if (isNaN(value)) {
      return;
    }
    let skill = this.state.skill
    skill[num].score = value
    this.setState({
      skill
    });
  }

  // 复选框 - 其他能力
  onChangeCheckBox = e => {
    console.log(`checked = ${e.target.checked}`);
  }

  // 提交表单
  onFinish = data => {
    console.log(data);
  }

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl, skill } = this.state;

    return (
      <Row justify='center'>
        <Col xxl={14} xl={18} lg={24} md={24} className="resume">
          <Form
            className="form"
            // form={form}
            name="register"
            onFinish={this.onFinish}
            initialValues={{}}
            scrollToFirstError
            // layout='inline'
            labelCol={{ span: 6 }}
          >
            <Collapse defaultActiveKey={['other']} onChange={callback} accordion>
              <Panel header="基本信息" key="basis" className='basis'>
                <Row>
                  <Col span={12}>
                    <Form.Item label='姓名' name='name'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='求职意向' name='job'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='出生时间' name='birthday'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='电话' name='phone'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='邮箱' name='mail'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='地址' name='address'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='证件照' name='photo'>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={this.beforeUpload}
                        onChange={this.handleChange}
                      >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
              <Panel header="基本技能" key="skill">
                <Form.Item label='HTML' name='html' labelCol={{ span: 3 }}>
                  <Row style={{ width: '100%' }}>
                    <Col span={16}>
                      <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange.bind(this, 0)}
                        value={typeof skill[0].score === 'number' ? skill[0].score : 0}
                        step={0.01}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={1}
                        style={{ margin: '0 16px' }}
                        step={0.01}
                        value={skill[0].score}
                        onChange={this.onChange.bind(this, 0)}
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item label='CSS' name='css' labelCol={{ span: 3 }}>
                  <Row style={{ width: '100%' }}>
                    <Col span={16}>
                      <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange.bind(this, 1)}
                        value={typeof skill[1].score === 'number' ? skill[1].score : 0}
                        step={0.01}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={1}
                        style={{ margin: '0 16px' }}
                        step={0.01}
                        value={skill[1].score}
                        onChange={this.onChange.bind(this, 1)}
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item label='JavaScript' name='js' labelCol={{ span: 3 }}>
                  <Row style={{ width: '100%' }}>
                    <Col span={16}>
                      <Slider
                        min={0}
                        max={1}
                        onChange={this.onChange.bind(this, 2)}
                        value={typeof skill[2].score === 'number' ? skill[2].score : 0}
                        step={0.01}
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={0}
                        max={1}
                        style={{ margin: '0 16px' }}
                        step={0.01}
                        value={skill[2].score}
                        onChange={this.onChange.bind(this, 2)}
                      />
                    </Col>
                  </Row>
                </Form.Item>
              </Panel>
              <Panel header="其他能力" key="other">
                <Row>
                  <Col span={6} >
                    <Form.Item name='cet4' label='语言能力' labelCol={{span:12}}>
                      <Checkbox onChange={this.onChangeCheckBox}>CET-4</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='cet6'>
                      <Checkbox onChange={this.onChangeCheckBox}>CET-6</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='yasi'>
                      <Checkbox onChange={this.onChangeCheckBox}>雅思</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='tuofu'>
                      <Checkbox onChange={this.onChangeCheckBox}>托福</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={6} >
                    <Form.Item name='basketball' label='兴趣爱好' labelCol={{span:12}}>
                      <Checkbox onChange={this.onChangeCheckBox}>篮球</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='run'>
                      <Checkbox onChange={this.onChangeCheckBox}>跑步</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='game'>
                      <Checkbox onChange={this.onChangeCheckBox}>游戏</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item name='otherHabits'>
                      <Checkbox onChange={this.onChangeCheckBox}>其他</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
              <Panel header="教育经历" key="education">教育经历</Panel>
              <Panel header="项目经历" key="project">项目经历</Panel>
              <Panel header="工作经历" key="work">工作经历</Panel>
              <Panel header="个人总结" key="summary">个人总结</Panel>
            </Collapse>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    )
  }
}
