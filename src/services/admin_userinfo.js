import req from '../constants/request.js'

export const getUserInfo = () => {
  return req({
    method:'get', 
    url:'/api/user/info'
  })
}

export const updateUserInfo = (data) => {
  return req({
    method:'post', 
    url:'/api/user/update',
    data
  })
}