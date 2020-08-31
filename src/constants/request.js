import axios from 'axios'
import cookie from 'react-cookies'
import { message } from 'antd'


const service = axios.create({
  timeout: 5000
})


// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${cookie.load('myblog_token')}`
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      message.error(res.msg || '请求失败')
      return Promise.reject(new Error(res.msg || '请求失败'))
    } else {
      return res
    }
  },
  err => {
    console.log({ err })
    const { code, msg } = err.response.data
    message.error(msg || '请求失败')
    if (code === -2) {
      window.location.href ='#/login'
    }
    return Promise.reject(err)
  }
)

export default service