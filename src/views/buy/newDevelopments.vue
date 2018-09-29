<template>
	<main class="container">
		<top-info img="https://www.melbournerealestate.com.au/wp-content/uploads/2015/09/External-V1_View-from-Dyer-Lane-Copy.jpg"></top-info>
		<div class="content">
			<el-row gutter='20'>
				<main-box to="/new-developments/little-oxford" v-for="(item,index) in 9" :key="index"></main-box>
			</el-row>
			<div class="load-more">Load More</div>
		</div>
	</main>
</template>

<script>
	import TopInfo from '@/components/TopInfo'
	import MainBox from '@/components/MainBox'
	export default {
		components: {
			TopInfo,
			MainBox
		},
		name: 'new-developments-page'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.container {
		padding-bottom: 20px;
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

		.load-more {
			cursor: pointer;
			display: block;
			width: 110px;
			margin: 15px auto;
			text-align: center;
			line-height: 40px;
			background: #fff;
			border-radius: 5px;

			&:hover {
				color: #fff;
				background: #ff6600;
			}
		}
	}
</style>


<style>
</style>
