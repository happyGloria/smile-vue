import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'
import {
  Toast
} from 'vant'
Vue.use(Toast)

import listApis from './api.js'
import Mock from './mock/mock.js'

Vue.prototype.$http = axios

var Test = !1,
  Service = {},
  axiosObj = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 30000
  })

axiosObj.interceptors.request.use((config) => {
  return config
}, (error) => {
  Toast({
    position: 'top',
    message: '错误的传参',
    type: 'error',
    duration: 1000
  })
  Promise.reject(error)
})
axiosObj.interceptors.response.use(response => {
  const res = response.data
  if (res.retCode !== 1) {
    Toast({
      position: 'top',
      message: res.err,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(res)
  } else {
    return Promise.resolve(res)
  }
}, err => {
  Toast({
    position: 'top',
    message: err,
    type: 'error',
    duration: 3 * 1000
  })
  return Promise.reject(err)
})

function formatURL(URL, params) {
  var reg = /\/\{(.+?)\}/g
  if (reg.test(URL)) {
    return URL.replace(reg, ($0, $1) => {
      return '/' + params[$1]
    })
  }
  return URL
}

listApis().forEach((v) => {
  if (Service[v[0]]) {
    // Message('接口名称:' + v[0] + '已被占用，请修改！', 'fail')
    return false
  }
  Service[v[0]] = (params) => {
    var settings = {
      url: formatURL(v[1], params),
      method: v[2],
      data: params || {}
    }
    /* if (v[3] === 'blob') {
      settings.responseType = v[3]
    } */
    /* if (v[3] === 'text/plain') {
      settings.data = JSON.stringify(params)
      settings.headers = {
        'Content-type': v[3]
      }
    } */
    return Test ? Mock(v[0], settings) : axiosObj(settings)
  }
})

export default window.Service = Service
