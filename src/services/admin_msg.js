import req from '../constants/request.js'

export const getMsgList = () => {
  return req({
    method:'get', 
    url:'/api/msg/list'
  })
}


export const deleteMsg = (key) => {
  return req({
    method:'delete', 
    url:`/api/msg/delete/${key}`
  })
}