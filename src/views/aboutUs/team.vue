<template>
	<div class="team">
		<div class="top-info">
			<div class="text" ref="text">
				An award winning team of<br>
				industry professionals that promise<br>
				to deliver wow service.
			</div>
		</div>
		<div class="content" v-for="(item,index) in 4" :key="index">
			<div class="title">
				Corporate
			</div>
			<el-row>
				<staff-box v-for="(item,index) in 5" :key="index"></staff-box>
			</el-row>
		</div>
	</div>
</template>
<script>
	import StaffBox from '@/components/StaffBox'
	export default {
		name: 'team-page',
		components:{
			StaffBox
		},
		data() {
			return {
				staffData:{
					
				}
			}
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
	.team {
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
			}

		}
		.content{
			border-bottom: 1px #aaa solid;
			margin:20px 0;
			padding-bottom: 30px;
			.title{
				font-size: 20px;
				font-weight: 800;
				line-height: 40px;
				padding: 0 10px;
			}
		}
	}
</style>
