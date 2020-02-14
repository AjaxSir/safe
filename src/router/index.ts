import Vue from 'vue'
import VueRouter from 'vue-router'
const _import = (file:string) => () => import(`@/views/${file}`)
Vue.use(VueRouter)

const asyncRoutes = [
  // {
  //   path: '*',
  //   name: 'layout',
  //   component: _import('layout/index'),
  //   children: [
  //     {
  //       path: ''
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Layout',
    component: _import('layout/index'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: _import('home')
      },
      {
        path: '/stranger',
        name: 'stranger',
        component: _import('stranger/index')
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: _import('monitor/index')
      },
      {
        path: '/important',
        name: 'important',
        component: _import('important/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: asyncRoutes
})

export default router
