import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import awagegedemo from '@/views/awagegedemo'
import landlords from '@/views/property/landlords'
import prospectiveTenants from '@/views/property/prospectiveTenants'
import currentTenants from '@/views/property/currentTenants'

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
		name: 'landlords',
		component: landlords
	},
	{
		path: '/prospective-tenants',
		name: 'prospectiveTenants',
		component: prospectiveTenants
	},
	{
		path: '/current-tenants',
		name: 'currentTenants',
		component: currentTenants
	},
	{
		path: '/awagegedemo',
		name: 'awagegedemo',
		component: awagegedemo
	}]
})
