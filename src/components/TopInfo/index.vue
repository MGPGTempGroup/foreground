<template>
	<div class="container">
		
		<img v-if="typeof(img)!='undefined'" :src="img">
		<div class="text" ref="text" v-html="textHtml">
		</div>
	</div>
</template>
<script>
	export default {
		name: 'top-info',
		data() {
			return {

			}
		},
		props: [
			'img',
			'textHtml'
		],
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

	.container {
		position: relative;
		width: 100%;
		height: 500px;
		text-align: center;
		background: #000;
		color: #fff;
		overflow: hidden;

		>img {
			margin: 0 -100%;
			min-width: 100%;
			height: 100%;
		}

		.text {
			position: absolute;
			width: 100%;
			top: -1000px;
			font-size: 30px;
			line-height: 40px;
			font-weight: 800;
		}
	}
</style>
