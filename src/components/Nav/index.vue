<template>
	<nav v-show="show" class="container">
		<el-menu :default-active="activeIndex" class="el-menu-container" :mode="mode || 'vertical'" @select="handleSelect"
		 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-submenu href="//www.baidu.com" index="1">
				<template slot="title"> Property Management </template>
				<el-menu-item index="1-1">
					<router-link tag="li" to="/landlords"> Landlords </router-link>
				</el-menu-item>
				<el-menu-item index="1-2">
					<router-link tag="li" to="/login"> Members Login </router-link>
				</el-menu-item>
				<el-menu-item index="1-3">
					<router-link tag="li" to="/prospective-tenants"> Prospective Tenants </router-link>
				</el-menu-item>
				<el-menu-item index="1-4">
					<router-link tag="li" to="/current-tenants">Current Tenants</router-link>
				</el-menu-item>
				<el-menu-item index="1-5">
					<router-link tag="li" to="/areas-we-serve">Areas We Serve</router-link>
				</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"> Projects </template>
				<el-menu-item index="2-1">
					<router-link tag="li" to="/project-marketing">Project Marketing</router-link>
				</el-menu-item>
				<el-menu-item index="2-2">
					<router-link tag="li" to="/project-leasing">Project Leasing</router-link>
				</el-menu-item>
				<el-menu-item index="2-3">
					<router-link tag="li" to="/past-success">Past Success</router-link>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="3">
				<router-link tag="li" to="/commercial"> Commercial </router-link>
			</el-menu-item>
			<el-submenu index="4">
				<template slot="title">Buy</template>
				<el-menu-item index="4-1">
					<router-link tag="li" to="/new-developments">New Developments</router-link>
				</el-menu-item>
				<el-menu-item index="4-2">
					<router-link tag="li" to="/buy-residential">Buy Residential</router-link>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="5">
				<router-link tag="li" to="/renting"> Rent </router-link>
			</el-menu-item>
			<el-menu-item index="6">
				<router-link tag="li" to="/selling"> Sell </router-link>
			</el-menu-item>
			<el-menu-item index="7">
				<router-link tag="li" to="/contact-us"> Contact Us </router-link>
			</el-menu-item>
			<el-submenu index="8">
				<template slot="title"> About Us </template>
				<el-menu-item index="8-1">
					<router-link tag="li" to="/about-us-team">Team</router-link>
				</el-menu-item>
				<el-menu-item index="8-2">
					<router-link tag="li" to="/about-us-testimonials">Testimonials</router-link>
				</el-menu-item>
				<el-menu-item index="8-3">
					<router-link tag="li" to="/about-us-headoffice">headoffice</router-link>
				</el-menu-item>
				<el-menu-item index="8-4">
					<router-link tag="li" to="/about-us-careers">Careers</router-link>
				</el-menu-item>
			</el-submenu>
			<el-menu-item index="9">
				<router-link tag="li" to="/industry-updates"> Industry Updates </router-link>
			</el-menu-item>
			<el-menu-item index="10">
				<router-link tag="li" to="/we-speak-your-language"> 说您的语言 </router-link>
			</el-menu-item>
		</el-menu>
	</nav>
</template>

<script>
	export default {
		name: 'navigation',
		props: {
			mode: String,
			show: {
				type: Boolean,
				defaults: true
			}
		},
		data() {
			return {
				activeIndex: '1'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//	console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped lang="scss" >
  .container {
    background-color: #535B63;
  }
  .el-menu-container {
    margin: 0 auto;
    border-bottom: 0px !important;
  }
  .el-menu {
    border-right: 0px;
  }
</style>
