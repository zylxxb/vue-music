import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView);
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/baidu_music_api'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
