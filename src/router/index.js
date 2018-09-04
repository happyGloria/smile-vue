import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/pages/shoppingMall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    }
  ]
})
