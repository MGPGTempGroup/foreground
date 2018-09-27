<template>
	<main class="marketing">
		<main-swiper></main-swiper>
		<el-row class="content">
			<el-col class="marketing-content" :lg="18">
				<el-card>
					<h1 style="margin-top: 0px;">Project Marketing</h1>
					<p>Established in 2000, MRE has broken boundaries, subverted the old order and set the benchmark for project
						marketing in Melbourne. Established as a dedicated project marketing agency in 2005, we quickly became industry
						recognized. Our ethos relies on delivering consistently stellar results for all our clients and is predicated on
						innovation, accountability and passion.</p>
					<p><a href="https://www.melbournerealestate.com.au/new-developments/" target="_blank" rel="noopener">Current
							projects</a><br>
						<a href="https://www.melbournerealestate.com.au/past-success/" target="_blank" rel="noopener">Past success</a></p>
					<h1>Who we are</h1>
					<p>Having worked with top tier developers who demand results, our work is of the very highest caliber.</p>
					<p>At MRE we are unashamedly hungry for superior outcomes and relish in outperforming our competitors.</p>
					<p>Our specialized team of project sales professionals have fourty five years of combined experience and make no
						bones about only selecting the work they truly believe in – the type of project that engenders one-eyed zealotry,
						single minded determination and total commitment.</p>
					<p><a href="https://www.melbournerealestate.com.au/team/" target="_blank" rel="noopener">Our team</a></p>
					<h1>How do we do it</h1>
					<p>At MRE we don’t believe in a cookie cutter approach; every one of our projects is uniquely tailored.</p>
					<p>From the outset our team are actively engaged in workshopping every facet of the sales and marketing campaign.</p>
					<p>We work in tandem with the very best branding and communications companies, employing years of experience and
						offering advice on everything from branding and marketing collateral to website design and creative concepts.
						Each project receives 100% focus and dedication to ensure the highest quality outcome, and the best solution to
						suit each project.</p>
					<p>Working closely with leading architects and interior designers we provide invaluable market-based research on
						floor plan layouts, apartment features and finishes, and pricing strategies.</p>
					<p><a href="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Project_Marketing_Image_3.jpg"><img
							 class="alignnone wp-image-1045 size-full" title="project marketing buyer database" src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Project_Marketing_Image_3.jpg"
							 alt="project marketing buyer database" width="455" height="282"></a></p>
					<p>MRE’s long standing industry experience means we are never complacent and always adapt to suit the current
						market trends. Our comprehensive database and wide ranging network ensure we have the infrastructure in place,
						both off-shore and locally, to maximize sales.</p>
					<p>Total transparency is paramount and our reporting is second to none. Utilizing the <a href="https://www.salesforce.com/au/"
						 target="_blank">Salesforce CRM dashboard</a>, we generate real-time statistics and lead tracking throughout the
						campaign, providing comprehensive weekly and monthly reports. This end-to-end capability facilitates a continuous
						flow of information allowing for rapid response and trouble shooting along the way.</p>
					<p><a href="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Salesforce-Tile.jpg"><img class="alignnone wp-image-1851 size-full"
							 title="Salesforce Dashboard" src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Salesforce-Tile.jpg"
							 alt="Salesforce Dashboard" width="455" height="282"></a></p>
					<p>It’s important to understand that at MRE our team are highly skilled members of a real estate ‘family’.
						Everyone involved is dedicated to the same vision and values. Our clients know they can depend on our innovation,
						strategic market intelligence and unmatched service in order to consistently achieve high sales results.</p>
					<p>Strong collaborative relationships with all our stakeholders and an ironclad commitment to excellence is the
						reason we have so much repeat business and why our brand equity in this highly competitive marketplace is second
						to none.</p>
					<p>From concept to completion, MRE are there for the long haul.</p>
					<p>We stake our reputation on it.</p>
				</el-card>
			</el-col>
			<el-col class="marketing-contacts" :lg="6">
				<contacts-card :contactList="contactList" />
			</el-col>
		</el-row>
	</main>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	import ContactsCard from '@/components/Contacts'
	export default {
		name: 'marketing-page',
		components: {
			MainSwiper,
			ContactsCard
		},
		data() {
			return {
				contactList: {
					"Georgina Mellick — Project Sales Director": {
						email: 'georgina@melbournerealestate.com.au',
						direct: '+61 3 9829 2905',
						mobile: '+61 423 909 266'
					},
					"Peter Hooymans – Director": {
						email: 'peter@melbournerealestate.com.au'
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.marketing {
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
		}

		&-contacts {
			@include media-md {
				margin-top: 30px;
			}

			@include media-sm {
				margin-top: 20px;
			}

			@include media-xs {
				margin-top: 10px;
			}
		}

		&-content {
			>* {
				padding: 10px 10px;
			}

			@include media-lg-up {
				padding-right: 32px;
			}
		}

		&-contacts {}
	}
</style>
