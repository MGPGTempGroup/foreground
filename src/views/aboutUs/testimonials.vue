<template>
	<main class="testimonials">
		<div class="top-info">
			<div class="text" ref="text">
				“To avoid criticism say nothing,<br>
				do nothing, be nothing.”<br>
				<small>Aristotle</small>
			</div>
		</div>

	</main>
</template>
<script>
	export default {
		name: 'testimonials-page',
		data() {
			return {}
		},
		methods: {

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
	.testimonials {
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
				font-size: 30px;
				line-height: 40px;
				font-weight: 800;

				small {
					font-size: 14px;
					font-weight: 400;
				}
			}

		}

		.content {
			border-bottom: 1px #aaa solid;
			margin: 20px 0;
			padding-bottom: 30px;

			.title {
				font-size: 20px;
				font-weight: 800;
				line-height: 40px;
				padding: 0 10px;
			}
		}
	}
</style>
