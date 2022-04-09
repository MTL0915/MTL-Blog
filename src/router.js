import Router from 'vue-router'
 
//组件模块
import Home from './views/home'
import Notes from './views/notes'
import Detail from './views/detail'
import allCategory from './views/allCategory'
import pcCategory from './views/pcCategory'
import phoneCategory from './views/phoneCategory'
import weChatCategory from './views/weChatCategory'
 
 
export default new Router({
  mode:'history',
  routes: [
    { 
      path: '/',
      redirect: '/home/allCategory' 
    },
    { 
      path: '/home',
      redirect: '/home/allCategory' 
    },
    { 
      path: '/home', 
      name: 'home', 
      component: Home,
      children:[
        {
          path: 'allCategory',
          component: allCategory
        },
        {
          path: 'pcCategory',
          component: pcCategory
        },
        {
          path: 'phoneCategory',
          component: phoneCategory
        },
        {
          path: 'weChatCategory',
          component: weChatCategory
        }
      ] 
    },
    {
      path: '/notes',
      name: 'notes', 
      component: Notes
    },
    { 
      path: '/detail', 
      name: 'detail', 
      component: Detail
    }
  ]
})