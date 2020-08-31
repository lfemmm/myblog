import req from '../constants/request.js'


export const getUserInfo = () => {
  return req({
    method:'get', 
    url:'/api/user/normal/info'
  })
}