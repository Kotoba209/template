import http from '@/utils/http';

export function queryUserList(params) {
  return http.get('/users', params);
}

export function queryUserItem({ id, ...params }) {
  return http.get(`/users/${id}`, params);
}

export function createUser(params) {
  return http.post('/users', params);
}

export function updateUser({ id, ...params }) {
  return http.put(`/users/${id}`, params);
}

export function deleteUser(id) {
  return http.delete(`/users/${id}`);
}

export function queryCurrentUser() {
  return http.get('/customers');
}
