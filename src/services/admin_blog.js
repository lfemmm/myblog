import req from '../constants/request.js'

export const addBlog = (data) => {
  return req({
    method:'post', 
    url:'/api/blog/add',
    data
  })
}

export const getBlogList = () => {
  return req({
    method:'get', 
    url:'/api/blog/list'
  })
}

export const updateBlog = (data) => {
  return req({
    method:'post', 
    url:'/api/blog/update',
    data
  })
}

export const deleteBlog = (key) => {
  return req({
    method:'delete', 
    url:`/api/blog/delete/${key}`
  })
}