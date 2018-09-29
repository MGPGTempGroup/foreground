<template>
	<main class="testimonials">
		<top-info textHtml="“To avoid criticism say nothing,<br>
				do nothing, be nothing.”<br>
				<small>Aristotle</small>"></top-info>
		<el-row class="content">
			<el-col :lg="17" class="comments">
				<el-card>
					<ul>
						<service-comment tag="li" v-for="(item, index) in 20" :key="index" class="comments-item" name="Jane Perry" date="21, September, 2015">
							Melbourne Real Estate is a very professional team of Property Managers. I’ve been a client with MRE for over 3 years now and I sometimes forget that I have an investment property. They will contact you when there is a problem and will already have suggestions for you to fix the problems. We have another investment property that is managed by another Real Estate Agent but how I wish MRE is also looking after that property, due to the location MRE is unable to manage our second property. I can tell the HUGE difference in terms of service and professionalism between the two Real Estate Agents. Thank you MRE!
						</service-comment>
					</ul>
				</el-card>
			</el-col>
			<el-col :lg="7" class="form">
				<el-card>
					<div slot="header">
						<h3 style="margin: 0px;">Tell us what you think:</h3>
					</div>
					<common-form />
				</el-card>
			</el-col>
		</el-row>
	</main>
</template>
<script>
	import TopInfo from '@/components/TopInfo'
	import ServiceComment from '@/components/ServiceComment'
	import CommonForm from '@/components/CommonForm'
	export default {
		name: 'testimonials-page',
		components: {
			TopInfo,
			ServiceComment,
			CommonForm
		},
		data() {
			return {}
		}
	}
</script>
<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.testimonials {

		.content {
			margin-top: 35px;

			@include media-md {
				margin-top: 30px;
				padding: 0 30px;
			}

			@include media-sm {
				margin-top: 20px;
				padding: 0 20px;
			}

			@include media-xs {
				margin-top: 10px;
				padding: 0 10px;
			}

			.title {
				font-size: 20px;
				font-weight: 800;
				line-height: 40px;
				padding: 0 10px;
			}

			@mixin responsivePadding {
				@include media-xs {
					padding: 0px 10px !important;
				}

				@include media-sm {
					padding: 0px 30px !important;
				}

				@include media-md {
					padding: 0px 40px !important;
				}
			}

			.comments {

				@include media-lg-up {
					padding-right: 20px;
				}

				;

				&-item {
					margin-top: 1.2%;
					padding: .75% 0px 1% 0px;
					border-bottom: 1px solid #ccc;

					&:first-of-type {
						margin-top: 0px;
					}

					&:last-of-type {
						border-bottom-width: 0px;
					}
				}
			}

			.form {

				@include media-md-down {
					margin-top: 20px;
				}
			}
		}
	}
</style>
