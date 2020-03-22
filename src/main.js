import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store'
// 将mouse事件转换成对应的touch事件，使得组件能够在桌面端使用
import 'touch-emulator';
import axios from './assets/js/axiosConfig.js';
import urls from './assets/js/urlConfig';
import 'vant/lib/index.css';
import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);
Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$axios = axios;
Vue.prototype.$url = urls;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');