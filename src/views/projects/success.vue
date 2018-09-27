<template>
	<div class="success">
		<top-info textHtml="Past Success" img="https://www.melbournerealestate.com.au/wp-content/uploads/2014/07/Past_Success_Hero.jpg"></top-info>
		<div class="content">
			<el-row gutter='20'>
				<main-box v-for="item in 9"></main-box>
			</el-row>
		</div>
	</div>
</template>

<script>
	import TopInfo from '@/components/TopInfo'
	import MainBox from '@/components/MainBox'
	export default {
		name: 'past-success-page',
		components: {
			TopInfo,
			MainBox
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

	.success {
		.content {
			margin-top: 35px;

			@include media-md {
				margin-top: 30px;
				padding: 0 30px;
			}

			@include media-sm {
				margin-top: 20px;
			}

			@include media-xs {
				margin-top: 10px;
				padding: 0 10px;
			}
		}

	}
</style>
