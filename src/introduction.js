import Vue from 'vue'
import Introduction from './Introduction.vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import '@/assets/sass/reset.scss'
import '@/assets/sass/fonts.scss'

Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  render: h => h(Introduction)
})