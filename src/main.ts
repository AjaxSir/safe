import Vue from 'vue'
import './plugins/axios'
import './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import './less/common.less'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'vCZU88Guz4BmAODWTm8k9BP0WlwId1V0'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
