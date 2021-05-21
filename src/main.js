import Vue from 'vue'
import App from './App.vue'

import { sync } from 'vuex-router-sync'

import router from './router/index';
import store from './store/index';


//同步状态到vuex
const unsync = sync(store, router);
console.log(unsync,'unsync', { moduleName: 'route' })


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
