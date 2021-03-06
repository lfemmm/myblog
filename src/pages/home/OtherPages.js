import React, { Component } from 'react'
import { Layout } from 'antd'
import MyHeader from '../../components/MyHeader'
import HomeFoot from '../../components/HomeFoot'
import BackToTop from '../../components/BackToTop'
import '../../assets/styles/otherPages.less'


const { Header, Content, Footer } = Layout

export default class OtherPages extends Component {
  render() {
    return (
      <Layout className="other-pages">
        <Header className="header">
          <MyHeader route={this.props.location.pathname} />
        </Header>
        <Content className='content'>
          {this.props.children}
        </Content>
        <Footer className='' style={{ padding: 0 }}>
          <HomeFoot isOther router={this.props.router}  />
        </Footer>
        <BackToTop />
      </Layout >
    )
  }
}
