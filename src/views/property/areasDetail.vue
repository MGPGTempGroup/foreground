<template>
	<div class="areas-detail">
		<main-swiper></main-swiper>
		<el-row class="content">
			<el-col class="content-desc">
				<el-card class="content-desc-inner">
					<h1>{{ $route.params.area }} Property Management</h1>
          <p>Melbourne Real Estate is the next generation of property managers. Since 2006, we have been recipients of&nbsp;<strong>five Real Estate Industry of Victoria (REIV) awards</strong>&nbsp;and winner of three national Real Estate Business (REB) awards. Our success is built on several important things. Firstly, our commitment to our clients is absolute. We understand the value of each investment and we work as if it were ours.</p>
          <p><iframe src="https://www.youtube.com/embed/1z2CMvLR5XM" width="455" height="256" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>
          <h3>WE LEASE PROPERTIES FASTER THAN OUR COMPETITORS</h3>
          <p>On average it is two whole weeks faster, and our rent collection systems are strong, effective and reliable. The&nbsp;<a href="http://www.melbournerealestate.com.au/past-success/" target="_blank"><strong>properties under our management</strong></a>&nbsp;represent some of South Yarra’s finest apartments, so we attract the best tenants. Our appetite for innovative technologies keeps our clients fully informed and MRE ahead of its competitors.</p>
          <p>MRE Online 24/7 allows complete, real-time access to a property investment portfolio. With a single login to our website, investors can access a complete history of monthly statements, policies, income, expenses, photos and reports.&nbsp;<a href="http://www.melbournerealestate.com.au/team/" target="_blank"><strong>Our team</strong></a> represents some of Melbourne’s most experienced and passionate property managers. We only hire people who share our vision and dedication.</p>
          <p><img class="alignnone size-full wp-image-1009" src="http://www.melbournerealestate.com.au/wp-content/uploads/2014/05/Property_Management_Image.jpg" alt="South Yarra Property Management - our property management value" width="455" height="282"></p>
          <h3><strong>What Makes Us Different From Other South Yarra Property Management Companies?</strong></h3>
          <ul>
          <li>Lower ratio of properties per Property Manager</li>
          <li>30 Day Leasing Plan to maximise rental</li>
          <li>Professional photography, video marketing &amp; reporting</li>
          <li>Online inspection booking system</li>
          <li>Regular consumer evaluation surveys on our service</li>
          <li>Team incentives to further drive stellar results</li>
          <li>Video Reporting every time we visit your property</li>
          <li>Happy, engaged, long term staff members</li>
          </ul>
          <h3><strong>Our Promise</strong></h3>
          <ul>
          <li>Accurate property appraisals and reports</li>
          <li>Contemporary, professional marketing</li>
          <li>Minimum vacancy periods</li>
          <li>A thorough and transparent tenant selection process</li>
          <li>Regular, comprehensive routine inspections with videos</li>
          <li>Detailed records of all matters pertaining to your property</li>
          <li>Same day responses to your correspondence</li>
          <li>An extensive knowledge of relevant property legislation</li>
          <li>Clear and concise monthly and end-of-financial-year statements</li>
          <li>A proactive approach to rent increases and lease renewals</li>
          <li>A team of experienced professionals taking care of your property</li>
          </ul>
          <h3><strong>We use video tours!</strong></h3>
          <p>Our goal is to see your property topping the tenant inspection shortlists. By utilising video tours to demonstrate exactly what the property features, prospective tenants receive real unvarnished information. If they like the photos and video then they’ll definitely make time to come to the inspection. Watch the example below and find all of our current video tours on our <a href="https://www.youtube.com/user/MelbourneRentals/videos" target="_blank" rel="noopener">YouTube channel</a>.</p>
          <p><iframe width="560" height="315" src="https://www.youtube.com/embed/iuOeNNsqlK8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe></p>
          <p><a href="http://www.melbournerealestate.com.au/contact-us/" target="_blank"><strong>Contact us</strong></a>&nbsp;today.</p>
          <h3>About South Yarra</h3>
          <p>Settled in the 1840’s, South Yarra has always retained a certain cachet, favoured by Melbourne’s wealthier denizens and enjoying a reputation as a blue ribbon area. Just 4km south east of the CBD, this aspirational suburb plays host to professional couples, families and singles, many of whom relish the finer things in life.</p>
          <p>Melbourne’s heritage sits cheek to jowl with modern design in amongst South Yarra’s leafy and often hilly streets, with immaculately preserved Victorian terraces, Edwardian residences, Art Deco apartments overlooking the Yarra, and contemporary mixed use residential developments happily coexisting. A suburb that embraces its early years, South Yarra is also home to many historically significant mansions, including Como, Richmond and Airlie House. In contrast, the booming rejuvenation and development of the fashionable Forrest Hill precinct, celebrates a dynamic and upwardly mobile way of life.</p>
          <p>South Yarra is notable for its impressive selection of prestigious public and private schools. Select entry Melbourne High, Melbourne Grammar, both Senior and Junior campuses of Melbourne Girls Grammar, Christ Church Grammar and South Yarra Primary represents some of Melbourne’s finest education facilities, while excellent access to Hawksburn and South Yarra train stations, multiple tram lines and bus routes ensure neighbouring schools are easily reached too.</p>
          <p>Exclusive shopping opportunities abound along Toorak road, where luxury boutiques, jewellery stores, shoe shops, galleries and giftware all jostle for attention alongside the landmark Como Centre, a perfect place to shop, dine or take in the latest cinema release. The top end of Chapel street presents a younger vibe, enjoying a reputation for upmarket and trendy retailers, fashionable bars, cafes, nightclubs and cool eateries. Further down Chapel Street, the iconic Jam Factory is a popular communal entertainment and retail complex, and the popular Prahran fresh food market is close by.</p>
          <p>The fortunate residents of South Yarra are blessed with some of Melbourne’s great public gardens, such as Fawkner Park, the historic Como Gardens and world class Royal Botanic Gardens adjacent to the exclusive Domain precinct. Proximity to well regarded sporting clubs, leading schools, cafe culture, restaurants, public transport options and verdant open spaces, ensure South Yarra ranks justifiably high on the liveability scale, and, given it is also the location of MRE’s head office, our team are uniquely qualified to help find your perfect home here.</p>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import MainSwiper from '@/components/MainSwiper'
	export default {
		name: 'areas-detail-page',
		components: {
			MainSwiper
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	.areas-detail {
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
					padding: 10px 10px;
				}
				@include media-md-down {
					padding: 0px 10px;
				}
				@include media-sm-down {
					img {
						width: 100%;
					}
          iframe {
            width: 100%;
          }
				}
			}
		}
	}
</style>
