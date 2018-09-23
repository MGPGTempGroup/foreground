import Vue from 'vue';
import router from './router'
import App from './App.vue'

import '@/assets/sass/reset.scss'
import '../theme/index.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
