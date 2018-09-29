<template>
	<div class="prospective-tenants">
		<main-swiper></main-swiper>
		<el-row class="content">
			<el-col class="content-desc">
				<el-card class="content-desc-inner">
					<h1>Tenant Services &amp; Information</h1>
					<p>Please refer to our <strong><a href="https://www.melbournerealestate.com.au/renting/">listings page</a></strong>
						for current rental opportunities:</p>
					<p><a href="https://www.melbournerealestate.com.au/renting/"><img class="alignnone wp-image-1035 size-full" title="listings page"
							 src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/05/Tenants_Image.jpg" alt="listings page"
							 width="455" height="282"></a></p>
					<h2>Applying Online</h2>
					<p class="p1">Melbourne Real Estate utilise&nbsp;the online application program 1form, for a seamless, secure and
						efficient way to apply to rental properties.</p>
					<p class="p1">If you wish to apply for one of our listed properties, please fill out an&nbsp;<strong><a title="Apply Online"
							 href="https://1form.com/au/tenant/application/start/tagid/612" target="_blank" rel="noopener">online
								application</a></strong>.</p>

					<div style="margin-top: 27px;" >
						<strong style="font-size: 21px;" >Share</strong>
						<share-card style="margin-top: 5px;" />
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import ShareCard from '@/components/ShareCard'
	export default {
		name: 'prospective-tenants-page',
		components: {
			MainSwiper,
			ShareCard
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	.prospective-tenants {
		.content {
			margin-top: 35px;
			@include media-md{
				margin-top: 30px;
				padding:0 30px;
			}
			@include media-sm{
				margin-top: 15px;
			}
			@include media-xs{
				margin-top: 10px;
			}

			&-desc {
				@include media-md-down {
					padding: 0px 10px;
				}

				&-inner {
					@include media-lg-up {
						padding: 0px 10px;
						padding-bottom: 15px;
					}
				}

				@include media-sm-down {
					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>
