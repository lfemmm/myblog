import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import '../assets/styles/blogMenu.less'

const { Search } = Input;

const types = ['JavaScript', 'Html', 'Css', 'Java', 'Python']
const newArticle = ['Java学习路线推荐', 'Web学习路线推荐', 'Python学习路线推荐', 'Dedecms学习路线推荐', 'Html学习路线']

export default class BlogMenu extends Component {
  render() {
    return (
      <div style={{position:'fixed',width:'300px'}}>
        {/* 文章分类 */}
        <Row className='article-type'>
          <Col className='search' span={24}>
            <Search
              placeholder="输入关键字查询"
              onSearch={value => console.log(value)}
              style={{ borderRadius: '16px' }}
            />
          </Col>
          <Col className='type-list' span={24} >
            <ul>
              {types.map(val => {
                return <li key={val}><a href="###">{val}</a></li>
              })}
            </ul>
          </Col>
        </Row>

        {/* 最新文章 */}
        <Row className='new-article'>
          <Col className='title' span={24}>
            <h2>最新文章</h2>
          </Col>
          <Col className='article-list' span={24}>
            <ul>
              {newArticle.map(val => {
                return <li key={val}><a href="###">{val}</a></li>
              })}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
