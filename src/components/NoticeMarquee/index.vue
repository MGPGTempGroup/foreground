<template>
	<div class="nm-container hidden-md-and-down">
		<div ref="inner" class="inner">
			<ul :style="{ left: listLeft + 'px' }" ref="noticeList" class="notice-list">
				<li ref="noticeItem" class="notice-item" v-for="(notice, index) in list" :key="index">
					<el-rate class="notice-item-rate" v-if="notice.rate" v-model="notice.rate" disabled text-color="#ff9900">
					</el-rate>{{ notice.content }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'notice-marquee',
		inheritAttrs: false,
		props: {
			list: Array
		},
		data() {
			return {
				listLeft: 0
			}
		},
		methods: {
			// 滚动列表
			roll() {
				this.$listTimer = setInterval(() => {
					if (Math.abs(this.listLeft) > this.$refs.noticeList.getBoundingClientRect()['width']) {
						this.listLeft = this.$refs.inner.getBoundingClientRect()['width']
					}
					this.listLeft -= 1
				}, 20)
			},
			// 清除列表滚动定时器
			clearRoll() {
				clearInterval(this.$listTimer)
			}
		},
		mounted() {
			this.roll()
		},
		beforeDestroy() {
			this.clearRoll()
		}
	}
</script>


<style scoped lang="scss">
	.nm-container {
		height: 35px;
		background-color: #31363B;

		.inner {
			margin: 0 auto;
			width: 1163px;
			height: 35px;
			overflow: hidden;

			.notice-list {
				position: relative;
				display: inline-flex;
				white-space: nowrap;
				display: inline-flex;
				white-space: nowrap;

				.notice-item {
					display: flex;
					display: -webkit-flex;
					align-items: center;
					float: left;
					padding: 0px 8px;
					height: 35px;
					letter-spacing: 1.5px;
					font-size: 13px;
					color: #ccc;

					&-rate {
						transform: scale(.8, .8);
					}
				}
			}
		}
	}
</style>
