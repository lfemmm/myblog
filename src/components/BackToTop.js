import React, { Component } from 'react'
import huojian from '../assets/font/huojian.png'
import { BackTop } from 'antd'
import '../assets/styles/backToTop.less'


export default class BackToTop extends Component {
  render() {
    return (
      <BackTop>
        <div className='back-to-top'>
          <img src={huojian} width='100%' alt='BackTop' />
        </div>
      </BackTop>
    )
  }
}
