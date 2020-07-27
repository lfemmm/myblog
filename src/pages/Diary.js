import React, { Component } from 'react'
import { Row, Col, Timeline } from 'antd'
import '../assets/styles/diary.less'
import { ClockCircleOutlined } from '@ant-design/icons';

const diaryData = [
  { date: '2015-09-09', content: '亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。', src: 'yasuo.jpg' },
  { date: '2015-09-06', content: '没人在乎你怎样在深夜痛哭，也没人在乎你辗转反侧的要熬几个秋。外人只看结果，自己要独撑过程。等我们都明白了这个道理，便不会再在人前矫情，四处诉说以求宽慰。', src: '' },
  { date: '2015-09-04', content: '1996年，科比被当时的夏洛特黄蜂以首轮第13顺位选中，随即他被交易到湖人。在漫长的职业生涯里，科比帮助球队先后夺取5座总冠军。而飞侠本人在07-08赛季荣膺常规赛MVP。在目前的历史得分榜上，科比排名第三位，仅次于贾巴尔与马龙。', src: 'kb03.jpg' },
  { date: '2015-09-01', content: '当你的才华还撑不起你的野心时，那你就应该静下心来学习。', src: '' },
  { date: '2015-08-23', content: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程。', src: 'java.jpg' },
  { date: '2015-08-11', content: 'web前端就是前端网络编程，bai也被认为是用户端编du程，是为了zhi网页或者网页应用，而编dao写HTML，CSS以及JS代码，所以用户能够看到并且和这些页面进行交流。前端网络编程的挑战在于用于实现前端页面的工具以及技术变化得很快，所以工程师需要不断注意产业是如何发展的（例如ECMAScript 6）。设计网页的目的在于确保用户打开站点的时候，信息是以容易阅读并且相互关联的形式呈现的。随之带来的问题是，现在用户实用大量的设备来访问网页，这些设备具有不同的屏幕尺寸以及清晰度。所以设计者在设计网页的时候需要注意这些方面。他们需要确保他们的网页在不同的浏览器、不同的操作系统以及不同的设备上显示正确，这需要在工程师端进行仔细的计划。', src: 'web.jpg' },
  { date: '2015-08-01', content: '林花谢了春红，太匆匆，无奈朝来寒雨晚来风。胭脂泪，相留醉，几时重？自是人生长恨水长东。    ——李煜《相见欢》', src: '' },
  { date: '2015-08-01', content: '碧云天，黄叶地，秋色连波，波上寒烟翠。山映斜阳天接水，芳草无情，更在斜阳外。黯乡魂，追旅思，夜夜除非，好梦留人睡。明月楼高休独倚，酒入愁肠，化作相思泪。    ——范仲淹《苏幕遮·怀旧》', src: 'gonglu1.jpg' },
]

const jiantou = {
  position: 'absolute',
  top: '5px',
  left: '-10px',
  width: 0,
  height: 0,
  borderBottom: '10px solid transparent',
  borderTop: '10px solid transparent',
  borderRight: '10px solid  #009688'
}

export default class Diary extends Component {
  render() {
    return (
      <Row className='diary' justify='center'>
        <Col span={18} className='diary-detail'>
          {/* <Row  className='title'>1</Row> */}
          <Row>
            <Timeline mode='left'>
              <Timeline.Item className='start' dot={<ClockCircleOutlined style={{ fontSize: '16px', color: '#009688' }} />}>
                <h2>Start</h2>
              </Timeline.Item>
              {diaryData.map((val, key) => {
                return <Timeline.Item key={key} label={val.date} color='#009688'>
                  <Row>
                    <div style={jiantou}></div>
                    {
                      val.src ?
                        <Col className='diary-img' span={4}>
                          <img src={require(`../assets/imgs/${val.src}`)} alt="." width='100%' />
                        </Col> : ''
                    }
                    <Col className='diary-content' span={val.src ? 20 : 24}>
                      {val.content}
                    </Col>
                  </Row>
                </Timeline.Item>
              })}
              <Timeline.Item label='2020-07-26' color='#009688'>博客正式上线，这也是我第一个网站。</Timeline.Item>
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
