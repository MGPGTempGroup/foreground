import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import awagegedemo from '@/views/awagegedemo'
Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'home',
		component: home
	}, {
		path: '/awagegedemo',
		name: 'awagegedemo',
		component: awagegedemo
	}]
})
