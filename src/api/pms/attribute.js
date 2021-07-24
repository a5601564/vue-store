import request from '@/utils/request'



export function list(params) {
  return request({
    url: '/youlai-admin/api/v1/attributes',
    method: 'get',
    params: params
  })
}

export function saveBatch(data) {
  return request({
    url: '/youlai-admin/api/v1/attributes',
    method: 'post',
    data: data
  })
}


