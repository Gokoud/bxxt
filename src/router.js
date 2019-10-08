import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from './components/navmenu/home.vue'
import table from './components/navmenu/table.vue'
import form from './components/sun/form.vue'
import login from './components/navmenu/login'
import help from './components/navmenu/help'
import notice_list from './components/navmenu/notice_list'


export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path :'/login',component: login },
    { path:'/table', component:table },
    { path: '/home/form', component:form, name: 'form'  },
    {path: '/help' ,component:help},
    { path :'/notice_list',component:notice_list }

    // {
    //   // path: '',
    //   // name: '',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
