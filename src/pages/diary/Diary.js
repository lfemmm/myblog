import React, { Component } from 'react'
import { Row, Col, Timeline } from 'antd'
import '../../assets/styles/diary.less'
import { ClockCircleOutlined } from '@ant-design/icons';
import { getDiaryList } from '../../services/diary.js'


const jiantou = {
  position: 'absolute',
  top: '5px',
  left: '-10px',
  width: 0,
  height: 0,
  borderBottom: '10px solid transparent',
  borderTop: '10px solid transparent',
  borderRight: '10px solid  skyblue'
  // borderRight: '10px solid  #009688'
}

export default class Diary extends Component {

  state = {
    diaryList: []
  }

  handleGetDiaryList() {
    getDiaryList().then(res => {
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


  render() {
    return (
      <Row className='diary' justify='center'>
        <Col span={18} className='diary-detail'>
          <Row>
            <Timeline mode='left'>
              <Timeline.Item className='start' dot={<ClockCircleOutlined style={{ fontSize: '16px', color: '#009688' }} />}>
                <h2>Start</h2>
              </Timeline.Item>
              {this.state.diaryList.map(val => {
                return <Timeline.Item key={val.key} label={val.date} color='#009688'>
                  <Row>
                    <div style={jiantou}></div>
                    {
                      val.cover ?
                        <Col className='diary-img' span={4}>
                          <img src={val.cover} alt="." width='100%' />
                        </Col> : ''
                    }
                    <Col className='diary-content' span={val.cover ? 20 : 24}>
                      <span dangerouslySetInnerHTML={{ __html: val.content }} />
                    </Col>
                  </Row>
                </Timeline.Item>
              })}
              <Timeline.Item className='end' dot={<ClockCircleOutlined style={{ fontSize: '16px', color: '#009688' }} />}>
                <h2>End</h2>
              </Timeline.Item>
            </Timeline>
          </Row>
        </Col>
      </Row>
    )
  }
}
