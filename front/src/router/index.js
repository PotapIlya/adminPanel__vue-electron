import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index')
  },
  {
    path: '/database',
    name: 'IndexDatabase',
    component: () => import('../views/database/Index')
  },
  {
    path: '/database/create',
    name: 'CreateDatabase',
    component: () => import('../views/database/Create')
  },


]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
