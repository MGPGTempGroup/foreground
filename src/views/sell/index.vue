<template>
	<div class="selling">
		<el-carousel class="carousel" :interval="5000" height="500px">
			<el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
				<img src="@/assets/images/banner/Home_Hero_1.1.gif" alt="">
				<h2>&nbsp;One step ahead.</h2>
			</el-carousel-item>
		</el-carousel>
		<el-row class="content">
			<el-col class="content-desc" :md="24" :lg="17">
				<el-card class="content-desc-inner">
					<strong>Sell with MRE</strong>
					<p>
						At Melbourne Real Estate we know that the experience of selling property goes beyond contracts, deposits and
						commissions – it’s momentous, it’s emotional and it’s a process we’re passionate about.</p>
					<p>
						We have two teams of sales agents at MRE: our project management division, who coordinate the marketing and sales
						of newly constructed apartment complexes; and our residential sales team, who manage the sale of apartments that
						have been previously owned and/or occupied.</p>
					<p>
						Both teams are exceptionally good at converting leads into sales and will be committed to your property until it
						is sold for an exceptional price. We believe selling is a transfer of enthusiasm.</p>
					<p>
						Our track record shows we’re one of the top inner-city apartment specialists in Melbourne.</p>
				</el-card>
			</el-col>
			<el-col class="content-form" :md="24" :lg="7">
				<el-card>
					<div slot="header">
						<h3 style="margin: 0px;">Inquire about our property management service:</h3>
					</div>
					<common-form style="width: 100%;" />
					<contacts-card :contactList="contactList" style="width: 100%;"/>
				</el-card>
			</el-col>

		</el-row>
	</div>
</template>

<script>
	import CommonForm from '@/components/CommonForm'
	import ContactsCard from '@/components/Contacts'
	export default {
		name: 'selling-page',
		components: {
			CommonForm
		},
		data() {
			return {
				contactList: {
					'Sales': {
						email: 'info@melbournerealestate.com.au',
						direct: '+61 3 9829 2900',
						mobile: '+61 9829 2951'
					},
					'Property Management': {
						email: 'rentals@melbournerealestate.com.au',
						direct: '+61 3 9829 2900',
						mobile: '+61 9829 2966'
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.selling {
		padding-bottom: 70px;

		.carousel {
			margin: 0 auto;

			&-item {
				img {
					width: 100%;
					height: 100%;
				}

				h2 {
					position: absolute;
					top: 140px;
					z-index: 100;
					width: 100%;
					text-align: center;
					font-size: 50px;
					letter-spacing: 2px;
					text-shadow: 2px 2px 10px black;
					color: white;
				}
			}
		}

		.content {
			margin-top: 33px;

			@include media-xs {
				padding: 0px 10px !important;
			}

			@include media-sm {
				padding: 0px 30px !important;
			}

			@include media-md {
				padding: 0px 40px !important;
			}

			&-desc {
				&-inner {
					padding: 0px 10px;

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
					margin-top: 40px;
				}

				p {
					font-size: 13.5px;
				}
			}
		}
	}
</style>
