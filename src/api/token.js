import http from '@/utils/http';

export function createToken(params) {
  const { code = '' } = params;
  return http.post(`/tokens?code=${code}`, params);
}

export function deleteToken(id = 0) {
  return http.delete(`/tokens/${id}`);
}
