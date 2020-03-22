import Vue from 'vue';
import axios from 'axios';
import Qs from 'qs';
Vue.use(Qs);
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '';
const Axios = axios.create({
    baseURL: baseUrl, // 配置axios请求的地址
    timeout: 10000,
    withCredentials: true,
    crossDomain: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': ''
    },
    // transformRequest(data) {
    //     return Qs.stringify(data, {
    //         arrayFormat: 'brackets'
    //     })
    // },
    paramsSerializer(params) {
        return Qs.stringify(params, {
            arrayFormat: 'brackets'
        })
    },
});
// axios.defaults.timeout = 10000; // 超时时间
// axios.defaults.baseURL = process.env.BASE_URL; // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.crossDomain = true;
// axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // 设置请求头为 Authorization


let loading; //创建Loading 的实例
loading = {
    start: () => {
        console.log('loadingStart');
    },
    close: () => {
        console.log('loadingClose');
    }
};

//请求或响应被处理之前拦截它们  可以设置token信息
Axios.interceptors.request.use(
    config => {
        //loading开始
        const token = localStorage.getItem('Authorization');
        loading.start();
        if (token) {
            config.headers.Authorization = token
        }
        return config;
    },
    error => {
        loading.close();
        return Promise.reject(error);
    }
);

// 配置响应拦截器
Axios.interceptors.response.use(
    res => {
        loading.close();
        // Vue.prototype.masgsss({""})
        //这里面写所需要的代码 
        const data = res.data
        if (data.status) {
            return res;
        } else {
            if (data.code == '401') {
                console.log(data.msg);
                localStorage.setItem("Authorization", "")
            } else if (data.code == '404') {
                console.log('路径错误');
            } else if (data.code == '403') {
                console.log('没有权限');
            }
        }
    },
    error => {
        loading.close();
        if (error.response.status === 404) {
            console.log(
                '【' +
                error.response.status +
                '】API接口路径错误：' +
                error.request.responseURL
            );
        } else if (error.response.status === 504) {
            console.log(
                '【' +
                error.response.status +
                '】请求超时：' +
                error.request.responseURL
            );
        }
        return Promise.reject(error);
    }
);

export default Axios;