<template>
	<el-col :sm="12" :md="8" :lg="8" class="container">
		<div class="main">
			<div class="img-box">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537655193446&di=f867d1a471fe4a4642c4f6df98ed32f2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F908fa0ec08fa513d14e7ade2366d55fbb2fbd9b9.jpg">
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
						<div class="fill"></div>
						1
					</el-col>
					<el-col :span="8">
						<div class="fill"></div>
						1
					</el-col>
					<el-col :span="8">
						<div class="fill"></div>
						1
					</el-col>
				</el-row>
				<div class="btn">Book an Inspection</div>
			</div>
		</div>
	</el-col>
</template>
<script>
	export default {
		name: 'house-box',
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	.container {
		padding: 10px;
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
			padding: 10px;
			background: #fff;

			>.address {
				font-size: 15px;
				font-weight: 800;
				border-top: 1px solid #000;
				line-height: 50px;
			}

			>.information {
				padding: 20px 0;
				border-top: 1px solid #000;
				font-weight: 800;
				font-size: 14px;
				line-height: 20px;

				>font {
					display: block;
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
						font-weight: 800;
						>.fill {
							background: #000;
							padding-bottom: 100%;
							border-radius: 100px;
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
					&:hover{
						color: #fff;
						background: #FF6600;
					}
				}
			}

		}

		&:hover {
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
</style>
