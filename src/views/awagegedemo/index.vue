<template>
	<main class="container">
		<swiper :options="swiperOption" class="main-swiper">
			<swiper-slide><img src="@/assets/images/banner/Home_Hero_1.1.gif">
				<h2>&nbsp;One step ahead.</h2>
			</swiper-slide>

			<swiper-slide><img src="@/assets/images/banner/Home_Hero_1.1.gif">
				<h2>&nbsp;One step ahead.</h2>
			</swiper-slide>

			<swiper-slide><img src="@/assets/images/banner/Home_Hero_1.1.gif">
				<h2>&nbsp;One step ahead.</h2>
			</swiper-slide>

			<swiper-slide><img src="@/assets/images/banner/Home_Hero_1.1.gif">
				<h2>&nbsp;One step ahead.</h2>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</swiper>
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
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						bulletClass: 'my-bullet',
						bulletActiveClass: 'my-bullet-active'
					}
				}
			}
		},
		name: 'awagegedemo'
	}
</script>

<style scoped lang="scss">
	.container {
		.swiper-container {
			width: 100%;

			.swiper-slide {
				img {
					width: 100%;
				}

				h2 {
					position: absolute;
					top: 50%;
					width: 100%;
					z-index: 100;
					margin: 0;
					font-size: 312.5%;
					color: white;
					text-align: center;
					line-height: 50px;
					margin-top: -25px;
				}
			}

			.swiper-pagination {
				.my-bullet {
					width: 100px;
					height: 8px;
					background: #fff;
				}

				.my-bullet-active {
					background: #eee;
				}
			}

		}
	}
</style>
