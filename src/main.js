import Vue from 'vue';
import router from './router'
import App from './App.vue'

import '@/assets/sass/reset.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
