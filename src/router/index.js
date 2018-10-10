import Vue from 'vue'
import Router from 'vue-router'

// Home
const home = () => import('@/views/home')

// 物业管理服务相关
const landlords = () => import('@/views/property/landlords')
const prospectiveTenants = () => import('@/views/property/prospectiveTenants')
const currentTenants = () => import('@/views/property/currentTenants')
const areasWeServe = () => import('@/views/property/areasWeServe')
const areasDetail = () => import('@/views/property/areasDetail')

// 方案/项目相关页面
const marketing = () => import('@/views/projects/marketing')
const leasing = () => import('@/views/projects/leasing')
const success = () => import('@/views/projects/success')

// 购买
const newDevelopments = () => import('@/views/buy/newDevelopments')
const buyResidential = () => import('@/views/buy/buyResidential')
const residentialDetail = () => import('@/views/buy/residentialDetail')
const newDevelopmentsDetail = () => import('@/views/buy/newDevelopmentsDetail')

// 租房
const renting = () => import('@/views/rent')

// 出售
const selling = () => import('@/views/sell')

// 商业/广告相关页面
const commercial = () => import('@/views/commercial')

// 联系我们页面
const contactUs = () => import('@/views/contactUs')

// 关于我们相关页面
const headoffice = () => import('@/views/aboutUs/headoffice')
const careers = () => import('@/views/aboutUs/headoffice')
const team = () => import('@/views/aboutUs/team')
const staffDetail = () => import('@/views/aboutUs/staffDetail')
const testimonials = () => import('@/views/aboutUs/testimonials')

// 更新/升级
const industryUpdates = () => import('@/views/industryUpdates')
const industryUpdatesDetails = () => import('@/views/industryUpdates/details')

//用您的语言进行交流
const weSpeakYourlanguage = () => import('@/views/weSpeakYourlanguage')

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
			path: '/home',
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
			path: '/areas-we-serve/:area',
			name: 'areaDetail',
			component: areasDetail
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
		},{
			path: '/past-success',
			name: 'pastSuccess',
			component: success
		},
		{
			path: '/commercial',
			name: 'commercial',
			component: commercial
		},
		{
			path: '/new-developments',
			name: 'newDevelopments',
			component: newDevelopments
		},
		{
			path: '/new-developments/:name',
			name: 'newDevelopmentsDetail',
			component: newDevelopmentsDetail
		},
		{
			path: '/buy-residential',
			name: 'buyResidential',
			component: buyResidential
		},
		{
			path: '/buy-residential/:id',
			name: 'residentialDetail',
			component: residentialDetail
		},
		{
			path: '/selling',
			name: 'selling',
			component: selling
		}, {
			path: '/renting',
			name: 'renting',
			component: renting
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
		},
		{
			path: '/about-us-team',
			name: 'team',
			component: team
		},
		{
			path: '/about-us-team/:staffName',
			name: 'staffDetail',
			component: staffDetail
		},
		{
			path: '/about-us-testimonials',
			name: 'testimonials',
			component: testimonials
		},
		{
			path: '/industry-updates',
			name: 'industryUpdates',
			component: industryUpdates
		},
		{
			path: '/industry-updates/:title',
			name: 'industryUpdatesDetails',
			component: industryUpdatesDetails
		},
		{
			path: '/we-speak-your-language',
			name: 'weSpeakYourlanguage',
			component: weSpeakYourlanguage
		}
	]
})
