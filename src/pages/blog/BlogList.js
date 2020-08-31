import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogItem from './BlogItem'
import '../../assets/styles/blog.less'
import {hashHistory} from 'react-router'

export default class BlogList extends Component {
  state = {
    blogDetail: {}
  }

  static contextTypes = {
    blogList: PropTypes.array
  }

  onClickMore = (key) => {
    hashHistory.push(`/other/blog/${key}`)
  }

  render() {
    return (
      <>
        {
          this.context.blogList.map(val => {
            return <BlogItem key={val.key} data={val} onClick={this.onClickMore} />
          })
        }
      </>
    )
  }
}
