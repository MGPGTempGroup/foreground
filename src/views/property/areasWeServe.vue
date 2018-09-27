<template>
	<div class="areas-we-serve">
		<main-swiper></main-swiper>
		<div class="content">
			<el-card class="content-inner">
				<el-row class="content-desc">
					<el-col class="content-inner-desc">
						<p>
							At Melbourne Real Estate we understand that when you are looking to buy, rent or invest in real estate it’s a
							big decision. It is important to know and understand not only the market place but also who lives in the area,
							what schools, public transport and activities the areas has to offer.
						</p>
						<p>
							Below you will find a selection of some of Melbourne’s best suburbs, to see a full list of areas we serve Click
							Here. If you have any questions, feel free to contact one of our agents!
						</p>
					</el-col>
				</el-row>
			</el-card>
			<!-- 服务地区列表 -->
			<el-row gutter="20">
				<main-box v-for="(item,index) in 9" :key="index"></main-box>
			</el-row>
		</div>
	</div>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import MainBox from '@/components/MainBox'
	export default {
		name: 'areas-we-serve-page',
		components: {
			MainSwiper,
			MainBox
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.areas-we-serve {
		.content {
			margin-top: 35px;
			@include media-md{
				margin-top: 30px;
				padding:0 30px;
			}
			@include media-sm{
				margin-top: 20px;
				padding:0 20px;
			}
			@include media-xs{
				margin-top: 10px;
				padding:0 10px;
			}
			&-inner {
				margin: 35px 0;
				@include media-md{
					margin: 30px 0;
					padding:0 30px;
				}
				@include media-sm{
					margin: 20px 0;
					padding:0 20px;
				}
				@include media-xs{
					margin: 10px 0;
					padding:0 10px;
				}

				&-desc {
					>p {
						font-size: 18px;
						color: #343434;
					}

					@include media-xs {
						padding: 0px 10px !important;
					}

					@include media-sm {
						padding: 0px 20px !important;
					}

					@include media-md {
						padding: 0px 20px !important;
					}

					@include media-custom(1200px, 1330px) {
						padding: 0px 30px !important;
					}

					@include media-sm-down {
						img {
							width: 100%;
						}
					}
				}
			}
		}

		//     .areas-list {
		//       margin-top: 20px;
		//       padding-bottom: 20px;
		//       &-item {
		//         > * {
		//           box-shadow: 0px 0px 10px #ccc;
		//         }
		//         @include media-xs {
		//           padding: 0px 20px;
		//         }
		//         @include media-sm {
		//           padding: 0px 20px;
		//           &:nth-of-type(2n) {
		//             padding-left: 10px;  
		//           }
		//           &:nth-of-type(2n + 1) {
		//             padding-right: 10px;
		//           }
		//         }
		//         @include media-md {
		//           padding: 0px 20px;
		//         }
		//         @include media-lg {
		//           padding: 0px 10px;
		//           
		//         }
		//         @include media-custom(1200px, 1300px) {
		//           padding: 0px 20px !important;
		//         }
		//       }
		//     }
	}
</style>
