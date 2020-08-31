import req from '../constants/request.js'

export const updateResume = (data) => {
  return req({
    method:'post', 
    url:'/api/resume/update',
    data
  })
}

export const getResumeList = () => {
  return req({
    method:'get', 
    url:'/api/resume/list'
  })
}

export const getNewestResume = () => {
  return req({
    method:'get', 
    url:'/api/resume/newest'
  })
}

export const deleteResume = (id) => {
  return req({
    method:'delete', 
    url:`/api/resume/delete/${id}`
  })
}