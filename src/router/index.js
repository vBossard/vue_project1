import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/view/MainPage'
import Products from '@/view/Products'
import Social from '@/view/Social'
import Detail from '@/view/Detail'

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
      path: '/users',
      name: 'Social',
      component: Social
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
