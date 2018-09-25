<template>
	<main class="container">
		<div class="top-info">
			<div class="text" ref="text">
				Industry Updates
			</div>
		</div>
		<el-row>
			<main-box v-for="(item,index) in 9" :key="index"></main-box>
		</el-row>
		<div class="load-more">Load More</div>
	</main>
</template>

<script>
	import MainBox from '@/components/MainBox'
	export default {
		components: {
			MainBox
		},
		name: 'industry-updates-page',
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
	.container {
		.top-info {
			position: relative;
			width: 100%;
			height: 500px;
			text-align: center;
			background: #000;
			color: #fff;
			overflow: hidden;

			.text {
				position: absolute;
				width: 100%;
				top: -1000px;
				font-size: 50px;
				line-height: 80px;
				font-weight: 800;
			}

		}

		>.load-more {
			cursor: pointer;
			display: block;
			width: 110px;
			margin: 10px auto;
			text-align: center;
			line-height: 40px;
			background: #fff;
			border-radius: 5px;

			&:hover {
				color: #fff;
				background: #ff6600;
			}
		}
	}
</style>


<style>
</style>
