import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/view/MainPage'
import Products from '@/view/Product'
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
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
  ]
})
