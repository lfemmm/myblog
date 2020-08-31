import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Tabs, message } from 'antd';
import '../../assets/styles/administration.less'
import Logo1 from '../../assets/imgs/admin_logo1.png'
import Logo2 from '../../assets/imgs/admin_logo2.png'
import MyDropdown from './MyDropdown'
import MyMenus from './MyMenus'
import { hashHistory } from 'react-router'

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;



export default class Administration extends Component {
  state = {
    collapsed: false,
    activeKey: '',
    panes: [],
  }

  static childContextTypes = {
    changePanes: PropTypes.func
  }

  getChildContext() {
    return {
      changePanes:this.changePanes
    }
  }

  changePanes=(key,content)=>{
    const { panes } = this.state;
    panes.forEach(pane => {
      if (pane.key === key) {
        pane.content = content
      }
    })
    this.setState({
      panes
    })
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  add = (title, key) => {
    hashHistory.push(`/admin/${key}`)
    setTimeout(() => {
      const { panes } = this.state;
      let res = panes.find(item => item.key === key)
      if (res) {
        this.setState({ activeKey: res.key })
      } else {
        panes.push({ title, key, content: this.props.children });
        this.setState({ panes, activeKey: key })
      }
    }, 1);
  }

  onChange = activeKey => {
    this.setState({ activeKey })
  }

  onEdit = (targetKey, action) => {
    if (this.state.panes.length > 1) {
      this[action](targetKey)
    } else {
      message.warning('至少有一个标签页！')
    }
  }

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <Layout className="admin">
        <Sider className='menus' collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' >
            <img src={this.state.collapsed ? Logo2 : Logo1} alt="logo" height="60px" />
          </div>
          <MyMenus add={this.add.bind(this)} />
        </Sider>
        <Layout className="main">
          <Header className="header">
            <MyDropdown add={this.add.bind(this)} />
          </Header>
          <Content className='content'>
            <Tabs
              className='main-content'
              hideAdd
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              onEdit={this.onEdit}
            >
              {this.state.panes.map(pane => {
                return (
                  <TabPane tab={pane.title} key={pane.key}>
                    {pane.content}
                  </TabPane>
                )
              })}
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
