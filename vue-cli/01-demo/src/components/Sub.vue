<template>
	<!--单根元素-->
	<div>
		<h2> Sub组件中的 count: {{$store.count}}</h2>
		<button @click="doSub">-</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			doSub(){
				this.$store.state.count--
			}
		}
	}
</script>

<style scoped="scoped">
</style>
