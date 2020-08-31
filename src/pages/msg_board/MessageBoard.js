import React, { Component } from 'react'
import { Row, Col, Comment, Form, Button, List, Input, message } from 'antd';
import {hashHistory} from 'react-router'
import { addMsg, getMsgList } from '../../services/msg.js'

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


const CommentList = ({ messages }) => (
  <List
    dataSource={messages}
    header={`${messages.length} ${messages.length > 1 ? '留言' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment author={props.date} content={props.content} />}
  />
);


export default class MessageBoard extends Component {
  state = {
    messages: [],
    submitting: false,
    content: '',
  };

  // 查询留言列表
  handleGetMsgList(){
    getMsgList().then(res => {
      this.setState({
        messages:res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.handleGetMsgList()
    console.log(hashHistory);
  }
  

  // 提交留言
  handleSubmit = () => {
    addMsg({ content: this.state.content }).then(res => {
      message.success(res.msg)
      this.setState({
        content:''
      })
      this.handleGetMsgList()
    }).catch(err => {
      console.log(err);
    })
  }

  // 数据双向绑定
  handleChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    const { messages, submitting, content } = this.state;
    return (
      <Row justify='center'>
        <Col xxl={18} xl={20} lg={24} md={24} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '20px 50px' }}>
          <Comment
            content=
            {
              <>
                {/* <Divider orientation="left">留言</Divider> */}
                <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={content}
                />
              </>
            }
          />
        </Col>
        <Col xxl={18} xl={20} lg={24} md={24} style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', padding: '50px', margin: '20px 0' }}>
          {messages.length > 0 && <CommentList messages={messages} />}
        </Col>
      </Row>
    )
  }
}
