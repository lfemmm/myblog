import req from '../constants/request.js'


export const getDiaryList = () => {
  return req({
    method:'get', 
    url:'/api/diary/normal/list'
  })
}