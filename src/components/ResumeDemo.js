import React, { Component } from 'react'
import { Row, Col, Progress } from 'antd'
import '../assets/styles/resume.less'


export default class ResumeDemo extends Component {


  render() {
    const {
      address='',
      birthday='',
      characterSummary = '',
      educations = [],
      habits='',
      job='',
      languages = [],
      mail='',
      name='',
      phone='',
      photo='',
      projects = [],
      skillSummary = '',
      skills = [],
      works = []
    } = this.props.data

    const skillSummarys = skillSummary.split('。')
    const characterSummarys = characterSummary.split('。')

    return (
      <Row className="resume" justify='center' align='middle'>
        <Col xxl={this.props.xxl} xl={this.props.xl} lg={this.props.lg} md={this.props.md} className='resume-outer'>
          <Row className='resume-inner'>
            <Col xxl={5} xl={6} lg={6} md={7} className='inner-left'>
              <Row className='touxiang' justify='center' align='middle'>
                <img src={photo} alt="" width="150px" />
              </Row>
              {/* 基本信息 */}
              <Row className="introduction">
                <Col span={24}><h2>基本信息</h2></Col>
                <Col span={24}>
                  <p><i className='iconfont icon-rili' /><span>{birthday}</span></p>
                </Col>
                <Col span={24}>
                  <p><i className='iconfont icon-shouji' /><span>{phone}</span></p>
                </Col>
                <Col span={24}>
                  <p><i className='iconfont icon-youxiang' /><span>{mail}</span></p>
                </Col>
                <Col span={24}>
                  <p><i className='iconfont icon-dizhi' /><span>{address}</span></p>
                </Col>
              </Row>
              {/* 基本技能 */}
              <Row className="skill">
                <Col span={24}><h2>基本技能</h2></Col>
                {
                  skills.map((val, key) => {
                    return (
                      <Col span={24} key={key}>
                        <div className='skill-item'>
                          <p>{val.type}</p>
                          <Progress percent={val.score} showInfo={false} style={{ width: '120px' }} />
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
              {/* 语言能力 */}
              <Row className='habits'>
                <Col span={24}><h2>语言能力</h2></Col>
                <Col span={24}>
                  {
                    languages.map((val, key) => {
                      return <p key={key}>{val}</p>
                    })
                  }
                </Col>
              </Row>
              {/* 兴趣爱好 */}
              <Row className='habits'>
                <Col span={24}><h2>兴趣爱好</h2></Col>
                <Col span={24}><span>{habits}</span></Col>
              </Row>
            </Col>
            <Col xxl={19} xl={18} lg={18} md={17} className='inner-right'>
              {/* 求职目标 */}
              <Row className='title'>
                <Col span={24}>
                  <p className='f-title'>{name}</p>
                </Col>
                <Col span={24}>
                  <h2>求职目标：{job}</h2>
                </Col>
              </Row>
              {/* 教育经历 */}
              <Row className='education item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-jiaoyu' />教育经历</h1>
                </Col>
                {
                  educations.map((val, key) => {
                    return (
                      <Col span={24} key={key}>
                        <h2>{val.school}</h2>
                        <p style={{ fontSize: "16px" }}>
                          <span style={{ marginRight: '30px' }}>{val.college}-{val.major}-{val.degree}</span>
                          <span>{val.eduStartTime} - {val.eduEndTime}</span>
                        </p>
                        <p style={{ fontSize: "16px" }}>
                          <span>{val.eduDes}</span>
                        </p>
                      </Col>
                    )
                  })
                }
              </Row>
              {/* 项目经历 */}
              <Row className='project item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-xiangmu' />项目经历</h1>
                </Col>
                {
                  projects.map((val, key) => {
                    return (
                      <Col key={key} span={24} style={{ marginTop: "10px" }}>
                        <h2>{val.proName} | {val.proStartTime} - {val.proEndTime} | {val.proRole}</h2>
                        <ul>
                          <li style={{ fontSize: "16px" }}><strong>技术栈：</strong>{val.skillStack}</li>
                          <li style={{ fontSize: "16px" }}><strong>项目描述：</strong>{val.proDes}</li>
                          <li style={{ fontSize: "16px" }}><strong>项目成果：</strong>{val.proRes}</li>
                        </ul>
                      </Col>
                    )
                  })
                }
              </Row>
              {/* 工作经历 */}
              <Row className='work item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-gongzuo' />工作经历</h1>
                </Col>
                {
                  works.map((val, key) => {
                    return (
                      <Col key={key} span={24} style={{ marginTop: "10px" }}>
                        <h2>{val.company}</h2>
                        <p style={{ fontSize: "16px" }}>
                          <span style={{ marginRight: '30px' }}>{val.workDepart} - {val.workPosition}</span>
                          <span>{val.workStartTime} - {val.workEndTime}</span>
                        </p>
                        <p style={{ fontSize: "16px" }}>
                          <span>{val.workDes}</span>
                        </p>
                      </Col>
                    )
                  })
                }
              </Row>
              {/* 个人总结 */}
              <Row className='person item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-geren' />个人总结</h1>
                </Col>
                <Col span={24} style={{ marginTop: "10px" }}>
                  <h2>专业技能</h2>
                  <ul style={{ fontSize: "16px" }}>
                    {
                      skillSummarys.map((val, key) => {
                        return val ? <li key={key}>{val}。</li> : ''
                      })
                    }
                  </ul>
                </Col>
                <Col span={24} style={{ marginTop: "10px" }}>
                  <h2>性格倾向</h2>
                  <ul style={{ fontSize: "16px" }}>
                    {
                      characterSummarys.map((val, key) => {
                        return val ? <li key={key}>{val}。</li> : ''
                      })
                    }
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
