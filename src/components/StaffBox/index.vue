<template>
	<el-col :sm="8" :md="6" :lg="6" class="container">
		<el-card body-style="padding: 10px;" >
			<router-link class="sb-link" :to="to" >
				<div class="main">
					<div class="img-box">
						<img src="/images/staff/Ann-3.png">
					</div>
				</div>
				<div class="foot">
					<font class="name">
						Ann Rogers
					</font>
					<div class="presentation">
						Office Manager
					</div>
				</div>
			</router-link>
		</el-card>
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
		padding-bottom: 20px;
		cursor: pointer;
		@include media-xs{
			padding-bottom: 10px;
		}
		.sb-link {
			text-decoration: none;
		}
		.main {
			display: block;
			position: relative;
			.img-box {
				>img {
					width: 100%;
				}
			}
		}

		.foot {
			padding: 10px 10px;
			line-height: 35px;
			>.name {
				font-size: 20px;
				display: inline-block;
				font-weight: 800;
			}

			>.presentation{
				line-height: 30px;
				font-size: 14px;
				letter-spacing: 1px;
				border: none;
			}
		}
	}
</style>
