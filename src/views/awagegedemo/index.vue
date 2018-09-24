<template>
	<main class="container">
		<main-swiper></main-swiper>
		<el-row>
			<house-box v-for="(item,index) in 3" :key="index"></house-box>
		</el-row>
		<el-row>
			<staff-box v-for="(item,index) in 4" :key="index"></staff-box>
		</el-row>
		<!-- <el-row :gutter="20">
			<main-box v-for="(item,index) in 3" :key="index"></main-box>
		</el-row> -->
	</main>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import HouseBox from '@/components/HouseBox'
	import MainBox from '@/components/MainBox'
	import StaffBox from '@/components/StaffBox'
	export default {
		components: {
			MainSwiper,
			HouseBox,
			MainBox,
			StaffBox
		},
		data() {
			return {

			}
		},
		name: 'awagegedemo'
	}
</script>

<style scoped lang="scss">
	.container {}
</style>
