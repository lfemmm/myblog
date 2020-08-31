import React, { Component } from 'react'
import '../../assets/styles/resume.less'
import '../../assets/font/iconfont.css'
import ResumeDemo from '../../components/ResumeDemo'
import { getNewestResume } from '../../services/resume.js'


export default class Resume extends Component {

  state = {
    newestResume: []
  }

  handldGetNewestResume() {
    getNewestResume().then(res => {
      this.setState({
        newestResume: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handldGetNewestResume()
  }

  render() {
    return <ResumeDemo data={this.state.newestResume} xxl={18} xl={20} lg={24} md={24}/>
  }
}
