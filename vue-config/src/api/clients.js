import request from '@/utils/request'

const base_url = '/Clients/'

export function getPageList(params) {
  return request({
    url: base_url + 'GetPageList',
    method: 'get',
    params
  })
}

export function getAccGroupList(params) {
  return request({
    url: base_url + 'GetAccGroupList',
    method: 'get',
    params
  })
}

export function toAccClient(data) {
  return request({
    url: base_url + 'ToAccClient',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: base_url + 'Edit',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: base_url + 'Delete',
    method: 'post',
    data: { id }
  })
}

