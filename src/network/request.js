import axios from 'axios'

export const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://www.muchjoyboy.com:3007',
    timeout: 4000
  })

  // 请求拦截
  instance.interceptors.request.use(res => {
    // 测试添加请求headers
    return res
  })

  instance.interceptors.response.use(res => {
    return res.data
  })

  return instance(config)
}
