import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // redirect:'/about/icon',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',  
   
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        path: 'Start',
        name: 'Start',
        component: () => import(/* webpackChunkName: "about" */ '../views/Start/start.vue')
      },
      {
        path: 'icon',
        name: 'Icon',
        component: () => import(/* webpackChunkName: "about" */ '../views/Icon/icon.vue')
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import(/* webpackChunkName: "about" */ '../views/Button/button.vue')
      },
      {
        path: 'link',
        name: 'Link',
        component: () => import(/* webpackChunkName: "about" */ '../views/Link/link.vue')
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import(/* webpackChunkName: "about" */ '../views/Radio/radio.vue')
      },
      {
        path: 'checkbox',
        name: 'CheckBox',
        component: () => import(/* webpackChunkName: "about" */ '../views/CheckBox/checkbox.vue')
      },
      {
        path: 'input',
        name: 'Input',
        component: () => import(/* webpackChunkName: "about" */ '../views/Input/input.vue')
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import(/* webpackChunkName: "about" */ '../views/Select/select.vue')
      },
      {
        path: 'skeleton',
        name: 'Skeleton',
        component: () => import(/* webpackChunkName: "about" */ '../views/Skeleton/skeleton.vue')
      },
      {
        path: 'alert',
        name: 'Alert',
        component: () => import(/* webpackChunkName: "about" */ '../views/Alert/alert.vue')
      },
      {
        path: 'image',
        name: 'Image',
        component: () => import(/* webpackChunkName: "about" */ '../views/Image/image.vue')
      },
      {
        path: 'pagination',
        name: 'Pagination',
        component: () => import(/* webpackChunkName: "about" */ '../views/Pagination/pagination.vue')
      },
      {
        path: 'popover',
        name: 'Popover',
        component: () => import(/* webpackChunkName: "about" */ '../views/Popover/popover.vue')
      },
      {
        path: 'infiniteScroll',
        name: 'InfiniteScroll',
        component: () => import(/* webpackChunkName: "about" */ '../views/InfiniteScroll/infiniteScroll.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
