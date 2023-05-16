import axios from 'axios';
const Axios = axios.create({
    baseURL: '/sspai',
    timeout: 20000
})
export default Axios
// // import React from 'react';
// import axios from 'axios';
// // 把 axios 添加到类组件的原型中去（类组件每次使用时就不需要额外引入了）
// // React.Component.prototype.$http = axios;
// // React.Component.prototype.$qs = qs;
// // 全局 axios 默认值
// // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
// // axios.defaults.baseURL = 'https://some-domain.com/api/';
// axios.defaults.baseURL = '/sspai';
// // `timeout` 指定请求超时的毫秒数。
// // 如果请求时间超过 `timeout` 的值，则请求会被中断
// axios.defaults.timeout = 20000;
// axios.defaults.headers = {
//     'Access-Token': localStorage.getItem("Token") || '',
// };
// // axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// // 请求响应拦截器（比如：展示隐藏风火轮，处理token……）
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     // console.log("在发送请求之前做些什么", config);
//     if (localStorage.getItem("Token")) {
//         config.headers['Access-Token'] = localStorage.getItem("Token")
//     }
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// })

// axios.interceptors.response.use(function (response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     // console.log("对响应数据做点什么",response);
//     if (response.data.token) {
//         localStorage.setItem("Token", response.data.token)
//     }
//     return response;
// }, function (error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
// });

// export default Axios