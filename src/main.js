import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//elemntui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


