<template>
	<main class="leasing">
		<main-swiper></main-swiper>
		<el-row class="content">
			<el-col class="leasing-content" :lg="18">
				<el-card>
					<h1>Project Leasing</h1>
					<p>MRE has built an award winning reputation for project leasing, partnering with local and international property
						developers. MRE provides a professional, integrated and seamless&nbsp;<a href="https://www.melbournerealestate.com.au/property-management/"
						 target="_blank" rel="noopener">property management solution</a> for developers that require leasing and property
						management of&nbsp;their new development and project.</p>
					<p>With highly specialised project management, mass marketing and leasing tactics – MRE has significant
						credentials and expertise in leasing developments from 10 to 500+ in size whilst providing commercial benefits to
						our developer partners.</p>
					<p>Underpinned by our value-add in <a href="https://www.melbournerealestate.com.au/project-leasing/" target="_blank"
						 rel="noopener">Project Leasing</a> to <a href="https://www.melbournerealestate.com.au/landlords/" target="_blank"
						 rel="noopener">landlord clientele</a> and developers, MRE was consecutively awarded Property Management Business
						of the Year in 2014 and 2015 at the <a href="https://www.melbournerealestate.com.au/awards/" target="_blank" rel="noopener">Real
							Estate Business (REB) awards</a>, and REB Business Development Manager of the Year in 2014.</p>
					<p>MRE is accountable to developers who engage us to lease their developments ‘en masse’. You can expect:</p>
					<ul>
						<li>Regular updates from team members in our specialised Business Development unit.</li>
						<li>Collaboration with MRE and prioritisation of key dwellings to be leased, E.G. by prioritising leasing of
							properties where a developer has offered rental guarantees to their purchaser clients.</li>
						<li>We deliver strong commercial outcomes and mitigate financial risk.</li>
						<li>MRE staff are certified to access construction sites and therefore increase opportunities to lease properties
							prior to, or very soon after settlement.</li>
					</ul>
					<p>MRE is proud to have worked and had great success with the following projects;</p>
					<p>The Guilfoyle – 39 Coventry Street, Southbank<br>
						Trilogi – 15 Clifton Street &amp; 201 High Street, Prahran<br>
						Jaques – 9 Griffiths Street &amp; 12 Coppin Street, Richmond<br>
						Rhapsody – 568 St Kilda Road, Melbourne<br>
						Ark Richmond – 253 Bridge Road, Melbourne<br>
						Charlie Richmond – 2 McGoun Street, Richmond<br>
						RIVA – 36 Lynch Street &amp; 2 Tweed Street, Hawthorn<br>
						The Clifton – 25 Clifton Street, Prahran<br>
						The William – 199 William Street, Melbourne<br>
						The Bowery – 47 Murphy Street, Richmond<br>
						108 Flinders – 108 Flinders Street, Melbourne<br>
						MY80 – 80 A’Beckett Street, Melbourne<br>
						Studio 9 –&nbsp;Studio Walk, Barnet Way &amp; Bendigo Street, Richmond<br>
						Merri Parade – 26-38 Merri Parade, Northcote<br>
						38 Camberwell – 38 Camberwell Road, Hawthornb East<br>
						GEOX – 37-43 Breese Street, Brunswick<br>
						Clara – 1 Clara Street, South Yarra<br>
						Monarc – 74 Queens Road, Melbourne<br>
						Islington Silos – 55 Islington Street, Collingwood<br>
						Allure – 13 Wellington Street, St Kilda<br>
						Lucia&nbsp;– 8 Daly Street, South Yarra<br>
						Prime Tower – 47 Claremont Street, South Yarra<br>
						You &amp; I – 6 Mater Street, Collingwood<br>
						Pearl – 1, 3, 5 Grosvenor Street, Doncaster<br>
						North – 23 &amp; 33 Blackwood Street, North Melbourne<br>
						EQ Tower – 135 A’Beckett Street, Melbourne<br>
						Maple – 121 Power Street, Hawthorn<br>
						Eporo Tower – 285 La Trobe Street, Melbourne<br>
						Seed – 204 High Street, Preston<br>
						The York – 8 Olive York Way, Brunswick West<br>
						Palmer Street – 1 Palmer Street, Richmond<br>
						Hive – 636 High Street, Thornbury</p>
				</el-card>
			</el-col>
			<el-col class="leasing-form" :lg="6">
				<el-card>
					<div slot="header">
						<h3 style="margin: 0px;">Like to arrange a meeting?</h3>
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
		name: 'leasing-page',
		components: {
			MainSwiper,
			CommonForm
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.leasing {
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

		&-form {
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
	}
</style>
