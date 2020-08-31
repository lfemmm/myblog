import req from '../constants/request.js'

export const getBlogList = (params) => {
  return req({
    method: 'get',
    url: '/api/blog/normal/list',
    params
  })
}

export const getBlogTypes = () => {
  return req({
    method: 'get',
    url: '/api/blog/normal/types'
  })
}

export const getLastThreeBlogs = () => {
  return req({
    method: 'get',
    url: '/api/blog/normal/last_three'
  })
}

export const getOneBlog = (key) => {
  return req({
    method: 'get',
    url: `/api/blog/normal/${key}`
  })
}
