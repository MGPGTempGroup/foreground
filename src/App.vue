<template>
	<div class="container" >
		
		<!-- 头部 -->
		<header-top />

		<!-- 导航条 -->
		<navigation />

		<!-- 轮播公告信息 -->
		<notice-marquee :list="noticeList" />

		<router-view class="router-view"  />

		<!-- 底部介绍与版权相关信息 -->
		<bottom-footer />
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
				noticeList: [
					{ content: 'xxxxx', rate: 1.1 },
					{ content: 'xxxxx', rate: 2.1 },
					{ content: 'xxxxx', rate: 4.1 },
					{ content: 'xxxxx', rate: 5 },
					{ content: 'xxxxx', rate: 1 },
					{ content: 'xxxxx', rate: 3 },
					{ content: 'xxxxx', rate: 4 },
					{ content: 'xxxxx', rate: 2 },
					{ content: 'xxxxx', rate: 5 },
					{ content: 'xxxxx', rate: 1 },
					{ content: 'xxxxx', rate: 1 },
					{ content: 'xxxxx', rate: 5 },
					{ content: 'xxxxx', rate: 5 },
					{ content: 'xxxxx', rate: 5 },
					{ content: 'xxxxx', rate: 5 }
				]
			}
		}
	};
</script>

<style scoped lang="scss" >
	.container {
		.router-view {
			padding-top: 30px;
			margin: 0 auto;
			max-width: 1263px;
			min-height: calc(100vh - 155.33px - 60px - 35px - 458px);
		}
	}
</style>

