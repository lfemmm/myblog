import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, message, Slider, InputNumber, Checkbox, Select, DatePicker, Tabs, Divider } from 'antd'
import '../../assets/styles/adminResume.less'
import moment from 'moment';
import { updateResume, getNewestResume } from '../../services/admin_resume.js'
import MyUpload from '../../components/MyUpload'

const { Option } = Select;
const { TextArea } = Input;
const { TabPane } = Tabs;

const languages = [
  { label: 'CET-4', value: 'CET-4' },
  { label: 'CET-6', value: 'CET-6' },
  { label: '雅思', value: '雅思' },
  { label: '托福', value: '托福' },
  { label: '其他', value: '其他' }
]


export default class AdminResume extends Component {
  formRef = React.createRef();

  state = {
    inputValue: 0,
    activeTabKey: 'basis',
    skills: [],
    // 基本信息
    resumeData: {
      photo: '',
      birthday: '',
      phone: '',
      mail: '',
      address: '',
      skills: [{ "type": "HTML", "score": 10 }],
      languages: [],
      habits: '',
      name: '',
      job: '',
      educations: [{ school: '', college: "", major: '', degree: '', eduStartTime: "", eduEndTime: "", eduDes: "" }],
      projects: [{ proName: '', proStartTime: "", proEndTime: "", proRole: "", skillStack: "", proDes: "", proRes: "" }],
      works: [{ company: '', workDepart: "", workPosition: "", workStartTime: "", workEndTime: "", workDes: "" }],
      skillSummary: '',
      characterSummary: ''
    },
    defaultLanguages: [],
    defaultSkills: [],
    defaultEducations: [],
    defaultProjects: [],
    defaultWorks: [],
    photo: ''
  }

  getNewest() {
    getNewestResume().then(res => {
      this.setState({
        resumeData: res.data,
        defaultLanguages: res.data.languages,
        defaultSkills: res.data.skills,
        defaultEducations: res.data.educations,
        defaultProjects: res.data.projects,
        defaultWorks: res.data.works,
      })
      message.success(res.msg)
      this.formRef.current.setFieldsValue(this.state.resumeData)
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getNewest()
  }

  objAssign = (data) => {
    let resumeData = Object.assign({}, this.state.resumeData, data)
    this.setState({
      resumeData
    });
  }


  // 上传图片函数 - 基本信息
  handleChangePhoto = filename => {
    this.setState({
      photo: filename
    })
  }

  // ****** 基本技能 ******
  // 滑动输入条 - 基本技能
  onChangeSlider = (id, value) => {
    if (isNaN(value)) {
      return;
    }
    let skills = this.state.resumeData.skills
    skills[id].score = value
    this.objAssign({ skills })
  }

  // ****** 其他能力 ******
  // 复选框
  onChangeCheckBox = val => {
    let resumeData = Object.assign({}, this.state.resumeData, { languages: val })
    this.setState({
      resumeData
    })
  }

  // ****** 教育经历 ******
  // 下拉框
  handleChangeEdu = (id, value) => {
    let educations = this.state.resumeData.educations
    educations[id].degree = value
    this.objAssign({ educations })
  }
  // 输入框
  onChangeInput = (id, type, name, e) => {
    let obj = {}
    obj[type] = this.state.resumeData[type]
    obj[type][id][name] = e.target.value
    this.objAssign(obj)
  }
  // 时间
  onChangeTime = (id, type, name, date, datestr) => {
    let obj = {}
    obj[type] = this.state.resumeData[type]
    obj[type][id][name] = datestr
    this.objAssign(obj)
  }


  // ****** 提交表单 ******
  onFinish = data => {
    let resumeData = Object.assign({}, this.state.resumeData, { ...data, photo: this.state.photo })
    updateResume(resumeData).then(res => {
      message.success(res.msg);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Row >
        <Col xxl={14} xl={18} lg={24} md={24} className="resume">
          <Form
            className="form"
            name="register"
            ref={this.formRef}
            onFinish={this.onFinish}
            initialValues={this.state.resumeData}
            scrollToFirstError
            labelCol={{ span: 6 }}
          >
            <Tabs
              hideAdd
              defaultActiveKey={"basis"}
              tabPosition="left"
            >
              <TabPane tab={"基本信息"} key={"basis"}>
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
                    <Form.Item name='habits' label='兴趣爱好'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='证件照' name='photo' style={{ height: '144px' }}>
                      <MyUpload action="/api/resume/upload" onChange={this.handleChangePhoto} />
                    </Form.Item>
                    <Form.Item label='邮箱' name='mail'>
                      <Input />
                    </Form.Item>
                    <Form.Item label='地址' name='address'>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab={"基本技能"} key={"skill"}>
                {
                  this.state.defaultSkills.map((val, id) => {
                    return (
                      <Form.Item key={id} label={val.type} labelCol={{ span: 3 }}>
                        <Row style={{ width: '100%' }}>
                          <Col span={16}>
                            <Slider
                              min={0}
                              max={100}
                              onChange={this.onChangeSlider.bind(this, id)}
                              value={typeof val.score === 'number' ? val.score : 0}
                              step={1}
                            />
                          </Col>
                          <Col span={4}>
                            <InputNumber
                              min={0}
                              max={100}
                              style={{ margin: '0 16px' }}
                              step={1}
                              value={val.score}
                              onChange={this.onChangeSlider.bind(this, id)}
                            />
                          </Col>
                        </Row>
                      </Form.Item>
                    )
                  })
                }

              </TabPane>

              <TabPane tab={"教育经历"} key={"education"}>
                {
                  this.state.defaultEducations.map((val, id) => {
                    return (
                      <div key={id}>
                        <Divider orientation="left"><strong>教育经历 {id + 1}</strong></Divider>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='学校' >
                              <Input defaultValue={val.school} onChange={this.onChangeInput.bind(this, id, 'educations', 'school')} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='学院'>
                              <Input defaultValue={val.college} onChange={this.onChangeInput.bind(this, id, 'educations', 'college')} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='专业'>
                              <Input defaultValue={val.major} onChange={this.onChangeInput.bind(this, id, 'educations', 'major')} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='学位'>
                              <Select defaultValue={val.degree} onChange={this.handleChangeEdu.bind(this, id)}>
                                <Option value="博士">博士</Option>
                                <Option value="硕士">硕士</Option>
                                <Option value="本科">本科</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='入学时间'>
                              <DatePicker
                                defaultValue={moment(val.eduStartTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'入学时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'educations', 'eduStartTime')}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='毕业时间'>
                              <DatePicker
                                defaultValue={moment(val.eduEndTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'毕业时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'educations', 'eduEndTime')}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item label='在校情况' labelCol={{ span: 3 }}>
                          <TextArea defaultValue={val.eduDes} onChange={this.onChangeInput.bind(this, id, 'educations', 'eduDes')} />
                        </Form.Item>
                      </div>
                    )
                  })
                }
              </TabPane>

              <TabPane tab={"项目经历"} key={"project"}>
                {
                  this.state.defaultProjects.map((val, id) => {
                    return (
                      <div key={id}>
                        <Divider orientation="left"><strong>项目经历 {id + 1}</strong></Divider>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='项目名称' >
                              <Input defaultValue={val.proName} onChange={this.onChangeInput.bind(this, id, 'projects', 'proName')} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='担任职位'>
                              <Input defaultValue={val.proRole} onChange={this.onChangeInput.bind(this, id, 'projects', 'proRole')} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='开始时间'>
                              <DatePicker
                                defaultValue={moment(val.proStartTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'开始时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'projects', 'proStartTime')}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='结束时间'>
                              <DatePicker
                                defaultValue={moment(val.proEndTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'结束时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'projects', 'proEndTime')}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item label='技术栈' labelCol={{ span: 3 }}>
                          <TextArea defaultValue={val.skillStack} onChange={this.onChangeInput.bind(this, id, 'projects', 'skillStack')} />
                        </Form.Item>
                        <Form.Item label='项目描述' labelCol={{ span: 3 }}>
                          <TextArea defaultValue={val.proDes} onChange={this.onChangeInput.bind(this, id, 'projects', 'proDes')} />
                        </Form.Item>
                        <Form.Item label='项目成果' labelCol={{ span: 3 }}>
                          <TextArea defaultValue={val.proRes} onChange={this.onChangeInput.bind(this, id, 'projects', 'proRes')} />
                        </Form.Item>
                      </div>
                    )
                  })
                }
              </TabPane>

              <TabPane tab={"工作经历"} key={"work"}>
                {
                  this.state.defaultWorks.map((val, id) => {
                    return (
                      <div key={id}>
                        <Divider orientation="left"><strong>工作经历 {id + 1}</strong></Divider>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='公司名称' >
                              <Input defaultValue={val.company} onChange={this.onChangeInput.bind(this, id, 'works', 'company')} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='所在部门' >
                              <Input defaultValue={val.workDepart} onChange={this.onChangeInput.bind(this, id, 'works', 'workDepart')} />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='职位' >
                              <Input defaultValue={val.workPosition} onChange={this.onChangeInput.bind(this, id, 'works', 'workPosition')} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                            <Form.Item label='开始时间'>
                              <DatePicker
                                defaultValue={moment(val.workStartTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'开始时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'works', 'workStartTime')}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item label='结束时间'>
                              <DatePicker
                                defaultValue={moment(val.workEndTime, 'YYYY-MM')}
                                picker="month"
                                allowClear
                                placeholder={'结束时间'}
                                style={{ width: '100%' }}
                                onChange={this.onChangeTime.bind(this, id, 'works', 'workEndTime')}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item label='工作描述' labelCol={{ span: 3 }}>
                          <TextArea defaultValue={val.workDes} onChange={this.onChangeInput.bind(this, id, 'works', 'workDes')} />
                        </Form.Item>
                      </div>
                    )
                  })
                }
              </TabPane>

              <TabPane tab={"个人总结"} key={"summary"}>
                <Form.Item label='语言能力' labelCol={{ span: 3 }}>
                  <Checkbox.Group
                    options={languages}
                    defaultValue={this.state.defaultLanguages}
                    onChange={this.onChangeCheckBox}
                  />
                </Form.Item>
                <Form.Item name='skillSummary' label='专业技能' labelCol={{ span: 3 }}>
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item name='characterSummary' label='性格倾向' labelCol={{ span: 3 }}>
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item name='updateContent' label='更新的内容' labelCol={{ span: 3 }}>
                  <TextArea rows={4} />
                </Form.Item>
              </TabPane>
            </Tabs>
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
