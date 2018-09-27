<template>
	<el-col :sm="12" :md="8" :lg="8" class="container">
		<div class="main">
			<div class="head">
				<div class="title">Looking to Rent?</div>
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
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537655193446&di=f867d1a471fe4a4642c4f6df98ed32f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F908fa0ec08fa513d14e7ade2366d55fbb2fbd9b9.jpg">
					</div>
				</div>
				<div class="foot">
					<font>
						Read More
					</font>
				</div>
			</router-link>
		</div>
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
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	.container {
		padding-bottom: 10px;
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
				}

				.el-icon-more {
					position: absolute;
					top: 0;
					right: 0;
					padding: 10px;
					line-height: 20px;
					font-size: 20px;
				}

				.el-popover {
					font {
						display: block;
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

					>img {
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
					}
				}
			}

			.foot {
				height: 40px;
				line-height: 40px;
				padding: 0 10px;
				border-left: 1px solid #000;
				border-bottom: 1px solid #000;

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
