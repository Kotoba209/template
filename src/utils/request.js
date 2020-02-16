/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import Vue from 'vue';
import { Notify } from 'vant';
import { extend, ResponseError } from 'umi-request';
import { getToken, setToken } from '@/utils/auth';

Vue.use(Notify);

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

export function defaultHandler() {}

/**
 * 异常处理程序
 */
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    if (response.status === 401) { // 登录失败
      // router.push('/user/login');
    }
    const errorText = codeMessage[response.status] || response.statusText;
    Notify(errorText || '未知错误');
  }
  return Promise.reject(error);
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  prefix: process.env.VUE_APP_BASE_URL,
  errorHandler, // 默认错误处理
  credentials: 'omit', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  if (process.env.NODE_ENV === 'development') {
    setToken('oLENw05LJYxUD9_W5iQeoNvHSx88');
  }
  const token = getToken();
  if (!token) {
    return ({ url, options });
  }
  const { headers } = options;
  return ({
    url,
    options: {
      ...options,
      interceptors: true,
      headers: { ...headers, Authorization: `Bearer ${token}` },
    },
  });
});

request.interceptors.response.use(async (response) => {
  const { status } = response;
  const data = await response.clone().json();
  if (status >= 200 && status < 300 && data && data.error === 0) {
    return data.data || [];
  }
  const error = new ResponseError(data.msg);
  error.name = `${response.status}`;
  error.response = response;
  error.data = data;
  return Promise.reject(error);
});

export default request;
