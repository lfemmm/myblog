import req from '../constants/request.js'

export const addDiary = (data) => {
  return req({
    method:'post', 
    url:'/api/diary/add',
    data
  })
}

export const getDiaryList = () => {
  return req({
    method:'get', 
    url:'/api/diary/list'
  })
}


export const deleteDiary = (key) => {
  return req({
    method:'delete', 
    url:`/api/diary/delete/${key}`
  })
}