import axios from 'axios'
import cookie from 'js-cookie'
console.log(process.env.NODE_ENV)
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
})

service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data
}, function (error) {
  const response = error.response
  const data = response.data
  if (response.status === 401) {
    cookie.remove('token')
  }
  // if (data.message === 'token失效') {
  //   cookie.remove('token')
  // }
  alert(data.message)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  ...service,
  get (url, params) {
    return service.get(url, { params })
  }
}
