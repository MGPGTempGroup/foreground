import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import awagegedemo from '@/views/awagegedemo'

// 物业管理服务相关页面
import landlords from '@/views/property/landlords'
import prospectiveTenants from '@/views/property/prospectiveTenants'
import currentTenants from '@/views/property/currentTenants'
import areasWeServe from '@/views/property/areasWeServe'

// 方案/项目相关页面
import marketing from '@/views/projects/marketing'
import leasing from '@/views/projects/leasing'

// 商业/广告相关页面
import commercial from '@/views/commercial'

// 联系我们页面
import contactUs from '@/views/contactUs'

// 关于我们相关页面
import headoffice from '@/views/aboutUs/headoffice'
import careers from '@/views/aboutUs/careers'
import team from '@/views/aboutUs/team'

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
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
			path: '/areas-we-serve',
			name: 'areasWeServe',
			component: areasWeServe
		},
		{
			path: '/project-marketing',
			name: 'projectMarketing',
			component: marketing
		},
		{
			path: '/project-leasing',
			name: 'projectLeasing',
			component: leasing
		},
		{
			path: '/commercial',
			name: 'commercial',
			component: commercial
		},
		{
			path: '/contact-us',
			name: 'contactUs',
			component: contactUs
		},
		{
			path: '/about-us-headoffice',
			name: 'headoffice',
			component: headoffice
		},
		{
			path: '/about-us-careers',
			name: 'careers',
			component: careers
		},{
			path: '/about-us-team',
			name: 'team',
			component: team
		},
		{
			path: '/awagegedemo',
			name: 'awagegedemo',
			component: awagegedemo
		}
	]
})
