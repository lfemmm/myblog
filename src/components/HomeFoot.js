import React, { Component } from 'react'
import '../assets/styles/homeFoot.less'
import { Row, Button, Tooltip } from 'antd'
import '../assets/font/iconfont.css'
import {getUserInfo} from '../services/userinfo.js'


// const HomePageFoot =
//   <div className='home-foot'>
//     <Row className='foot-header'>
//       <Col span={8}>
//         <h2>终是双曲线</h2>
//         <p>hahahahahahaha</p>
//         <Button type='primary' size='large'>About Me</Button>
//       </Col>
//       <Col span={8}>
//         <h2>相关链接</h2>
//         <Row>
//           <Col span={12}>
//             <p><i className='iconfont icon-toujianli' /><span>简历</span></p>
//             <p><i className='iconfont icon-bokexinwen' /><span>博文</span></p>
//             <p><i className='iconfont icon-github' /><span>github</span></p>
//           </Col>
//           <Col span={12}>
//             <p><i className='iconfont icon-liuyan' /><span>留言</span></p>
//             <p><i className='iconfont icon-miao' /><span>日记</span></p>
//           </Col>
//         </Row>
//       </Col>
//       <Col span={8}>
//         <h2>联系我</h2>
//         <p><i className='iconfont icon-qq' /><span>783898950</span></p>
//         <p><i className='iconfont icon-youxiang' /><span>783898950@qq.com</span></p>
//         <p><i className='iconfont icon-dizhi' /><span>西南石油大学</span></p>
//       </Col>
//     </Row>
//     <Row className='foot-foot' justify='center' align='middle'>
//       Copyright © 2019-2020 LF个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号
//         </Row>
//   </div>

// const OtherPageFoot =
//   <div className='other-foot'>
//     <Row className='foot-header' justify='center' align='middle'>
//       <Tooltip title='终是双曲线'>
//         <Button style={{ position: 'absolute', left: '100px' }} type='primary' size='large' onClick={() => this.props.router.push('/other/resume')}>About Me</Button>
//       </Tooltip>
//       <Tooltip title='783898950'>
//         <a href='###'><i className='iconfont icon-qq' /></a>
//       </Tooltip>
//       <Tooltip title='783898950@qq.com'>
//         <a href='###'><i className='iconfont icon-youxiang' /></a>
//       </Tooltip>
//       <Tooltip title='https://github.lfemmm.com'>
//         <a href='###'><i className='iconfont icon-github' /></a>
//       </Tooltip>
//       <Tooltip title='。。。'>
//         <a href='###'><i className='iconfont icon-liuyan' /></a>
//       </Tooltip>
//       <Tooltip title='西南石油大学'>
//         <a href='###'><i className='iconfont icon-dizhi' /></a>
//       </Tooltip>
//     </Row>
//     <Row className='foot-foot' justify='center' align='middle'>
//       Copyright © 2019-2020 LF个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号
//     </Row>
//   </div>

export default class HomeFoot extends Component {
  state={
    userInfo:{}
  }

  getUser=()=>{
    getUserInfo().then(res =>{
      this.setState({
        userInfo:res.data
      })
    }).catch(err=>{
      console.log(err);
    })
  }

  componentDidMount() {
    this.getUser()
  }
  


  render() {
    // return this.props.isOther ? OtherPageFoot : HomePageFoot
    return (
      <div className='other-foot'>
        <Row className='foot-header' justify='center' align='middle'>
          <Tooltip title={this.state.userInfo.nickname}>
            <Button style={{ position: 'absolute', left: '100px' }} type='primary' size='large' onClick={() => this.props.router.push('/other/resume')}>About Me</Button>
          </Tooltip>
          <Tooltip title={this.state.userInfo.qq}>
            <a href='###'><i className='iconfont icon-qq' /></a>
          </Tooltip>
          <Tooltip title={this.state.userInfo.mail}>
            <a href='###'><i className='iconfont icon-youxiang' /></a>
          </Tooltip>
          <Tooltip title={this.state.userInfo.github}>
            <a href='###'><i className='iconfont icon-github' /></a>
          </Tooltip>
          <Tooltip title='留言板'>
            <a href='#/other/messageboard'><i className='iconfont icon-liuyan' /></a>
          </Tooltip>
          <Tooltip title={this.state.userInfo.address}>
            <a href='###'><i className='iconfont icon-dizhi' /></a>
          </Tooltip>
        </Row>
        <Row className='foot-foot' justify='center' align='middle'>
          Copyright © 2019-2020 LF个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号
        </Row>
      </div>
    )
  }
}
