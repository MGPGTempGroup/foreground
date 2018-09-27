<template>
	<main class="container">
		<top-info img="https://www.melbournerealestate.com.au/wp-content/uploads/2015/09/External-V1_View-from-Dyer-Lane-Copy.jpg"></top-info>
		<el-row class="content">
			<main-box v-for="(item,index) in 9" :key="index"></main-box>
		</el-row>
		<div class="load-more">Load More</div>
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
	.container {
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
