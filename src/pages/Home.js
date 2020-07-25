import React, { Component } from 'react'
import '../assets/styles/home.less'
import { Row, Col, Layout, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import HomeItem from '../components/HomeItem'
import HomeFoot from '../components/HomeFoot'
import BackToTop from '../components/BackToTop'
import HomeMenu from '../components/HomeMenu'
import '../assets/font/iconfont.css'

const { Header, Content, Footer } = Layout;

const items = [
  { title: 'Web专栏', date: '2020年6月16日', des: '本栏目主要分享关于web前端的学习路线，基础知识，常用框架，面试题，项目等等', src: 'web.jpg' },
  { title: 'Java专栏', date: '2020年6月16日', des: '本专栏主要分享Java的各种常见问题，包括java学习路线，java基础，框架，微服务，项目，面试题，希望通过这些知识的分享能', src: 'java.jpg' },
  { title: 'DeDeCMS专栏', date: '2020年6月16日', des: '本栏目主要介绍DeDeCMS网站内容管理系统，使用dede常见的问题，常用标签，插件，提供建站帮助', src: 'dedecms.jpg' },
]


export default class Home extends Component {

  render() {
    return (
      <Layout className="home">
        <HomeMenu />
        <Header className="top">
          <Row className='top-header'>
            <Col className='top-header-title' span={24} align='middle' justify='center'>LF-Blog</Col>
            <Col className='top-header-des' span={24} align='middle' justify='center'>只要朝着一个方向努力，一切都会变得得心应手</Col>
            <Col span={24} align='middle' justify='center'>
              <Button type='primary' style={{ marginRight: 20 }} onClick={()=> this.props.router.push('/other/resume')}>个人简历</Button>
              <Button type='primary' onClick={()=> this.props.router.push('/other/blog')}>个人博客</Button>
            </Col>
          </Row>
          <Row className='top-foot' align='bottom' justify='center'>
            <div className='top-foot-box'>
              <a href="#middle" >
                <DownOutlined />
              </a>
            </div>
          </Row>
        </Header>
        <Content className='middle' id='middle'>
          <Row className='middle-all'>
            <Col span={24}>
              <Row>
                <Col className='middle-header' span={24} align='middle' justify='center'>
                  <h1>博客分类</h1>
                  <p>
                    只要朝着一个方向努力
                  <br />
                    一切都会变得得心应手
                  </p>
                </Col>
              </Row>
              <Row className='middle-foot'>
                {
                  items.map((val, key) => {
                    return <HomeItem key={key} src='home_bg.jpg' val={val} />
                  })
                }
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer className='footer'>
          <HomeFoot />
        </Footer>
        <BackToTop />
      </Layout >
    )
  }
}
