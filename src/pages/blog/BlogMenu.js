import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import '../../assets/styles/blogMenu.less'
import { Link } from 'react-router'

const { Search } = Input;

export default class BlogMenu extends Component {

  state = {
    keyWord: '',
    type: ''
  }

  onChange = (e) => {
    this.setState({
      keyWord: e.target.value
    })
  }

  render() {
    const { 
      types, 
      // lastThree 
    } = this.props
    return (
      <div style={{ position: 'fixed', width: '300px' }}>
        {/* 文章分类 */}
        <Row className='article-type'>
          <Col className='search' span={24}>
            <Search
              placeholder="输入标题关键字查询文章"
              onSearch={() => this.props.onSearch(this.state.keyWord)}
              style={{ borderRadius: '16px' }}
              onChange={this.onChange}
            />
          </Col>
          <Col className='type-list' span={24} >
            <ul>
              <li key={'all'} onClick={() => this.props.onClick('')}><Link >全部</Link></li>
              {
                types.map(val => {
                  return <li key={val} onClick={() => this.props.onClick(val)}><Link >{val}</Link></li>
                })
              }
            </ul>
          </Col>
        </Row>

        {/* 最新文章 */}
        {/* <Row className='new-article'>
          <Col className='title' span={24}>
            <h2>最新文章</h2>
          </Col>
          <Col className='article-list' span={24}>
            <ul>
              {
                lastThree.map(val => {
                  return <li key={val.key} onClick={() => this.props.onClick(val)}><Link >{val.title}</Link></li>
                })
              }
            </ul>
          </Col>
        </Row> */}
      </div>
    )
  }
}
