import React, { Component } from 'react'
import { Row, Col, Comment, Avatar, Form, Button, List, Input } from 'antd';
import Java from '../assets/imgs/java.jpg'
import Web from '../assets/imgs/web.jpg'
import KB from '../assets/imgs/kb01.jpg'
import YS from '../assets/imgs/yasuo.jpg'

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={5} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        提交留言
      </Button>
    </Form.Item>
  </>
);


const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? '留言' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);


const initalData = [
  { author: 'java大师', avatar: Java, content: <p>Java天下第一</p>, datetime: '2020/07/25'},
  { author: 'web大佬', avatar: Web, content: <p>JS天下第一</p>, datetime: '2020/07/20'},
  { author: 'kkkkb', avatar: KB, content: <p>Python天下第一</p>, datetime: '2020/07/15'},
  { author: 'yasuo', avatar: YS, content: <p>亚索牛皮</p>, datetime: '2020/07/15'},
]

export default class MessageBoard extends Component {
  state = {
    comments:initalData,
    submitting: false,
    value: '',
  };

  // 提交留言
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }


    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: new Date().toLocaleDateString(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  // 数据双向绑定
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <Row justify='center'>
        <Col xxl={18} xl={20} lg={24} md={24} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '50px' }}>
          <Comment
            avatar=
            {
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content=
            {
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </Col>
        <Col xxl={18} xl={20} lg={24} md={24} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '50px', margin: '20px 0' }}>
          {comments.length > 0 && <CommentList comments={comments} />}
        </Col>
      </Row>
    )
  }
}
