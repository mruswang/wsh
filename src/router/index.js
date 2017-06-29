import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import details from '@/components/details'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',  //  消除url中#号作用
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
