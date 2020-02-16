import request from '@/utils/request';

const http = {
  get(url, params, options) {
    return request(url, { params, ...options });
  },
  post(url, data, options) {
    return request(url, { method: 'post', data, ...options });
  },
  put(url, data, options) {
    return request(url, { method: 'put', data, ...options });
  },
  delete(url, data, options) {
    return request(url, { method: 'delete', data, ...options });
  },
};

export default http;
