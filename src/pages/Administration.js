import React, { Component } from 'react'
import { Layout, Menu, Tabs, message } from 'antd';
import {
  UserOutlined,
  AppstoreOutlined,
  AuditOutlined,
  ScheduleOutlined,
  ProfileOutlined,
  CommentOutlined
} from '@ant-design/icons';
import '../assets/styles/administration.less'
import Logo1 from '../assets/imgs/admin_logo1.png'
import Logo2 from '../assets/imgs/admin_logo2.png'
import BackToTop from '../components/BackToTop'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

export default class Administration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
      activeKey: '',
      panes: [],
      initSelectKey:'resume'
    }

  }

  UNSAFE_componentWillMount() {
    this.props.router.push(`/admin/resume`)
    setTimeout(() => {
      this.add('个人简历', 'resume', this.props.children)
    }, 0);
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  selectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    this.props.router.push(`/admin/${key}`)
    setTimeout(() => {
      this.add(item.props.title, key, this.props.children)
    }, 0);
  }

  add = (title, key, content) => {
    const { panes } = this.state;
    let res = panes.find(item => item.key === key)
    if (res) {
      this.setState({ activeKey: res.key })
    } else {
      panes.push({ title, key, content });
      this.setState({ panes, activeKey: key })
    }
  }

  onChange = activeKey => {
    this.setState({ activeKey})
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
  };

  render() {
    return (
      <Layout className="admin">
        <Sider className='menus' collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className='logo' >
            <img src={this.state.collapsed ? Logo2 : Logo1} alt="logo" height="60px" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={[this.state.initSelectKey]} mode="inline" onSelect={this.selectMenu}>
            <Menu.Item key="resume" icon={<AuditOutlined />} title="个人简历">
              个人简历
            </Menu.Item>
            <Menu.Item key="blog" icon={<ProfileOutlined />} title="个人博客">
              个人博客
            </Menu.Item>
            <Menu.Item key="diary" icon={<ScheduleOutlined />} title="个人日记">
              个人日记
            </Menu.Item>
            <Menu.Item key="message" icon={<CommentOutlined />} title="留言管理">
              留言管理
            </Menu.Item>
            <SubMenu key="data_conf" icon={<AppstoreOutlined />} title="数据配置">
              <Menu.Item key="person_conf" icon={<UserOutlined />} title="个人信息">个人信息</Menu.Item>
              <Menu.Item key="resume_conf" icon={<AuditOutlined />} title="简历配置">简历配置</Menu.Item>
              <Menu.Item key="blog_conf" icon={<ProfileOutlined />} title="博客配置">博客配置</Menu.Item>
              <Menu.Item key="diary_conf" icon={<ScheduleOutlined />} title="日记配置">日记配置</Menu.Item>
              <Menu.Item key="msg_conf" icon={<CommentOutlined />} title="留言配置">留言配置</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="main">
          <Header className="header" >哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</Header>
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
            {/* <BackToTop /> */}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
