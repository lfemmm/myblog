import req from '../constants/request.js'

export const getNewestResume = () => {
  return req({
    method:'get', 
    url:'/api/resume/normal/newest'
  })
}