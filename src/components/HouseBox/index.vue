<template>
	<el-col :sm="12" :md="8" :lg="8" class="hbox-container">
		<router-link class="hbox-link" :to="to" >
			<el-card style="border: 0px;" shadow="hover" body-style="padding: 0px; padding-bottom: 8px;" >
				<div class="main">
					<div class="img-box">
						<img src="https://www.melbournerealestate.com.au/wp-content/uploads/2018/05/White-St-Thumbnail-640x462.jpg">
					</div>
				</div>
				<div class="foot">
					<div class="address">
						107/26 Beaurepaire Parade Footscray VIC
					</div>
					<div class="information">
						<font>Available Date: Thursday October 18, 2018 </font>
						<font>Apartment: $350 per week</font>
						<font>Agent: Bronson Linington</font>
					</div>
					<div class="other">
						<el-row :gutter="20">
							<el-col :span="8">
								<i class="fa fa-bed" ></i>
								1
							</el-col>
							<el-col :span="8">
								<i class="fa fa-shower"></i>
								1
							</el-col>
							<el-col :span="8">
								<i class="fa fa-car" ></i>
								1
							</el-col>
						</el-row>
						<div class="btn">Book an Inspection</div>
					</div>
				</div>
			</el-card>
		</router-link>
	</el-col>
</template>
<script>
	export default {
		name: 'house-box',
		props: {
			to: {
				type: String,
				default: '/'
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	@import '@/assets/sass/mixins/transition.scss';

	.hbox-link {
		text-decoration: none;
	}

	// debug: 之前的class直接就是container 和父组件中的.container冲突了，写效果会出现问题（父组件style scoped的作用域包含子组件）
	// 注释待删除
	.hbox-container {
		position: relative;
		padding-bottom: 40px; // 改成40了，否则列表和筛选器显示不正常，筛选组件下面空了一大白
		cursor: pointer;
		@include media-xs {
			padding-bottom: 10px;
		}
		&:hover {
			.img-box {
				img {
					transform: scale(1.2, 1.2);
				}
			}
		}
		.main {
			display: block;
			position: relative;
			.img-box {
				position: relative;
				width: 0;
				height: 0;
				padding-left: 100%;
				padding-bottom: 70%;
				overflow: hidden;
				>img {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					@include transitionAll;
				}
			}

		}

		.foot {
			padding: 10px;
			>.address {
				font-size: 17px;
				font-weight: 800;
				line-height: 58px;
			}

			>.information {
				padding: 20px 0;
				border-top: 1px solid #000;
				font-weight: 800;
				font-size: 14px;
				line-height: 20px;

				>font {
					display: block;
					&:first-of-type ~ font {
						margin-top: 10px;
					}
				}
			}

			>.other {
				padding-top: 20px;
				font-size: 0;
				border-top: 1px solid #000;

				>.el-row {
					display: inline-block;
					width: calc(100% - 170px);
					margin-left: 0 !important;
					margin-right: 10px !important;
					vertical-align: middle;

					>.el-col {
						max-width: 100px;
						text-align: center;
						font-size: 15px;
						i {
							font-size: 20px;
						}
					}

				}

				>.btn {
					display: inline-block;
					width: 136px;
					padding: 0 10px;
					font-weight: 800;
					color: #FF6600;
					font-size: 14px;
					vertical-align: middle;
					text-align: center;
					line-height: 31px;
					border-radius: 3px;
					border: 2px solid #FF6600;
					@include transitionAll;
					&:hover {
						color: #fff;
						background: #FF6600;
						animation: shake infinite .1s;
					}
				}
			}

		}

	}

	// 遮罩层
	.mask {
			position: absolute;
			left: 0px;
			top: 0px;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0);
			@include transitionAll;
		}
</style>

<style>
	.el-card {
		border: 0px;
	}
</style>

