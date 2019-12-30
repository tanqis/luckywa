// import axios from 'axios'

// axios.defaults.timeout = 10000; // 超时时间
// // axios.defaults.baseURL = appConfig.xhr.baseURL; // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.crossDomain = true;
// axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// // axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

// //整理数据
// axios.defaults.transformRequest = function (data) {
//     //data = Qs.stringify(data);
//     data = JSON.stringify(data);
//     return data;
// };

// let loading; //创建Loading 的实例
// loading = {
//     start: () => {
//         console.log('loadingStart')
//     },
//     close: () => {
//         console.log('loadingClose')
//     },

// }

// //配置发送请求前的拦截器 可以设置token信息 
// axios.interceptors.request.use(config => {
//     //loading开始
//     loading.start();
//     // if (cookie.get("token")) {
//     //     //用户每次操作，都将cookie设置成2小时
//     //     cookie.set("token", cookie.get("token"), 1 / 12)
//     //     cookie.set("name", cookie.get("name"), 1 / 12)
//     //     config.headers.token = cookie.get("token");
//     //     config.headers.name = cookie.get("name");
//     // }
//     return config;
// }, error => {
//     loading.close();
//     return Promise.reject(error);
// });

// // 配置响应拦截器 
// axios.interceptors.response.use(res => {
//     loading.close();
//     //这里面写所需要的代码

//     //     if (response.data.resultCode=="404") {
//     //         console.log("response.data.resultCode是404")
//     //         // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//     // //      cookie.del("ticket")
//     // //      window.location.href='http://login.com'
//     //         return
//     //     }else{
//     //         return response;
//     //     } 
//     if (res.data.code == '401') {
//         //全局登陆过滤，当判读token失效或者没有登录时 返回登陆页面
//         console.log("没有登陆")
//     } else if (res.data.code == '404') {
//         console.log("路径错误")
//     } else if (res.data.code == '403') {
//         console.log("没有权限")
//     }
//     return res;
// }, error => {
//     loading.close();
//     if (error.response.status === 404) {
//         console.log("【" + error.response.status + "】API接口路径错误：" + error.request.responseURL)
//     } else if (error.response.status === 504) {
//         console.log("【" + error.response.status + "】请求超时：" + error.request.responseURL)
//     }
//     return Promise.reject(error);
// })

// export default axios