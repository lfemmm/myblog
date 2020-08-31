import React, { Component } from 'react'
import { List, Avatar, message, Button, Popconfirm } from 'antd';
import { getDiaryList, deleteDiary } from '../../services/admin_diary.js'
import AvatarPhoto from '../../assets/imgs/touxiang.jpg'

export default class AdminDiaryList extends Component {
  state = {
    diaryList: []
  }

  handleGetDiaryList() {
    getDiaryList().then(res => {
      console.log(res);
      message.success(res.msg)
      this.setState({
        diaryList: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handleGetDiaryList()
  }

  confirmDeleteDiary = (key) => {
    console.log(key);
    deleteDiary(key).then(res => {
      console.log(res);
      message.success(res.msg)
      this.handleGetDiaryList()
    }).catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={this.state.diaryList}
        footer={
          <div>
            <strong>“深觉时光可惜，暮景可伤。”——— 陈模</strong>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.key}
            extra={
              item.cover?
              <img
                width={200}
                alt="logo"
                src={item.cover}
              />
              :''
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={AvatarPhoto} />}
              title={
                <>
                  {item.date}
                  <Popconfirm placement="topLeft" title='真的要删除日记吗？真的吗？' onConfirm={() => this.confirmDeleteDiary(item.key)} okText="是的哟" cancelText="算了吧">
                    <Button type='link'>删除</Button>
                  </Popconfirm>
                </>
              }
            />
            <span  dangerouslySetInnerHTML={{ __html: item.content }} />
          </List.Item>
        )}
      />
    )
  }
}
