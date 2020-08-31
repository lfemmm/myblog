import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Space, message, Button } from 'antd';
import { getResumeList, deleteResume } from '../../services/admin_resume.js'
import { hashHistory } from 'react-router'
import AdminResumeDetail from './AdminResumeDetail'

const { Column } = Table;

export default class AdminResumeList extends Component {
  state = {
    visible: false,
    resumeList: [],
    descriptionsData: {}
  }

  static contextTypes = {
    changePanes: PropTypes.func
  }

  getList() {
    getResumeList().then(res => {
      this.setState({
        resumeList: res.data
      })
      message.success(res.msg)
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.getList()
  }

  getOneResume = (data) => {
    console.log(data);
    hashHistory.push(`/admin/resume_list/${data.key}`)
    setTimeout(() => {
      this.context.changePanes('resume_list',<AdminResumeDetail data={data}/>)
    }, 1);
  }

  deleteOneResume = (key) => {
    deleteResume(key).then(res => {
      message.success(res.msg)
      this.getList()
    }).catch(err => {
      console.log(err);
    })
  }

  clearData(data) {
    this.setState({
      descriptionsData: data
    })
  }

  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <Table dataSource={this.state.resumeList}>
          <Column title='更新时间' dataIndex='updateTime' key='updateTime' width={300} />
          <Column title='更新内容' dataIndex='updateContent' key='updateContent' />
          <Column title='操作' key='action' width={200}
            render={(text, record) => (
              <Space size="middle">
                {/* <Link to={`/admin/resume_list/detail`}>查看</Link> */}
                <Button type='link' onClick={() => this.getOneResume(record)}>查看</Button>
                <Button type='link' onClick={() => this.deleteOneResume(record.key)}>删除</Button>
              </Space>
            )}
          />
        </Table>
      </div>
    )
  }
}

