<template>
	<main class="home">
		<main-swiper></main-swiper>
		<div class="content">
			<el-row :gutter="20">
				<main-box v-for="(item,index) in 9" :key="index"></main-box>
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
