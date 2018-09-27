<template>
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
		<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
		<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
	</swiper>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		name: 'main-swiper',
		data() {
			return {
				swiperOption: {
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						bulletClass: 'my-bullet',
						bulletActiveClass: 'my-bullet-active'
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				}
			}
		}
	}
</script>
<style lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	.main-swiper {
		width: 100%;
		.swiper-slide {
			height:auto;
			img {
				width: 100%;
				height: 100%;
			}

			h2 {
				position: absolute;
				top: 50%;
				width: 100%;
				z-index: 100;
				margin: 0;
				font-size: 312.5%;
				@include media-xs {
					font-size: 180%;
				}
				color: white;
				text-align: center;
				line-height: 50px;
				margin-top: -25px;
			}
		}

		.my-bullet {
			display: inline-block;
			width: 50px;
			height: 3px;
			margin: 0 5px;
			background: #fff;
			opacity: .3;
		}

		.my-bullet-active {
			opacity: 1;
		}

		.swiper-button {
			&-prev, &-next {
				@include media-xs {
					width: 18px;
					height: 35px;
					background-size: 18px 35px;
				}
			}
			&-prev {
				left: 3%;
			}
			&-next {
				right: 3%;
			}
		}


	}
</style>
