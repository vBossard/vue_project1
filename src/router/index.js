import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/view/MainPage'
import Product from '@/view/Product'
import Social from '@/view/Social'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
  ]
})
