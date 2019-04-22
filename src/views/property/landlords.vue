<template>
	<div class="landlords">
		<main-swiper
			:slides="serviceContent.broadcast_pictures"
		/>
		<el-row class="content">
			<el-col class="content-desc" :md="24" :lg="17">
				<el-card class="content-desc-inner">
					<div v-html="serviceContent.content" ></div>
				</el-card>
			</el-col>
			<el-col class="content-form" :md="24" :lg="7">
				<el-card>
					<div slot="header">
						<h3 style="margin: 0px;">Inquire about our property management service:</h3>
					</div>
					<common-form style="width: 100%;" />
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import MainSwiper from '@/components/MainSwiper'
import CommonForm from '@/components/CommonForm'
import ShareCard from '@/components/ShareCard'
import { mapState, mapActions } from 'vuex'
import store from '@/store'
export default {
	name: 'landlords-page',
	components: {
		MainSwiper,
		CommonForm,
		ShareCard
	},
	async beforeRouteEnter(to, from, next) {
		await store.dispatch('fetchServiceContent', {
			serviceName: 'landlords'
		})
		next()
	},
	computed: {
		...mapState({
			serviceContent(state) {
				return state.service.serviceContents.landlords
			}
		})
	}
}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.landlords {
		.content {
			margin-top: 35px;
			@include media-md{
				margin-top: 30px;
				padding:0 30px;
			}
			@include media-sm{
				margin-top: 20px;
				padding:0 20px;
			}
			@include media-xs{
				margin-top: 10px;
				padding:0 10px;
			}
			&-desc {
				
				&-inner {
					@include media-lg-up {
						padding: 0px 10px;
						padding-bottom: 15px;
					}

					@include media-sm-down {
						img {
							width: 100%;
						}
					}
				}

				@include media-lg-up {
					padding-right: 20px;
				}
			}

			&-form {
				@include media-md-down {
					margin-top: 25px;
				}

				p {
					font-size: 13.5px;
				}
			}
		}
	}
</style>
