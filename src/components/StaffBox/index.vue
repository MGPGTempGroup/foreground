<template>
	<el-col :sm="8" :md="6" :lg="6" class="staff-container">
		<el-card class="staff-card" body-style="padding: 10px;" >
			<router-link class="sb-link" :to="to" >
				<div class="staff" >
					<div class="staff-img">
						<img src="/images/staff/Ann-3.png">
					</div>
					<div class="staff-info">
						<font class="staff-info-name">
							Ann Rogers
						</font>
						<div class="staff-info-desc">
							Office Manager
						</div>
					</div>
				</div>
			</router-link>
		</el-card>
		<figure class="staff-figure" >
			<figcaption class="staff-figcaption" >
				<div class="staff-figcaption-info">
					<strong class="staff-info-name" >Ann Rogers</strong>
					<br>
					<strong class="staff-info-desc" >Office Manager</strong>
				</div>
				<div class="staff-figcaption-abstract">
					The Dream Builder. Manager And Matriarch. Ann Rogers has a talent for management. As right hand woman to MRE founder and director, Peter Hooymans, she serves as a linchpin of the company. A founding member of the agency, she is incredibly proud to have helped realise the vision of creating an award winning boutique real estate agency.
					The Dream Builder. Manager And Matriarch. Ann Rogers has a talent for management. As right hand woman to MRE founder and director, Peter Hooymans, she serves as a linchpin of the company. A founding member of the agency, she is incredibly proud to have helped realise the vision of creating an award winning boutique real estate agency.
				</div>
			</figcaption>
			<router-link class="staff-figure-link" :to="to" >
				<i class="fa fa-vcard-o" ></i>
				&nbsp;Read More
			</router-link>
		</figure>
	</el-col>
</template>
<script>
	export default {
		name: 'staff-box',
		props: {
			to: {
				type: String,
				default: '/'
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';

	.staff-container {
		position: relative;
		margin-bottom: 20px;
		cursor: pointer;
		perspective: 800;
		@include media-xs{
			padding-bottom: 10px;
		}
		@include media-lg-up {
			&:hover {
				.staff-card {
					transition-delay: .4s;
					transform: rotateY(-180deg);
					backface-visibility: hidden;
				}
				.staff-figure {
					transition-delay: .4s;
					transform: rotateY(-360deg);
				}
			}
		}
		.staff-card {
			transition: all .4s;
		}
		.staff {
			&-img {
				>	img {
					width: 100%;
				}
			}
			&-info {
				padding: 10px 10px;
				line-height: 35px;
				&-name {
					font-size: 20px;
					display: inline-block;
					font-weight: 800;
				}
				&-description{

				}
			}
		}
		.staff-figure {
			position: absolute;
			left: 0px;
			top: 0px;
			padding: 15px;
			padding-top: 18px;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			color: white;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			background: url('/images/background/3e23810de9281cd01a058b3682aaef46.jpg') 300px;
			transition: all .4s;
			transform: rotateY(-180deg);
			backface-visibility: hidden;
			&-link {
				position: absolute;
				right: 22px;
				bottom: 22px;
				padding: 4px 10px;
				border: 1.5px solid #FECF4E;
				color: #FECF4E;
				transition: all .3s;
				border-radius: 3px;
				&:hover {
					color: white;
					background-color: #E8B434;
					border: 1.5px solid #E8B434;
				}
			}
		}
		.staff-figcaption {
			&-info {
				padding-bottom: 9px;
				border-bottom: 1px solid white;
			}
			&-abstract {
				height: 30%;
				margin-top: 9px;
				font-size: 14px;
				overflow: hidden;
				text-overflow:ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 9;
				overflow: hidden;
			}
		}
	}
</style>
