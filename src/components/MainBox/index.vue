<template>
	<el-col :sm="12" :md="8" :lg="8" class="container">
		<el-card class="main" body-style="padding: 5px;" shadow="hover">
			<div class="head">
				<div class="title">{{ title }}</div>
				<el-popover placement="bottom-end" trigger="hover" style="width: 100px;">
					<ul class="share-box">
						<font class="title">share</font>
						<li>
							Google+
						</li>
						<li>
							Facebook
						</li>
						<li>
							Twitter
						</li>
						<li>
							LinkedIn
						</li>
					</ul>
					<i class="el-icon-more" slot="reference"></i>
				</el-popover>
			</div>
			<router-link :to="to" >
				<div class="main">
					<div class="img-box">
						<img :src="imgUrl">
					</div>
				</div>
				<div class="foot">
					<font>
						Read More
					</font>
				</div>
			</router-link>
		</el-card>
	</el-col>
</template>
<script>
	export default {
		name: 'main-box',
		props: {
			to: {
				type: String,
				default: '/'	
			},
			title: {
				type: String,
				default: 'Title'
			},
			imgUrl: {
				type: String,
				default: 'https://www.melbournerealestate.com.au/wp-content/uploads/2018/05/White-St-Thumbnail-640x462.jpg'
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
	.container {
		padding-bottom: 20px;
		transform: translateY(0px);
		&:hover {
			transform: translateY(-5px);
		}
		@include transitionAll;
		@include media-xs{
			padding-bottom: 10px;
		}
		.main {
			display: block;
			position: relative;
			cursor: pointer;
			
			.head {
				position: relative;
				height: 40px;
				background: #fff;
				padding: 0 10px;

				.title {
					line-height: 40px;
					font-size: 14px;
					font-weight: bold;
				}

				.el-icon-more {
					// 暂时调整了，问题是popover弹出的位置和这里的间距太大了，代码待优化
					position: absolute;
					top: 15px;
					right: 5px;
					height: 10px;
					line-height: 0px;
					font-size: 20px;
				}

				.el-popover {
					font {
						display: block;
					}
				}
			}

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
					transform: scale(1.3, 1.3);
					@include transitionAll;
					&:hover {
						transform: scale(1,1);
					}
				}
			}

			.foot {
				height: 40px;
				line-height: 40px;
				padding: 0 10px;
	
				>font {
					font-weight: 800;
				}

			}

			&:hover {
				>.foot {
					color: #ff6600;
					border-left: 1px solid #ff6600;
					border-bottom: 1px solid #ff6600;
				}

				>.main:after {
					position: absolute;
					width: 100%;
					top: 0;
					bottom: 0;
					z-index: 1000;
					content: '';
					background: rgba(0, 0, 0, .2);
				}
			}

		}
	}

	.share-box {
		color: #000;
		text-align: center;
		cursor: default;
		font-size: 13px;

		.title {
			display: block;
			font-size: 14px;
			font-weight: 800;
		}

		li:hover {
			color: #ff6600;
		}
	}
</style>
