<template>
	<nav v-show="show" class="container">
		<el-menu
			:unique-opened="true"
			:default-active="activeIndex"
			class="el-menu-container"
			:mode="mode || 'vertical'"
			@select="handleSelect"
		 	background-color="#545c64"
			text-color="#fff"
			:router="true"
			active-text-color="#ffd04b">
			<el-menu-item v-show="false" index="/home"> Sell </el-menu-item>
			<el-submenu index="1">
				<template slot="title"> Property Management </template>
				<el-menu-item index="/landlords"> Landlords </el-menu-item>
				<el-menu-item index="/prospective-tenants"> Prospective Tenants </el-menu-item>
				<el-menu-item index="/current-tenants"> Current Tenants </el-menu-item>
				<el-menu-item index="/areas-we-serve"> Areas We Serve </el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"> Projects </template>
				<el-menu-item index="/project-marketing"> Project Marketing </el-menu-item>
				<el-menu-item index="/project-leasing" > Project Leasing </el-menu-item>
				<el-menu-item index="/past-success"> Past Success </el-menu-item>
			</el-submenu>
			<el-menu-item index="/commercial"> Commercial </el-menu-item>
			<el-submenu index="4">
				<template slot="title"> Buy </template>
				<el-menu-item index="/new-developments"> New Developments </el-menu-item>
				<el-menu-item index="/buy-residential"> Buy Residential </el-menu-item>
			</el-submenu>
			<el-menu-item index="/renting"> Rent </el-menu-item>
			<el-menu-item index="/selling"> Sell </el-menu-item>
			<el-menu-item index="/contact-us"> Contact Us </el-menu-item>
			<el-submenu index="5">
				<template slot="title"> About Us </template>
				<el-menu-item index="/about-us-team"> Team </el-menu-item>
				<el-menu-item index="/about-us-testimonials"> Testimonials </el-menu-item>
				<el-menu-item index="/about-us-headoffice"> headoffice </el-menu-item>
				<el-menu-item index="/about-us-careers"> Careers </el-menu-item>
			</el-submenu>
			<el-menu-item index="/industry-updates"> Industry Updates </el-menu-item>
			<el-menu-item index="/we-speak-your-language"> 说您的语言 </el-menu-item>
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
			},
			'background-color': {},
		},
		data() {
			return {
				activeIndex: '1'
			};
		},
		watch: {
			'$route.fullPath': function (val) {
				this.activeIndex = val
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				// 是否移动端导航
				if (this.mode == 'vertical') {
					setTimeout(() => {
						this.$emit('update:show', false)
					}, 200)
				}
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
