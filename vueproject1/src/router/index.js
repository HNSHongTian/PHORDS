import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Function from '@/components/function'
import User from '@/components/user'
import Visitor from '@/components/visitor'
import Login from '@/components/login'
import Regist from '@/components/regist'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/function',
      name: 'function',
      component: Function
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/visitor',
      name:'visitor',
      component:Visitor
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    }
  ]
})
