import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'clientes',
    // route level code-splitting
    // this generates a separate chunk (clientes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clientes" */ '../views/ClientesView.vue')
  }
  ,
  {
    path: '/precios',
    name: 'precios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreciosView.vue')
  }
  ,
  {
    path: '/nosotros',
    name: 'nosotros',
    // route level code-splitting
    // this generates a separate chunk (nosotros.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NosotrosView.vue')
  }
  ,
  {
    path: '/contactos',
    name: 'contactos',
    // route level code-splitting
    // this generates a separate chunk (contactos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contactos" */ '../views/ContactosView.vue')
  }
  ,
  {
    path: '/demo',
    name: 'demo',
    // route level code-splitting
    // this generates a separate chunk (demo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demo" */ '../views/DemoView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     console.log('to', to);
  //     console.log('from', from);
  //     console.log('savedPosition', savedPosition);
  //     return {
  //       el: to.hash
  //     }
  //   }
  // },
  routes
})

export default router
