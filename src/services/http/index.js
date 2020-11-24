/**
@module services
@for axios
*/
import axios from "axios";
import { Message } from "element-ui"
import _ from "lodash";
import { showLoading, hideLoading } from 'loading' 
import QS from 'qs'
import config from './config';

import store from '@/store'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? `/` : '/apis',
    headers: {
        get: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': 'Basic MTM6ZGhk'   // 根据不同的系统id生成
        }
      },
      timeout: 10000, // 请求超时时间

})



/**
 * 统一处理接口错误的消息提示，防止在多个接口返回结果下，显示重复的提示
 */

// 添加请求拦截器
axios.interceptors.request.use( config => {
    const token = window.sessionStorage.getItem("mosToken");
    token && (config.headers['ID-Token'] = token)
    return config
}, function(error) {
    return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function(res) {
    let code = res.code;
    switch (code) {
        case 0:
            {
                return res;

            }
        case 1001:
            {
                let login_url = res.data.login_uri;
                window.location.href = decodeURIComponent(login_url + '?from=' + window.location);
                return res;
            }
        case 1002:
            {
                let login_url = res.data.login_uri;
                window.location.href = decodeURIComponent(login_url + '?from=' + window.location);
                return res;

            }
        case 1003:
            {
                Message.error("权限异常，无法访问");
                return res;
            }
        default:
            {
                Message.error(res.message);
                return res;

            }
    }
}, function(error) {
    return Promise.reject(error);
})

/**
 * 返回失败提示函数
 * @method error
 * @param {Object} response 请求失败返回数据
 */
function error(response) {
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response;
    } else {
        Message.error('数据获取错误')
    }
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        service.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         service.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

export default { get, post };