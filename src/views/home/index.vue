<template>
	<main class="container">
		<main-swiper></main-swiper>
		<el-row  class="content">
			<main-box v-for="(item,index) in 9" :key="index"></main-box>
		</el-row>
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
	.container {}
</style>


<style>
</style>
