import Vue from 'vue';
import router from './router'
import App from './App.vue'
import store from './store'

// 样式重置SCSS
import '@/assets/sass/reset.scss'

// ElementUI 主题 CSS
import '../theme/index.css'

// velocity动画
import 'velocity-animate'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
