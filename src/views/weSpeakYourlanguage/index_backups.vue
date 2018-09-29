<template>
	<main class="container">
		<top-info textHtml="An award winning team of<br>
				industry professionals that promise<br>
				to deliver wow service."></top-info>
		<div class="top-info">
			<div class="text" ref="text">

			</div>
		</div>
		<div class="content">
			<el-row class="staff-list" v-for="(item,index) in 5" :key="index">
				<el-col :sm="8" :md="6" :lg="6" class="staff-left-content">
					<div class="main">
						<div class="img-box">
							<img src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/04/Jason-Low-2.png">
						</div>
						<div class="info">
							Jason Low Headshot<br>
							Jason Low 刘青纬<br>
							Phone 联系电话 +61 3 9829 2923<br>
							Mobile 手机 +61 499 847 888<br>
							Email 电子邮件 jason@melbournerealestate.com.au<br>
							WeChat 微信 jasonmre
						</div>
					</div>

				</el-col>
				<el-col :sm="16" :md="18" :lg="18" class="staff-right-content">
					<div class="main">
						<p><strong>Background 背景 - Singapore 新加坡<br>
								Languages spoken 语言 - Mandarin, Teochew, Hokkien & English 中英文，潮州话，闽南语</strong></p>
						<p>刘青纬先生具有信息技术学士学位，自2013年进入墨尔本地产以来，为公司带入了纪律，勤奋和卓越的时间管理能力。他具有关于亚洲房地产市场和规范的丰富知识，并能说流利的中英文，潮州话，闽南语。他与众多中国开发商的出色工作为他赢得了良好的赞誉。</p>
						<p>Jason has a Bachelor in Information Technology behind him; Jason joined MRE in 2013, bringing discipline,
							diligence
							and excellent time management skills into the mix.</p>
						<p>Fluent in Teochew and Hokkien Chinese dialects and with a sound knowledge of Asian property markets and
							regulations, he is highly regarded for his work with Chinese developers.</p>
					</div>
				</el-col>
			</el-row>
		</div>
	</main>
</template>

<script>
	import TopInfo from '@/components/TopInfo'
	import MainBox from '@/components/MainBox'
	export default {
		components: {
			TopInfo,
			MainBox
		},
		name: 'we-speak-yourlanguage-page'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.container {
		.staff-list {
			margin-top: 35px;

			@include media-md {
				margin-top: 30px;
			}

			@include media-sm {
				margin-top: 20px;
			}

			@include media-xs {
				margin-top: 10px;
				padding: 0 10px;
			}

			>.staff-left-content {

				@include media-sm {
					padding-right: 10px;
				}

				@include media-md-up {
					padding-right: 20px;
				}

				>.main {
					background: #fff;

					.img-box {
						position: relative;
						width: 0;
						height: 0;
						padding-left: 100%;
						padding-bottom: 100%;

						>img {
							position: absolute;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
						}
					}

					.info {
						padding: 10px;
					}
				}

			}

			.staff-right-content {
				vertical-align: top;

				>.main {
					background: #fff;

					>p {
						padding: 12px;
						margin: 0;
					}
				}
			}

		}
	}
</style>


<style>
</style>
