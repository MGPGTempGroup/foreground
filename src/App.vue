<template>
	<div class="container" @touchmove="scroll">
		<!-- 头部 -->
		<header-top :dialogLoginVisible.sync="dialogLoginVisible" />

		<!-- 导航条 -->
		<navigation />

		<!-- 轮播公告信息 -->
		<notice-marquee :list="noticeList" />

		<router-view class="router-view" />

		<!-- 底部介绍与版权相关信息 -->
		<bottom-footer />

		<div class="absolute-container" >
			<!-- 返回顶部 -->
			<div class="to-top" ref="toTop" @click="toTop">
				<i class="el-icon-arrow-up"></i>
			</div>
			<!-- 背景（filter） -->
			<img class="bg recovery" src="/images/background/爱西西_高层建筑背景下水船_编号234127.jpg" alt="">
		</div>

		<!-- 登录 Dialog -->
		<el-dialog class="login-dialog" width="350px" :modal-append-to-body="true" title="Login" :visible.sync="dialogLoginVisible">
			<el-form class="login-form" :model="loginForm">
				<el-form-item>
					<div slot="label" >
						<i class="fa fa-user-o" ></i> &nbsp;Username
					</div>
					<el-input v-model="loginForm.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<div slot="label" >
						<i class="fa fa-lock" ></i> &nbsp;Password
					</div>
					<el-input v-model="loginForm.password" type="password" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div style="text-align: center; margin-top: 30px;" >
				<a href="">Obtain my password</a>
			</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogLoginVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogLoginVisible = false">Login</el-button>
      </div>
    </el-dialog>

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
				],
				dialogLoginVisible: false,
				loginForm: {

				}
			}
		},
		methods: {
			toTop() {
				Velocity(document.body, "scroll")
			},
			scroll() {
				//console.log(this.$refs.toTop.style.bottom)
				if (this.$refs.toTop.style.bottom != '100px' && this.$refs.toTop.style.bottom != '-100px' && this.$refs.toTop.style
					.bottom != '') {
					return false
				}
				Velocity(this.$refs.toTop, "stop")
				if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
					Velocity(this.$refs.toTop, {
						bottom: 100
					})
				} else {
					Velocity(this.$refs.toTop, {
						bottom: -100
					})
				}
			}
		},
		created() {
			this.$nextTick(() => {
				window.onscroll = () => {
					this.scroll()
				}
			})
		},
		updated() {
		}
	};
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	@import '@/assets/sass/mixins/transition.scss';

	@keyframes recovery {
		from {
			transform: scale(1.1, 1.1);
			filter: blur(5px);
		}
		to {
			transform: scale(1, 1);
			filter: blur(0px);
		}
	}

	.container {
		.bg {
			position: fixed;
			left: -1%;
			top: -14%;
			width: 102%;
			z-index: -1;
			filter: blur(5px);
			transform: scale(1.1, 1.1);
			@include transitionAll;
		}
		.recovery {
			animation: recovery 1.5s forwards;
		}
		.router-view {
			margin: 35px auto;
			padding-bottom: .6rem;
			max-width: 1200px;
			min-height: calc(100vh - 155.33px - 60px - 35px - 458px);
			opacity: .97;
			@include media-md {
				margin-bottom: 30px;
			}
			@include media-sm {
				margin-top: 0px;
				margin-bottom: 20px;
			}
			@include media-xs {
				margin-top: 0px;
				margin-bottom: 20px;
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

<style>
	.login-form {
		
	}
	.login-dialog .el-dialog__body {
		padding-top: 10px;
	}
	.login-form .el-form-item {
		margin-bottom: 4px;
	}
</style>

