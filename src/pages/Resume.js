import React, { Component } from 'react'
import { Row, Col, Progress } from 'antd'
import '../assets/styles/resume.less'
import LF from '../assets/imgs/lifeng.jpg'
import '../assets/font/iconfont.css'
import BackToTop from '../components/BackToTop'


export default class Resume extends Component {

  handleClick = e => {
    console.log('click ', e);
  }

  render() {
    return (
      <Row className="resume" justify='center' align='middle'>
        <Col className='resume-outer'>
          <Row className='resume-inner'>
            <Col className='inner-left'>
              <Row className='touxiang' justify='center' align='middle'>
                <img src={LF} alt="" width="150px" />
              </Row>
              <Row className="introduction">
                <h2>基本信息</h2>
                <p><i className='iconfont icon-rili' /><span>1993-10-10</span></p>
                <p><i className='iconfont icon-shouji' /><span>18080046421</span></p>
                <p><i className='iconfont icon-youxiang' /><span>783898950@qq.com</span></p>
                <p><i className='iconfont icon-dizhi' /><span>西南石油大学</span></p>
              </Row>
              <Row className="skill">
                <h2>基本技能</h2>
                <div className='skill-item'>
                  <p>HTML</p>
                  <Progress percent={80} showInfo={false} style={{ width: '120px' }} />
                </div>
                <div className='skill-item'>
                  <p>CSS</p>
                  <Progress percent={60} showInfo={false} style={{ width: '120px' }} />
                </div>
                <div className='skill-item'>
                  <p>JavaScript</p>
                  <Progress percent={60} showInfo={false} style={{ width: '120px' }} />
                </div>
                <div className='skill-item'>
                  <p>Vue</p>
                  <Progress percent={60} showInfo={false} style={{ width: '120px' }} />
                </div>
                <div className='skill-item'>
                  <p>React</p>
                  <Progress percent={50} showInfo={false} style={{ width: '120px' }} />
                </div>
                <div className='skill-item'>
                  <p>Python</p>
                  <Progress percent={50} showInfo={false} style={{ width: '120px' }} />
                </div>
                {/* <div className='skill-item'>
                  <p>Mysql</p>
                  <Progress percent={60} showInfo={false} style={{ width: '120px' }} />
                </div> */}
              </Row>
              <Row className='habits'>
                <Col span={24}><h2>语言能力</h2></Col>
                <Col span={24}>
                  <span>CET-4</span>
                </Col>
              </Row>
              <Row className='habits'>
                <Col span={24}><h2>兴趣爱好</h2></Col>
                <Col span={24}>
                  <span><i className='iconfont icon-lanqiu' /></span>
                  <span><i className='iconfont icon-pingpangqiu' /></span>
                  <span><i className='iconfont icon-paobu' /></span>
                  <span><i className='iconfont icon-94' /></span>
                </Col>
                {/* <Col span={24}>
                  <span><i className='iconfont icon-paobu' /></span>
                  <span><i className='iconfont icon-94' /></span>
                </Col> */}
              </Row>
            </Col>
            <Col className='inner-right'>
              <Row className='title'>
                <Col span={24}>
                  <p className='f-title'>黎峰</p>
                </Col>
                <Col span={24}>
                  <h2>求职目标：前端开发工程师</h2>
                </Col>
              </Row>
              <Row className='education item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-jiaoyu' />教育经历</h1>
                </Col>
                <Col span={24}>
                  <h2>西南石油大学</h2>
                  <p style={{fontSize:"16px"}}>
                    <span style={{marginRight:'30px'}}>计算机科学学院-计算机技术（硕）</span>
                    <span>2018.09 - 2021.06</span>
                  </p>
                  <p style={{fontSize:"16px"}}>
                    <span>GPA：3.38/4.00 | 荣誉/奖项：研究生三等奖学金 | 担任职务：学科竞赛部委员</span>
                  </p>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>西南石油大学</h2>
                  <p style={{fontSize:"16px"}}>
                    <span style={{marginRight:'30px'}}>石油与天然气工程学院-海洋油气工程（本）</span>
                    <span>2018.09 - 2021.06</span>
                  </p>
                  <p style={{fontSize:"16px"}}>
                    <span>GPA：3.19/4.00 | 荣誉/奖项：优秀团支书 | 担任职务：班级团支书</span>
                  </p>
                </Col>
              </Row>
              <Row className='project item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-xiangmu' />项目经历</h1>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>安全帽检测系统 | 2020.01 - 2020.05 | 前端组长</h2>
                  <ul>
                    <li style={{fontSize:"16px"}}><strong>技术栈</strong>：Vue、Element-ui、ECharts、JavaScript、Webpack、npm。</li>
                    <li style={{fontSize:"16px"}}><strong>项目描述</strong>：系统主要作用是对于施工现场的工人是否按标准戴有安全帽进行监控与检测，并进行实时提醒，以达到减少安全事故的目的。</li>
                    <li style={{fontSize:"16px"}}><strong>项目成果</strong>：完成了系统管理、智能预警、报警信息管理、数据可视化模块以及个人中心模块，约占80%，以及使用Nginx 代理前端项目。</li>
                  </ul>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>安检院安全检查管理系统 | 2019.10 - 2020.05 | 项目组长</h2>
                  <ul>
                    <li style={{fontSize:"16px"}}><strong>技术栈</strong>：Vue、Element-ui、ECharts、JavaScript、Webpack、npm。</li>
                    <li style={{fontSize:"16px"}}><strong>项目描述</strong>：系统主要作用是对安检院的原材料和产品等方面的安全检验检测报告进行记录、统计、分析，以及数据挖掘和预警，达到对原材料以及产品的质量的监管。</li>
                    <li style={{fontSize:"16px"}}><strong>项目成果</strong>：完成前后端人员调配、分工以及与客户单位的需求沟通；完成部分功能的需求分析和数据表设计；前端完成首页、系统管理、数据配置、数据录入、统计分析等模块，约占40%，后端完成部分接口开发，约占10%；完成项目的部署。</li>
                  </ul>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>事故事件分析小程序 | 2019.06 - 2019.07 | 后端开发组长</h2>
                  <ul>
                    <li style={{fontSize:"16px"}}><strong>技术栈</strong>：Python、Django、Redis、MySQL。</li>
                    <li style={{fontSize:"16px"}}><strong>项目描述</strong>：该项目是一个针对管理层使用的微信小程序，可以及时的查看公司最新的事故事件，以便及时应对。</li>
                    <li style={{fontSize:"16px"}}><strong>项目成果</strong>：用户、事故、事件的增删改查，用户登录、退出，以及事故、事件的统计分析接口的开发，占100%；完成项目的部署。</li>
                  </ul>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>中油测井安全管理系统 | 2018.11 - 2019.05 | web前端组员</h2>
                  <ul>
                    <li style={{fontSize:"16px"}}><strong>技术栈</strong>：Vue、Element-ui、ECharts、JavaScript、Webpack、npm。</li>
                    <li style={{fontSize:"16px"}}><strong>项目描述</strong>：系统主要作用是针对中油测井公司的施工、管理等方面的安全事进行记录、统计与分析，以及数据挖掘和预警，达到逐年、逐月的减少安全事故的目的。</li>
                    <li style={{fontSize:"16px"}}><strong>项目成果</strong>：完成了安全概览、问题管理模块，问题统计分析模块，学习共享模块以及个人中心模块，约占20%。</li>
                  </ul>
                </Col>
              </Row>
              <Row className='work item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-gongzuo' />工作经历</h1>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>四川拜伦科技有限公司</h2>
                  <p style={{fontSize:"16px"}}>
                    <span style={{marginRight:'30px'}}>销售部 - 销售代表</span>
                    <span>2016.07 - 2017.08</span>
                  </p>
                  <p style={{fontSize:"16px"}}>
                    <span>主要负责部分军品接插件（连接器、航插等）、以及通信产品（抗干扰天线等）的推广及销售。</span>
                  </p>
                </Col>
              </Row>
              <Row className='person item'>
                <Col span={24} style={{ borderBottom: '1px solid' }}>
                  <h1><i className='iconfont icon-geren' />个人总结</h1>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>专业技能</h2>
                  <ul style={{fontSize:"16px"}}>
                    <li>熟悉Javasript，HTML，CSS，Vue，React，ECharts，Element-ui，Antd等前端技术，有大型后台管理系统的开发经验。</li>
                    <li>了解Npm，Webpack，Gulp等工具的使用，了解Git版本管理工具，对Node.js，jQuery也有一定了解。</li>
                    <li>熟悉Python，及其Flask和Django框架，熟悉MySQL数据，了解数据挖掘和机器学习常用的分类和回归算法，以及scikit-learn、TPOT等部分机器学习库。</li>
                  </ul>
                </Col>
                <Col span={24} style={{marginTop:"10px"}}>
                  <h2>性格倾向</h2>
                  <ul style={{fontSize:"16px"}}>
                    <li>热爱互联网行业，有较丰富的项目经验。</li>
                    <li>自主学习能力较强，上进心强，喜欢与人沟通交流学习。</li>
                    <li>对工作、项目责任感强烈，能承受压力及时完成任务，做事耐心细致，有较强的责任心和良好的团队合作精神。</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <BackToTop />
      </Row>
    )
  }
}
