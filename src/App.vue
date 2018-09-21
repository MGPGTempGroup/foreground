<template>
	<div class="container" >
		<navigation />
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from '@/components/Nav'
	export default {
		name: 'App',
		components: {
			Navigation
		}
	};
</script>

<style lang="scss" >
	body {
		padding: 0;
		margin: 0;
		background-color: #F7F7F7;
		div {
			color: red;
		}
	}
</style>

