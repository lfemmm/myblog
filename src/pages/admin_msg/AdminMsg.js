import React, { Component } from 'react'
import { Table, Space, message,Button } from 'antd';
import { getMsgList, deleteMsg } from '../../services/admin_msg.js'

const {Column} = Table;

export default class AdminMsg extends Component {

  state = {
    msgList: []
  }

  handleGetMsgList() {
    getMsgList().then(res => {
      message.success(res.msg)
      this.setState({
        msgList: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handleGetMsgList()
  }

  deleteOneResume(key){
    deleteMsg(key).then(res => {
      console.log(res);
      message.success(res.msg)
      this.handleGetMsgList()
    }).catch(err => {
      console.log(err);
    })
  }



  render() {
    return (
      <Table dataSource={this.state.msgList} >
        <Column title='时间' dataIndex='date' key='date' width={300} />
        <Column title='内容' dataIndex='content' key='content' />
        <Column title='操作' key='action' width={200}
          render={(text, record) => (
            <Space size="middle">
              <Button type='link' onClick={() => this.deleteOneResume(record.key)}>删除</Button>
            </Space>
          )}
        />
      </Table>
    )
  }
}
