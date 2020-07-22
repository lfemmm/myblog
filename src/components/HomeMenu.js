import React, { Component } from 'react'
import open from '../assets/font/open.png'
import close from '../assets/font/close.png'
import '../assets/styles/homeMenu.less'
import '../assets/font/iconfont.css'

export default class HomeMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuStatus: false,
      src: open,
      menuclass:'menus-close'
    }

    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu(e) {
    e.preventDefault()
    this.setState({
      menuStatus: !this.state.menuStatus,
      src: this.state.menuStatus ? open : close,
      menuclass: this.state.menuStatus ? 'menus-close' : 'menus-open'
    })
  }

  componentDidMount() { }

  render() {
    return (
      <div className='home-menu' >
        <div className='icon'>
          <img onClick={this.handleMenu} src={this.state.src} alt='menu' width='100%' />
        </div>
        <div className={this.state.menuclass}>
          <ul>
            <li>
              <a href='###'><i className='iconfont icon-toujianli' />简历</a>
            </li>
            <li>
              <a href='###'><i className='iconfont icon-bokexinwen' />博文</a>
            </li>
            <li>
              <a href='###'><i className='iconfont icon-miao' />日志</a>
            </li>
            <li>
              <a href='###'><i className='iconfont icon-liuyan' />留言板</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
