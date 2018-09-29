<template>
	<main class="commercial">
		<main-swiper></main-swiper>
		<el-row class="content">
			<el-col class="commercial-content" :lg="17">
				<el-card style="padding-bottom: 10px;" >
					<p><strong>Melbourne Real Estate is leading the way in Commercial Property Management</strong></p>
					<p>We bring our knowledge, expertise, contacts and award-winning business practices to deliver an unprecedented
						level of service to every client every day.</p>
					<p>Asset Managers <a href="https://www.melbournerealestate.com.au/agent/brenton-reginato/">Brenton Reginato</a>
						and <a href="https://www.melbournerealestate.com.au/agent/samantha-bolton/">Samantha Bolton</a>, two highly
						experienced professionals in both the residential and commercial sectors, along with Commercial Leasing
						Consultant <a href="https://www.melbournerealestate.com.au/agent/mike-drover/">Mike Drover</a> bring integrity,
						accountability and a genuine passion for property to their respective roles, ensuring strong and lasting industry
						connections.</p>
					<h2>&nbsp;<img class="alignleft wp-image-8111" src="https://www.melbournerealestate.com.au/wp-content/uploads/2018/04/Commercial-Property-Management-Images-01-640x380.jpg"
						 alt="Melbourne Real Estate’s reputation for shaking up traditional modes of operating to produce exemplary results extends into every facet of the business, including our Commercial division."
						 width="512" height="304" srcset="https://www.melbournerealestate.com.au/wp-content/uploads/2018/04/Commercial-Property-Management-Images-01-640x380.jpg 640w, https://www.melbournerealestate.com.au/wp-content/uploads/2018/04/Commercial-Property-Management-Images-01-768x457.jpg 768w, https://www.melbournerealestate.com.au/wp-content/uploads/2018/04/Commercial-Property-Management-Images-01-1024x609.jpg 1024w"
						 sizes="(max-width: 512px) 100vw, 512px"></h2>
					<p>Raising the bar begins with our highly transparent advertising practices. We understand that time is money and
						that murky publicity and confusing information serves no one, so we cut to the chase, delivering a tailored
						campaign clearly and honestly.</p>
					<p>Along with our on-line booking application for inspection times that suit the tenant, our virtual video tours
						and professional photography accurately showcase each property, displaying relevant features and benefits.</p>
					<p>Melbourne Real Estate’s Asset Managers supervise each and every tenant transaction, setting up direct debit
						payment options for rent to avoid rental arrears and ensuring that 100% of all tenant property outgoings are paid
						through our office.</p>
					<p>We are committed to continually evolving technologies, dedicated customer service, extensive market reach and
						the seamless execution of managing your property.</p>
					Raising the bar begins with our highly transparent advertising practices. We understand that time is money and
					that murky publicity and confusing information serves no one, so we cut to the chase, delivering a tailored
					campaign clearly and honestly.
					Along with our on-line booking application for inspection times that suit the tenant, our virtual video tours and
					professional photography accurately showcase each property, displaying relevant features and benefits

					Melbourne Real Estate’s Asset Managers supervise each and every tenant transaction, setting up direct debit
					payment options for rent to avoid rental arrears and ensuring that 100% of all tenant property outgoings are paid
					through our office.

					We are committed to continually evolving technologies, dedicated customer service, extensive market reach and the
					seamless execution of managing your property.
				</el-card>
			</el-col>
			<el-col class="commercial-form" :lg="7">
				<el-card>
					<div slot="header">
						<h3 style="margin: 0px; font-size: 17px;">Inquire about our Commercial Property Management service:</h3>
					</div>
					<common-form style="width: 100%;" />
				</el-card>
			</el-col>
		</el-row>
	</main>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import CommonForm from '@/components/CommonForm'
	export default {
		name: 'commercial-page',
		components: {
			MainSwiper,
			CommonForm
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.commercial {

		&-content {
			> * {
				@include media-lg-up {
					padding: 0px 10px;
				}
			}
			@include media-lg-up {
				padding-right: 32px !important;
			}
			@include media-sm-down {
				img {
					width: 100%;
				}
			}
		}

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

			padding-bottom: 33px;

		}
	}
</style>
