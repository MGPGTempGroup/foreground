<template>
	<el-col :sm="8" :md="6" :lg="6" class="container">
		<router-link :to="to" >
			<div class="main">
				<div class="img-box">
					<img src="http://img2.ctoutiao.com/uploads/2017/07/11/0e209371e2c664ecbbd73180b6ddd78f.jpg">
				</div>
			</div>
			<div class="foot">
				<font class="name">
					Lei Jun
				</font>
				<font class="read-more">
					Read More
				</font>
				<div class="presentation">
					Founder and chairman of xiaomi technology Founder and chairman of xiaomi technology
				</div>
			</div>
		</router-link>
	</el-col>
</template>
<script>
	export default {
		name: 'staff-box',
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

	.container {
		cursor: pointer;

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
			line-height: 35px;
			padding: 0 10px;
			border-left: 1px solid #000;
			border-bottom: 1px solid #000;

			>.name {
				font-size: 14px;
				display: inline-block;
				font-weight: 800;
			}

			>.read-more {
				display: inline-block;
				float: right;
				font-size: 13px;
				font-weight: 800;
				color: #666;
			}
			>.presentation{
				height: 60px;
				padding-bottom: 10px;
				line-height: 30px;
				font-size: 12px;
				overflow: hidden;
			}
		}

		&:hover {
			>.foot {
				border-left: 1px solid #ff6600;
				border-bottom: 1px solid #ff6600;

				>.read-more {
					color: #ff6600;
				}
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
