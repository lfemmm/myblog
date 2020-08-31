import React, { Component } from 'react'
import ResumeDemo from '../../components/ResumeDemo'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import AdminResumeList from './AdminResumeList'

export default class AdminResumeDetail extends Component {
  static contextTypes = {
    changePanes: PropTypes.func
  }

  onClick = () => {
    hashHistory.goBack()
    this.context.changePanes('resume_list', <AdminResumeList />)
  }

  render() {
    return (
      <>
        <Button type='link' onClick={this.onClick}>返回</Button>
        <ResumeDemo data={this.props.data} />
      </>
    )
  }
}
