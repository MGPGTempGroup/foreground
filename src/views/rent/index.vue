<template>
	<main class="renting">
		<main-swiper></main-swiper>
		<div class="content">
			<el-row gutter='20'>
				<el-col :sm="12" :md="8" :lg="8" class="search">
					<div class="main">
						<div class="title">
							Refine search by:
						</div>
						<div class="box">
							<el-input v-model="input" placeholder="Search by street name, suburb or postcode" size="small" style="margin-bottom: 10px;"></el-input>
						</div>
						<div class="box">
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="box">
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="box">
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="box">
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="box">
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 100%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div class="box" style="padding-top:10px;">
							<el-checkbox v-model="checked" style="margin-bottom: 10px;width: 50%;">Furnished</el-checkbox>
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 50%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<div class="btn-box">
								<div class="btn">Search</div>
							</div>
							<el-select v-model="value" size="small" style="margin-bottom: 10px;width: 50%;">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
					</div>
				</el-col>
				<house-box v-for="(item,index) in 11" :key="index"></house-box>
			</el-row>
		</div>
	</main>
</template>
<script>
	import MainSwiper from '@/components/MainSwiper'
	import HouseBox from '@/components/HouseBox'
	export default {
		name: 'renting-page',
		components: {
			MainSwiper,
			HouseBox
		},
		data() {
			return {

			}
		}

	}
</script>

<style scoped lang="scss">
	@import '@/assets/sass/mixins/responsive.scss';
	.renting {
		.content {
			margin-top: 35px;

			@include media-md {
				margin-top: 30px;
			}

			@include media-sm {
				margin-top: 20px;
			}

			@include media-xs {
				margin-top: 10px;
				padding: 0 10px;
			}
		}

		.search {
			cursor: pointer;

			@include media-xs {
				padding-bottom: 10px;
			}

			.main {
				height: 524px;
				padding: 0;
				padding-top: 10px;
				background: #fff;
				border-radius: 5px;

				.title {
					font-size: 20px;
					padding: 10px 20px;
					font-weight: 800;
				}

				.box {
					padding: 10px 20px;
					.btn-box {
						width: 50%;
						display: inline-block;

						.btn {
							display: inline-block;
							padding: 0 20px;
							border-radius: 5px;
							border: 1px solid #ff6600;
							line-height: 30px;
							color: #FF6600;

							&:hover {
								cursor: pointer;
								color: #fff;
								background: #ff6600;
							}
						}
					}
				}
			}
		}
	}
</style>
