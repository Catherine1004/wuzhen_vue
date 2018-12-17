import Vue from 'vue'
import Router from 'vue-router'

//1.引入自定义组件
import homeContainer from "./components/tabbar/homeContainer.vue"
import vacationContainer from './components/web/vacationContainer.vue'
import holidayContainer from './components/web/holidayContainer.vue'
import loginContainer from './components/tabbar/loginContainer.vue'
import indexContainer from './components/tabbar/indexContainer.vue'
import tourContainer from './components/web/tourContainer.vue'

Vue.use(Router)

//2.配置访问自定义组件路径
export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/home/vacation',component:vacationContainer},
    {path:'/home/holiday',component:holidayContainer},
    {path:'/index/login',component:loginContainer},
    {path:'/index',component:indexContainer},
    {path:'/home/tour',component:tourContainer}
  ]
})
