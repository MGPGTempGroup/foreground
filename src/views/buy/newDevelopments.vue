<template>
	<main class="container">
		<div class="img-box">
			<img src="https://www.melbournerealestate.com.au/wp-content/uploads/2015/09/External-V1_View-from-Dyer-Lane-Copy.jpg">
		</div>
		<el-row>
			<main-box v-for="(item,index) in 9" :key="index"></main-box>
		</el-row>
		<div class="load-more">Load More</div>
	</main>
</template>

<script>
	import MainBox from '@/components/MainBox'
	export default {
		components: {
			MainBox
		},
		name: 'new-developments-page'
	}
</script>

<style scoped lang="scss">
	.container {
		>.img-box {
			position: relative;
			padding-bottom: 40%;
			padding-left: 100%;
			margin-bottom: 2%;
			width: 0;
			height: 0;

			>img {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;

			}
		}

		>.load-more {
			cursor: pointer;
			display: block;
			width: 110px;
			margin: 10px auto;
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
