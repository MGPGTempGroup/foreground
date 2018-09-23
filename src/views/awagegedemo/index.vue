<template>
	<main class="container">
		<div class="carousel">
			<el-carousel class="carousel" :interval="5000" height="500px">
				<el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
					<img src="@/assets/images/banner/Home_Hero_1.1.gif" alt="">
					<h2>&nbsp;One step ahead.</h2>
				</el-carousel-item>
			</el-carousel>
		</div>
		<el-row :gutter="20">
			<house-box v-for="(item,index) in 3" :key="index"></house-box>
		</el-row>
		<el-row :gutter="20">
			<staff-box v-for="(item,index) in 4" :key="index"></staff-box>
		</el-row>
		<el-row :gutter="20">
			<main-box v-for="(item,index) in 3" :key="index"></main-box>
		</el-row>
	</main>
</template>

<script>
	import HouseBox from '@/components/HouseBox'
	import MainBox from '@/components/MainBox'
	import StaffBox from '@/components/StaffBox'
	export default {
		components: {
			HouseBox,
			MainBox,
			StaffBox
		},
		name: 'awagegedemo'
	}
</script>

<style scoped lang="scss">
	.container {
		.carousel {
			margin: 0 auto;
			margin-top: 50px;

			&-item {
				img {
					width: 100%;
					height: 100%;
				}

				h2 {
					position: absolute;
					top: 140px;
					z-index: 100;
					width: 100%;
					text-align: center;
					font-size: 50px;
					letter-spacing: 2px;
					text-shadow: 2px 2px 10px black;
					color: white;
				}
			}
		}
	}
</style>


<style>
</style>
