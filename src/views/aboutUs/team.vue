<template>
	<main class="team">
		<top-info textHtml="	An award winning team of<br>
			industry professionals that promise<br>
			to deliver wow service."></top-info>
		<div class="content" v-for="(item,index) in 4" :key="index">
			<div class="title">
				Corporate
			</div>
			<el-row gutter='20'>
				<staff-box v-for="(item,index) in 5" :key="index"></staff-box>
			</el-row>
		</div>
	</main>
</template>
<script>
	import TopInfo from '@/components/TopInfo'
	import StaffBox from '@/components/StaffBox'
	export default {
		name: 'team-page',
		components: {
			TopInfo,
			StaffBox
		},
		data() {
			return {}
		}
	}
</script>
<style scoped lang="scss">
	.team {
		@import '@/assets/sass/mixins/responsive.scss';

		.content {
			border-bottom: 1px #aaa solid;
			margin: 35px 0;
			padding: 30px 0;

			@include media-md {
				margin-top: 30px;
				padding: 30px 0;
			}

			@include media-sm {
				margin: 20px 0;
				padding: 20px 0;
			}

			@include media-xs {
				margin: 10px 0;
				padding: 10px;
			}

			.title {
				font-size: 20px;
				font-weight: 800;
				line-height: 40px;
				padding: 0 10px;
			}
		}
	}
</style>
