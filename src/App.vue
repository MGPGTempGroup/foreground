<template>
	<div class="container" >
		<header-top />
		<navigation />
		<notice-marquee :list="noticeList" />
		<router-view></router-view>
	</div>
</template>

<script>

	// 导入组件
	import Navigation from '@/components/Nav'
	import HeaderTop from '@/components/HeaderTop'
	import NoticeMarquee from '@/components/NoticeMarquee'

	export default {
		name: 'App',
		components: {
			Navigation,
			HeaderTop,
			NoticeMarquee
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

<style lang="scss" >
	body {
		padding: 0;
		margin: 0;
		background-color: #F7F7F7;
		div {
			color: red;
		}
	}
</style>

