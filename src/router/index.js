import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import awagegedemo from '@/views/awagegedemo'
import landlords from '@/views/property/landlords'
Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'home',
		component: home
	},
	{
		path: '/landlords',
		name: 'home',
		component: landlords
	},
	{
		path: '/awagegedemo',
		name: 'awagegedemo',
		component: awagegedemo
	}]
})
