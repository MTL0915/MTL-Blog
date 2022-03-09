import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import Home from './views/home'
import Works from './views/works'
import Detail from './views/detail'
 
Vue.use(Router)
 
export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/works', name: 'works', component: Works},
    { path: '/detail', name: 'detail', component: Detail}
  ]
})