<template>
	<main class="home">
		<main-swiper></main-swiper>
		<div class="content">
			<el-row :gutter="20">
				<main-box title="Looking to Buy?" to="/buy-residential" />
				<main-box title="Looking to Rent?" to="/renting" />
				<main-box title="New Development" to="/new-developments" />
				<main-box title="Contacts Us" to="/contact-us" />
				<main-box title="Testimonials" to="/about-us-testimonials" />
				<main-box title="MGPG Headquarters" to="/about-us-headoffice" />
				<main-box title="Team" to="/about-us-team" />
				<main-box title="Careers" to="/about-us-careers" />
				<main-box title="About Us" />
			</el-row>
		</div>
	</main>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import MainBox from '@/components/MainBox'
	export default {
		components: {
			MainSwiper,
			MainBox
		},
		name: 'home-page'
	}
</script>

<style scoped lang="scss">
	
		@import '@/assets/sass/mixins/responsive.scss';
	.home {
		.content {
			margin-top: 35px;

			@include media-md {
				margin-top: 30px;
			}

			@include media-sm {
				margin-top: 20px;
			}

			@include media-xs {
				margin-top: 10px;
				padding: 0 10px;
			}
		}
	}
</style>


<style>
</style>
