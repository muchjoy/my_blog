import { request } from '@/network/request'

// 获取文章数据
export const getArticle = (params) => {
  return request({
    url: '/my/article/list',
    method: 'GET',
    params
  })
}

// 获取文章分类
export const getSort = () => {
  return request({
    url: '/my/article/cates',
    method: 'GET'
  })
}
