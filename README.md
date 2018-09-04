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
