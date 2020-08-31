import req from '../constants/request.js'

export const addMsg = (data) => {
  return req({
    method:'post', 
    url:'/api/msg/normal/add',
    data
  })
}

export const getMsgList = () => {
  return req({
    method:'get', 
    url:'/api/msg/normal/list'
  })
}

