import Vue from 'vue';
import router from './router';
import App from './App.vue';
// 将mouse事件转换成对应的touch事件，使得组件能够在桌面端使用
// import '@vant/touch-emulator';
// import axios from './assets/js/axiosConfig.js';
import urls from './assets/js/urlConfig';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.prototype.$url = urls;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');