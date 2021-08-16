import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import Home from './views/home'
import Blog from './views/blog'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/blog', name: 'blog', component: Blog }
  ]
})