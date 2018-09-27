<template>
	<div class="success">
		<div class="img-box">
			<img src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Past_Success_Hero.jpg">
			<div class="text" ref="text">
				Past Success
			</div>
		</div>
		<div class="success-content">
			<el-row gutter='10'>
				<main-box v-for="item in 9"></main-box>
			</el-row>
		</div>
	</div>
</template>

<script>
	import MainBox from '@/components/MainBox'
	export default {
		name: 'past-success-page',
		components: {
			MainBox
		},
		data() {
			return {
				contactList: {
					'Sales': {
						email: 'info@melbournerealestate.com.au',
						direct: '+61 3 9829 2900',
						mobile: '+61 9829 2951'
					},
					'Property Management': {
						email: 'rentals@melbournerealestate.com.au',
						direct: '+61 3 9829 2900',
						mobile: '+61 9829 2966'
					}
				}
			}
		},
		created() {
			this.$nextTick(() => {
				let textHeight = this.$refs.text.offsetHeight
				let marginTop = -textHeight / 2
				Velocity(this.$refs.text, {
					marginTop: marginTop,
					top: '50%'
				}, {
					duration: 1000
				})
			})
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.success {
		&-content {
			margin-top: 33px;
			@include media-sm-down {
				margin-top: 10px;
				padding: 0px 10px;
			}
		}

		>.img-box {
			position: relative;
			padding-bottom: 40%;
			padding-left: 100%;
			margin-bottom: 2%;
			width: 0;
			height: 0;
			overflow: hidden;

			>img {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
			}

			.text {
				position: absolute;
				width: 100%;
				top: -1000px;
				left: 0;
				text-align: center;
				color: #fff;
				font-size: 50px;
				line-height: 80px;
				font-weight: 800;
				z-index: 10;
			}
		}

	}
</style>
