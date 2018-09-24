import Vue from 'vue';
import router from './router'
import App from './App.vue'

import '@/assets/sass/reset.scss'
import '../theme/index.css'

import 'velocity-animate' //引入velocity动画

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
