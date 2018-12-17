import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

//引入mint-ui css 文件
import 'mint-ui/lib/style.css'
//引入mui css文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.min.css'
// import mui from './lib/mui/js/mui.js'
// Vue.prototype.mui = mui
// Vue.use(mui)
//完整引入mint-ui 组件库
import MintUI from "mint-ui"
Vue.use(MintUI)

//引入axios 
import axios from "axios"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

//创建Vuex实例对象
/*import Vuex from "vuex"
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{count:5},
  mutations:{
    increment(state,c){
      state.count+=parseInt(c);
    },
    substract(state){
      state.count--;
    },
    getters:{
      optCount:function(state){
        return state.count;
      }
    }
  }
})*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
