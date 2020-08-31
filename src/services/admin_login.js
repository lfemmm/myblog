import req from '../constants/request.js'


// export const login = data => {
//   return req('post', '/user/login', data)
// }

export const login = data => {
  return req({
    method:'post', 
    url:'/api/user/login', 
    data
  })
}
