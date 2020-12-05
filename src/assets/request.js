import axios from 'axios';  //commonJS规范 import是ES6 规范
/**
 * 对axios的封装
 * @param config url or config
 * @returns {AxiosPromise}
 */
const request = axios.create();

request.defaults.baseURL = "http://localhost:9090";
request.defaults.timeout = 5000;
request.defaults.headers.post['Content-Type'] = 'application/json';

request.interceptors.request.use(config => {
    return config;
}, err => {
    console.log(err)
});

request.interceptors.response.use(res => {
    return res.data || res;
}, err => {
    console.error(err)
});

export {request}