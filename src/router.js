import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import Home from './views/home'
import Works from './views/works'
 
Vue.use(Router)
 
export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/works', name: 'works', component: Works}
  ]
})