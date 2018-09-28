<template>
	<main class="team">
		<top-info textHtml="	An award winning team of<br>
			industry professionals that promise<br>
			to deliver wow service."></top-info>
		<div class="content" v-for="(item,index) in 4" :key="index">
			<div class="title">
				Corporate
			</div>
			<el-row>
				<staff-box to="/about-us-team/Ann Rogers" v-for="(item,index) in 5" :key="index"></staff-box>
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
			return {
			}
		}
	}
</script>
<style scoped lang="scss">
	.team {
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
