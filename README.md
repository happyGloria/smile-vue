# smile-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 1. 依赖于vant
1. 安装
```
npm install vant --save --registry=https://registry.npm.taobao.org 
```
2. 使用vant

(1). 全局引入 （不建议此方法引入，首屏打开时会比较慢，且增加打包体积）
```
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)
```
(2). 按需引入 
  1). 安装babel-plugin-import插件
  ```
  npm i -D babel-plugin-import 
  ```
  2). 在.babelrc中配置plugins
  ```
  "plugins": [
      "transform-vue-jsx", 
      "transform-runtime",
      ["import",{"libraryName":"vant","style":true}]
    ]
  ```
  3). 使用方式
  ```
  import { Button } from 'vant'
  Vue.use(Button)
  <van-button size="mini"></van-button>
  ```
## 2. 使用easy-mock模拟数据

以前做项目的时候，我都是自己手动模拟数据，利用请求拦截，从而封装了一套接口管理工具，详见代码目录下的service文件夹。
采用这种方式，使用本地数据时，需要将fetch.js中的Test改成!0，在于后端联调时，需要配置config/index.js中的proxyTable
```
proxyTable: {
  '/api': {
    target: 'http://192.168.12.85',
    pathRewrite: {
      '^/api': '/'   //需要rewrite重写
    }
  }
}
```

在做该项目的时候，使用了[Easy Mock](www.easy-mock.com)，Easy Mock具有如下优势：

- 1. 支持跨域
- 2. 支持mock.js语法
- 3. 支持Swagger: [Swagger](https://swagger.io)是一个规范和完整的框架，用于生成、描述、调用和可视化 RESTful 风格的 Web 服务。

具体请[参考掘金文章学习](https://juejin.im/post/58ff1fae61ff4b0066792f6e)

在项目中的使用方式：

1. 在config目录下的 dev.env.js和 pro.env.js
  ```
  // dev.env.js
  module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: 'https://www.easy-mock.com/mock/5b8e03a7ae6b714d1bc70006/SmileVue'
  })

  // pro.env.js
  module.exports = {
    NODE_ENV: '"production"',
    BASE_API: '"https://prod-xxx"',
  }
  ```

  这是在以下情景需求产生的：
  1）. 线上或者测试环境接口的base_url不一样；
  2）. 本地使用了 如easy-mock 这种模拟数据，到线上环境想用公司的生产环境数据；


2. 在axios封装拦截器
```
axiosObj = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})
```
下面说一下，项目中我管理接口的方式
1. api.js 项目中所有接口列表 
  返回一个二维数组，数组中的每一项是 [自定义接口名称， 接口路径， 请求方式]
2. fetch.js 针对axios进行封装， 统一处理拦截器和响应
3. 在/pages 中使用：Service.getIndex(params).then(r => {})








