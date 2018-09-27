<template>
	<div class="container" @touchmove="scroll">

		<!-- 头部 -->
		<header-top />

		<!-- 导航条 -->
		<navigation />

		<!-- 轮播公告信息 -->
		<notice-marquee :list="noticeList" />

		<router-view class="router-view" />

		<!-- 底部介绍与版权相关信息 -->
		<bottom-footer />
		<!-- 返回顶部 -->
		<div class="to-top" ref="toTop" @click="toTop">
			<i class="el-icon-arrow-up"></i>
		</div>
	</div>
</template>

<script>
	// 导入组件
	import Navigation from '@/components/Nav'
	import HeaderTop from '@/components/HeaderTop'
	import NoticeMarquee from '@/components/NoticeMarquee'
	import BottomFooter from '@/components/BottomFooter'

	export default {
		name: 'App',
		components: {
			Navigation,
			HeaderTop,
			NoticeMarquee,
			BottomFooter
		},
		data() {
			return {
				noticeList: [{
						content: 'xxxxx',
						rate: 1.1
					},
					{
						content: 'xxxxx',
						rate: 2.1
					},
					{
						content: 'xxxxx',
						rate: 4.1
					},
					{
						content: 'xxxxx',
						rate: 5
					},
					{
						content: 'xxxxx',
						rate: 1
					},
					{
						content: 'xxxxx',
						rate: 3
					},
					{
						content: 'xxxxx',
						rate: 4
					},
					{
						content: 'xxxxx',
						rate: 2
					},
					{
						content: 'xxxxx',
						rate: 5
					},
					{
						content: 'xxxxx',
						rate: 1
					},
					{
						content: 'xxxxx',
						rate: 1
					},
					{
						content: 'xxxxx',
						rate: 5
					},
					{
						content: 'xxxxx',
						rate: 5
					},
					{
						content: 'xxxxx',
						rate: 5
					},
					{
						content: 'xxxxx',
						rate: 5
					}
				]
			}
		},
		methods: {
			toTop() {
				Velocity(document.body, "scroll")
			},
			scroll() {
				//console.log(this.$refs.toTop.style.bottom)
				if(this.$refs.toTop.style.bottom!='100px' && this.$refs.toTop.style.bottom!='-100px' && this.$refs.toTop.style.bottom!=''){
					return false
				}
				Velocity(this.$refs.toTop, "stop")
				if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
					Velocity(this.$refs.toTop, { bottom: 100 })
				} else {
					Velocity(this.$refs.toTop, { bottom: -100 })
				}
			}
		},
		created() {
			this.$nextTick(() => {
				window.onscroll = () => {
					this.scroll()
				}
			})
		}
	};
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	.container {
		.router-view {
			margin: 2% auto;
			max-width: 1263px;
			min-height: calc(100vh - 155.33px - 60px - 35px - 458px);
			@include media-md-down {
				margin: 10px auto;
				margin-bottom:33px;
			}
		}

		.to-top {
			position: fixed;
			bottom: -100px;
			right: 20px;
			width: 50px;
			height: 50px;
			border-radius: 50px;
			background: #000;
			text-align: center;
			line-height: 50px;
			box-shadow: 0px 0px 10px #ccc;
			z-index: 1000;
			color: #fff;
		}
	}
</style>
