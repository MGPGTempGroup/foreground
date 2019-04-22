import request from '@/lib/request'

export function fetchServiceContent(serviceName) {
  return request({
    method: 'GET',
    url: `services/${serviceName}/content`
  })
}